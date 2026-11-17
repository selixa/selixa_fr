/**
 * Le socle : les briques techniques communes à tous les produits Selixacorp.
 * Décrire la fonction, jamais un secret, une clé ou un détail d'infrastructure sensible.
 */
export interface Brique {
  nom: string;
  role: string;
  texte: string;
  /** Nom de l'icône (voir src/components/Icone.astro). */
  icone: 'langues' | 'bulle' | 'document' | 'cadran';
}

export const briques: Brique[] = [
  {
    nom: 'Traduction',
    role: 'translate-hub',
    texte:
      "Un moteur de traduction mutualisé. Les produits déposent leurs textes, nos machines les traduisent et les renvoient, sans dépendre d'un service tiers.",
    icone: 'langues',
  },
  {
    nom: 'Support',
    role: 'support-hub',
    texte:
      "Un seul service de chat, de courrier et d'aide pour tous les produits, chacun avec son apparence et ses adresses. Vos messages arrivent toujours au même endroit.",
    icone: 'bulle',
  },
  {
    nom: 'Documents',
    role: 'pdf-api',
    texte:
      'Une API de génération de PDF auto-hébergée : factures, devis, quittances et documents officiels, mis en page une fois, réutilisés partout.',
    icone: 'document',
  },
  {
    nom: 'Pilotage',
    role: 'cockpit',
    texte:
      "Une console de pilotage multi-produits, en application native, pour suivre l'activité, répondre au support et administrer chaque produit.",
    icone: 'cadran',
  },
];
