export interface Outil {
  nom: string;
  note: string;
  categorie: string;
  /** Nom du fichier dans public/logos/, sans l'extension. Sinon, monogramme. */
  logo?: string;
  /** Lien officiel du service. */
  lien?: string;
  /**
   * Lien de parrainage. S'il est renseigné, il remplace `lien` et la carte
   * affiche la mention « aff. » avec rel="sponsored nofollow".
   */
  lienAffilie?: string;
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
        logo: 'supabase',
        lien: 'https://supabase.com',
      },
      {
        nom: 'PostgreSQL',
        categorie: 'données',
        note: 'Schémas, contraintes, vues, triggers, pg_cron. Écrit à la main.',
        logo: 'postgresql',
        lien: 'https://www.postgresql.org',
      },
      {
        nom: 'Xano',
        categorie: 'données',
        note: 'Back-end managé quand le client veut du visuel et pas de SQL.',
        lien: 'https://www.xano.com',
      },
      {
        nom: 'WeWeb',
        categorie: 'interfaces',
        note: 'Applications métier complètes. Mon outil de front principal depuis deux ans.',
        lien: 'https://www.weweb.io',
        // lienAffilie: 'https://www.weweb.io/?via=...',
      },
      {
        nom: 'FlutterFlow',
        categorie: 'interfaces',
        note: 'Applications iOS et Android natives. Utile tant qu’on sait où est le plafond.',
        lien: 'https://flutterflow.io',
      },
      {
        nom: 'Webflow',
        categorie: 'interfaces',
        note: "Sites vitrines que l'équipe du client peut reprendre sans moi.",
        logo: 'webflow',
        lien: 'https://webflow.com',
      },
      {
        nom: 'JetAdmin',
        categorie: 'interfaces',
        note: "Back-offices d'administration montés en quelques heures sur une base existante.",
        lien: 'https://www.jetadmin.io',
      },
      {
        nom: 'Claude',
        categorie: 'assistants',
        note: 'Ouvert toute la journée. Revue de code, SQL, rédaction, mise en doute.',
        logo: 'claude',
        lien: 'https://claude.ai',
      },
      {
        nom: 'ChatGPT',
        categorie: 'assistants',
        note: 'Second avis. Deux modèles qui divergent, c’est le signal qu’il faut vérifier.',
        lien: 'https://chatgpt.com',
      },
      {
        nom: 'Cloudflare',
        categorie: 'infrastructure',
        note: 'Pages, DNS, Workers. Tout ce que je mets en ligne passe par là.',
        logo: 'cloudflare',
        lien: 'https://www.cloudflare.com',
      },
      {
        nom: 'GitHub',
        categorie: 'infrastructure',
        note: 'Versionnement et déploiement continu. Des messages de commit lisibles, promis.',
        logo: 'github',
        lien: 'https://github.com',
      },
      {
        nom: 'n8n',
        categorie: 'automatisation',
        note: 'Automatisations entre services, auto-hébergé quand les données sont sensibles.',
        logo: 'n8n',
        lien: 'https://n8n.io',
      },
      {
        nom: 'Stripe',
        categorie: 'paiement',
        note: 'Abonnements, proratas, webhooks. La référence, au prix fort.',
        logo: 'stripe',
        lien: 'https://stripe.com',
      },
      {
        nom: 'Stancer',
        categorie: 'paiement',
        note: 'Alternative française. Frais nettement plus bas, périmètre plus étroit.',
        lien: 'https://www.stancer.com',
      },
      {
        nom: 'Intercom',
        categorie: 'relation client',
        note: 'Support et base de connaissances. Puissant, et facturé en conséquence.',
        logo: 'intercom',
        lien: 'https://www.intercom.com',
      },
      {
        nom: 'Crisp',
        categorie: 'relation client',
        note: 'Chat plus léger et français. Suffisant dans la majorité des cas.',
        lien: 'https://crisp.chat',
      },
      {
        nom: 'Matomo',
        categorie: 'mesure',
        note: 'Analytics auto-hébergé. Pas de transfert hors UE, pas de bandeau cookies.',
        logo: 'matomo',
        lien: 'https://matomo.org',
      },
      {
        nom: 'YOURLS',
        categorie: 'mesure',
        note: "Raccourcisseur d'URL auto-hébergé, avec les statistiques de clics.",
        lien: 'https://yourls.org',
      },
      {
        nom: 'Notion',
        categorie: 'organisation',
        note: 'Cerveau externe. Documentation produit, base de tâches, CMS de blog.',
        logo: 'notion',
        lien: 'https://www.notion.com',
      },
      {
        nom: 'Slack',
        categorie: 'organisation',
        note: 'Coordination et alertes techniques branchées sur les automatisations.',
        lien: 'https://slack.com',
      },
      {
        nom: 'Home Assistant',
        categorie: 'bac à sable',
        note: 'La domotique de la maison. Là où je casse des choses sans conséquence.',
        logo: 'home-assistant',
        lien: 'https://www.home-assistant.io',
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
        lien: 'https://www.dougs.fr',
        // lienAffilie: 'https://www.dougs.fr/?...',
      },
      {
        nom: 'Revolut',
        categorie: 'banque',
        note: 'Compte professionnel. Rapide à ouvrir, à compléter par une banque classique.',
        logo: 'revolut',
        lien: 'https://www.revolut.com',
        // lienAffilie: 'https://www.revolut.com/referral/...',
      },
      {
        nom: 'Malt',
        categorie: 'freelance',
        note: 'Plateforme de mise en relation. Vitrine correcte, commission à intégrer au tarif.',
        logo: 'malt',
        lien: 'https://www.malt.fr',
      },
      {
        nom: 'OVH',
        categorie: 'hébergement',
        note: 'Noms de domaine et VPS. Interface datée, tarifs difficiles à battre.',
        logo: 'ovh',
        lien: 'https://www.ovhcloud.com',
      },
      {
        nom: 'PlanetHoster',
        categorie: 'hébergement',
        note: 'Mutualisé. Pratique pour consolider quelques petits services au même endroit.',
        lien: 'https://www.planethoster.com',
        // lienAffilie: 'https://www.planethoster.com/?...',
      },
      {
        nom: 'OpenDisplay',
        categorie: 'affichage',
        note: "À compléter — remplace cette ligne par ton retour d'usage réel.",
      },
    ],
  },
];
