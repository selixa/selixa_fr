export type Niveau = 'quotidien' | 'solide' | 'occasionnel';

export interface Outil {
  nom: string;
  note: string;
  niveau: Niveau;
}

export interface GroupeOutils {
  categorie: string;
  outils: Outil[];
}

export const outils: GroupeOutils[] = [
  {
    categorie: 'données',
    outils: [
      { nom: 'PostgreSQL', note: 'schémas, contraintes, vues, pg_cron', niveau: 'quotidien' },
      { nom: 'Supabase', note: 'RLS, Edge Functions, storage, auth', niveau: 'quotidien' },
      { nom: 'SQL', note: 'écrit à la main, pas généré à la souris', niveau: 'quotidien' },
    ],
  },
  {
    categorie: 'code',
    outils: [
      { nom: 'TypeScript', note: 'Deno côté Edge Functions', niveau: 'solide' },
      { nom: 'Astro', note: 'ce site tourne dessus', niveau: 'solide' },
      { nom: 'Git', note: 'des messages de commit lisibles, promis', niveau: 'quotidien' },
    ],
  },
  {
    categorie: 'interfaces',
    outils: [
      { nom: 'WeWeb', note: 'applis métier complètes, workflows, datagrids', niveau: 'quotidien' },
      { nom: 'Figma', note: 'assez pour cadrer, pas pour impressionner', niveau: 'occasionnel' },
      { nom: 'CSS', note: 'à la main, sans framework quand c\'est possible', niveau: 'solide' },
    ],
  },
  {
    categorie: 'infra',
    outils: [
      { nom: 'Cloudflare', note: 'Pages, DNS, Workers', niveau: 'quotidien' },
      { nom: 'Stripe / Stancer', note: 'paiements, abonnements, proratas', niveau: 'solide' },
      { nom: 'Resend / Brevo', note: 'transactionnel et SPF/DKIM qui passent', niveau: 'solide' },
    ],
  },
  {
    categorie: 'hors écran',
    outils: [
      { nom: 'Notion', note: 'cerveau externe, base de tâches', niveau: 'quotidien' },
      { nom: 'BAFA / BAFD', note: 'formation, gestion de conflit par simulation', niveau: 'quotidien' },
      { nom: 'Une imprimante 3D', note: 'surtout pour réparer des trucs', niveau: 'occasionnel' },
    ],
  },
];
