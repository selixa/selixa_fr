export interface Outil {
  nom: string;
  note: string;
  categorie: string;
}

export interface BlocOutils {
  cle: string;
  titre: string;
  intro: string;
  outils: Outil[];
}

export const blocs: BlocOutils[] = [
  {
    cle: 'atelier',
    titre: "L'atelier",
    intro:
      "Ce avec quoi je construis, tous les jours ou presque. Je connais leurs limites, ce qui est souvent l'information la plus utile.",
    outils: [
      {
        nom: 'Supabase',
        categorie: 'données',
        note: 'Postgres managé. RLS, Edge Functions, storage, auth. Mon socle par défaut.',
      },
      {
        nom: 'PostgreSQL',
        categorie: 'données',
        note: 'Schémas, contraintes, vues, triggers, pg_cron. Écrit à la main.',
      },
      {
        nom: 'Xano',
        categorie: 'données',
        note: 'Back-end managé quand le client veut du visuel et pas de SQL.',
      },
      {
        nom: 'WeWeb',
        categorie: 'interfaces',
        note: 'Applications métier complètes. Mon outil de front principal depuis deux ans.',
      },
      {
        nom: 'FlutterFlow',
        categorie: 'interfaces',
        note: 'Applications iOS et Android natives. Utile tant qu’on sait où est le plafond.',
      },
      {
        nom: 'Webflow',
        categorie: 'interfaces',
        note: "Sites vitrines que l'équipe du client peut reprendre sans moi.",
      },
      {
        nom: 'JetAdmin',
        categorie: 'interfaces',
        note: "Back-offices d'administration montés en quelques heures sur une base existante.",
      },
      {
        nom: 'Claude',
        categorie: 'assistants',
        note: 'Ouvert toute la journée. Revue de code, SQL, rédaction, mise en doute.',
      },
      {
        nom: 'ChatGPT',
        categorie: 'assistants',
        note: 'Second avis. Deux modèles qui divergent, c’est le signal qu’il faut vérifier.',
      },
      {
        nom: 'Cloudflare',
        categorie: 'infrastructure',
        note: 'Pages, DNS, Workers. Tout ce que je mets en ligne passe par là.',
      },
      {
        nom: 'GitHub',
        categorie: 'infrastructure',
        note: 'Versionnement et déploiement continu. Des messages de commit lisibles, promis.',
      },
      {
        nom: 'n8n',
        categorie: 'automatisation',
        note: 'Automatisations entre services, auto-hébergé quand les données sont sensibles.',
      },
      {
        nom: 'Stripe',
        categorie: 'paiement',
        note: 'Abonnements, proratas, webhooks. La référence, au prix fort.',
      },
      {
        nom: 'Stancer',
        categorie: 'paiement',
        note: 'Alternative française. Frais nettement plus bas, périmètre plus étroit.',
      },
      {
        nom: 'Intercom',
        categorie: 'relation client',
        note: 'Support et base de connaissances. Puissant, et facturé en conséquence.',
      },
      {
        nom: 'Crisp',
        categorie: 'relation client',
        note: 'Chat plus léger et français. Suffisant dans la majorité des cas.',
      },
      {
        nom: 'Matomo',
        categorie: 'mesure',
        note: 'Analytics auto-hébergé. Pas de transfert hors UE, pas de bandeau cookies.',
      },
      {
        nom: 'YOURLS',
        categorie: 'mesure',
        note: "Raccourcisseur d'URL auto-hébergé, avec les statistiques de clics.",
      },
      {
        nom: 'Notion',
        categorie: 'organisation',
        note: 'Cerveau externe. Documentation produit, base de tâches, CMS de blog.',
      },
      {
        nom: 'Slack',
        categorie: 'organisation',
        note: 'Coordination et alertes techniques branchées sur les automatisations.',
      },
      {
        nom: 'Home Assistant',
        categorie: 'bac à sable',
        note: 'La domotique de la maison. Là où je casse des choses sans conséquence.',
      },
    ],
  },
  {
    cle: 'terrain',
    titre: 'Retours de terrain',
    intro:
      "Des services que j'utilise comme client, pas comme constructeur. Je n'en fais pas la promotion — je peux juste dire ce que ça donne au bout de deux ans.",
    outils: [
      {
        nom: 'Dougs',
        categorie: 'comptabilité',
        note: 'Comptabilité en ligne. Le rapprochement automatique fait gagner un vrai temps.',
      },
      {
        nom: 'Revolut',
        categorie: 'banque',
        note: 'Compte professionnel. Rapide à ouvrir, à compléter par une banque classique.',
      },
      {
        nom: 'Malt',
        categorie: 'freelance',
        note: 'Plateforme de mise en relation. Vitrine correcte, commission à intégrer au tarif.',
      },
      {
        nom: 'OVH',
        categorie: 'hébergement',
        note: 'Noms de domaine et VPS. Interface datée, tarifs difficiles à battre.',
      },
      {
        nom: 'PlanetHoster',
        categorie: 'hébergement',
        note: 'Mutualisé. Pratique pour consolider quelques petits services au même endroit.',
      },
      {
        nom: 'OpenDisplay',
        categorie: 'affichage',
        note: "À compléter — remplace cette ligne par ton retour d'usage réel.",
      },
    ],
  },
];
