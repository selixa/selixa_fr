/** Pages d'engagements : accueil (bande), pied de page et liens croisés. */
export interface Engagement {
  slug: string;
  titre: string;
  court: string;
  icone: 'feuille' | 'puce' | 'ouvert';
}

export const engagements: Engagement[] = [
  {
    slug: 'ecologie',
    titre: 'Écologie',
    court: 'Zéro papier, zéro essence, et des logiciels sobres qui ne consomment que ce dont ils ont besoin.',
    icone: 'feuille',
  },
  {
    slug: 'intelligence-artificielle',
    titre: 'Intelligence artificielle',
    court: "Une IA assumée et raisonnable : utile, relue par un humain, exécutée en local dès que c'est possible.",
    icone: 'puce',
  },
  {
    slug: 'independance-numerique',
    titre: 'Indépendance numérique',
    court: 'Logiciels libres, auto-hébergement et outils européens en priorité. Et de la transparence sur le reste.',
    icone: 'ouvert',
  },
];
