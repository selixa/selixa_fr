interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO: string;
  CONTACT_FROM: string;
}

const echapper = (s: string) =>
  s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let corps: Record<string, string>;

  try {
    corps = await request.json();
  } catch {
    return new Response('Corps invalide', { status: 400 });
  }

  const nom = (corps.nom ?? '').trim().slice(0, 120);
  const email = (corps.email ?? '').trim().slice(0, 200);
  const message = (corps.message ?? '').trim().slice(0, 5000);
  const piege = (corps.societe ?? '').trim();

  if (piege) return new Response(null, { status: 204 });
  if (!nom || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return new Response('Champs manquants ou invalides', { status: 400 });
  }

  const envoi = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: [env.CONTACT_TO],
      reply_to: email,
      subject: `selixa.fr — message de ${nom}`,
      html: `<p><strong>${echapper(nom)}</strong> &lt;${echapper(email)}&gt;</p><pre style="font-family:monospace;white-space:pre-wrap">${echapper(message)}</pre>`,
    }),
  });

  if (!envoi.ok) {
    console.error('resend', envoi.status, await envoi.text());
    return new Response('Envoi impossible', { status: 502 });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
