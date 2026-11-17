/**
 * Formulaire de contact de selixa.fr (POST https://selixa.fr/api/contact).
 *
 * Envoie le message à l'adresse personnelle d'Alexis par Cloudflare Email Service :
 * l'envoi vers une adresse de destination vérifiée du compte est gratuit et ne demande
 * qu'Email Routing activé sur selixa.fr. L'adresse de réception est un secret du Worker
 * (CONTACT_TO), jamais dans le dépôt, qui est public.
 */

interface Env {
  EMAIL: SendEmail;
  /** Secret : adresse de réception (destination vérifiée dans Email Routing). */
  CONTACT_TO: string;
  /** Expéditeur, sur le domaine selixa.fr. */
  CONTACT_FROM: string;
}

// Types minimaux de la liaison send_email (évite une dépendance à @cloudflare/workers-types).
interface SendEmail {
  send(message: {
    to: string;
    from: string | { email: string; name?: string };
    replyTo?: string | { email: string; name?: string };
    subject: string;
    text?: string;
    html?: string;
  }): Promise<{ messageId: string }>;
}

const echapper = (s: string) =>
  s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

const reponse = (corps: string | null, status: number) =>
  new Response(corps, {
    status,
    headers: corps?.startsWith('{') ? { 'Content-Type': 'application/json' } : { 'Content-Type': 'text/plain; charset=utf-8' },
  });

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== 'POST') return reponse('Méthode non autorisée', 405);

    // Uniquement depuis le site (le formulaire poste en same-origin)
    const origine = request.headers.get('Origin');
    if (origine && !/^https:\/\/(www\.)?selixa\.fr$/.test(origine)) return reponse('Origine refusée', 403);

    let corps: Record<string, unknown>;
    try {
      corps = await request.json();
    } catch {
      return reponse('Corps invalide', 400);
    }

    const champ = (k: string, max: number) => String(corps[k] ?? '').trim().slice(0, max);
    const nom = champ('nom', 120).replace(/[\r\n]+/g, ' ');
    const email = champ('email', 200);
    const message = champ('message', 5000);

    // Champ piège invisible : un robot le remplit, on fait semblant d'avoir envoyé.
    if (champ('societe', 200)) return reponse(null, 204);
    if (!nom || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return reponse('Champs manquants ou invalides', 400);
    }

    try {
      await env.EMAIL.send({
        to: env.CONTACT_TO,
        from: { email: env.CONTACT_FROM, name: 'Formulaire selixa.fr' },
        replyTo: { email, name: nom },
        subject: `selixa.fr — message de ${nom}`,
        text: `${nom} <${email}>\n\n${message}`,
        html: `<p><strong>${echapper(nom)}</strong> &lt;${echapper(email)}&gt;</p><pre style="font-family:inherit;white-space:pre-wrap">${echapper(message)}</pre>`,
      });
    } catch (e) {
      const err = e as { code?: string; message?: string };
      console.error('envoi', err.code, err.message);
      return reponse('Envoi impossible', 502);
    }

    return reponse(JSON.stringify({ ok: true }), 200);
  },
};
