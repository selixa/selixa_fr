# selixa.fr

Vitrine de Selixacorp, éditeur de Koloni, bonjour.guide, Freat et des prochains produits.
Astro statique, aucune base de données, aucun framework JS côté client.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # sortie dans dist/ (+ sitemap)
```

## Ajouter un produit

Créer `src/content/produits/mon-produit.md` :

```markdown
---
nom: "Mon produit"
accroche: "Une ligne, affichée sur la carte et sous le titre."
description: "Meta description SEO, 150 à 160 caractères."
titreSeo: "Mon produit, ce qu'il fait en quelques mots"
categorie: "Secteur"
statut: "en préparation"   # en ligne | bêta | en préparation
url: "https://exemple.fr"  # optionnel
depuis: "2027"             # optionnel
plateformes: ["Web"]
points:
  - "Bénéfice 1"
  - "Bénéfice 2"
  - "Bénéfice 3"
ordre: 4                   # tri croissant
brouillon: false           # true = exclu du site publié
---

## Le problème
…
```

Le nom du fichier devient l'URL `/produits/mon-produit/`. La fiche reçoit automatiquement les
données structurées `SoftwareApplication`, le fil d'Ariane et les liens vers les autres produits.
Un produit `en préparation` permet d'annoncer un projet avant son lancement.

Champ facultatif `liens` (`linkedin`, `instagram`, `playStore`, `appStore`) : icônes affichées sur la
fiche avec le site du produit (`url`). Pour un store, `"bientôt"` affiche l'icône grisée, sans lien.

## Engagements

Trois pages dans `src/pages/engagements/` (écologie, intelligence artificielle, indépendance
numérique), sur le gabarit `src/layouts/Engagement.astro`. La liste (accueil, pied de page,
liens croisés) est dans `src/data/engagements.ts`.

## Design system

`design-system/` contient le kit de marque (logos, tokens, polices) et son README, qui fait référence.
`tokens.css` est importé par `src/styles/global.css` ; les logos et favicons servis sont copiés dans
`public/brand/`. N'utiliser que les variables `--sx-*` : aucune couleur en dur.

Thème : préférence système par défaut, bascule dans l'en-tête mémorisée dans `localStorage`
(`data-theme` sur `<html>`).

## Formulaire de contact

Le formulaire poste sur `/api/contact`, servi par le Worker `selixa-contact`
(`workers/contact/`, route `selixa.fr/api/contact`). Il envoie le message par
**Cloudflare Email Service**, sans prestataire externe : l'envoi vers une adresse de
destination vérifiée du compte est gratuit et ne demande qu'Email Routing activé sur
selixa.fr. Le bouton « Répondre » de l'e-mail reçu répond directement à l'expéditeur.

- Adresse de réception : secret `CONTACT_TO` du Worker (jamais dans le dépôt, qui est public).
  Elle doit être vérifiée dans Email Routing > Destination addresses.
- Expéditeur : `CONTACT_FROM` (`contact@selixa.fr`).
- Déployer : `cd workers/contact && npx wrangler deploy` ; secret : `npx wrangler secret put CONTACT_TO`.

L'adresse `contact@selixa.fr` (affichée en cas d'échec et dans les mentions légales) est
une règle Email Routing qui transfère vers la boîte perso.

Un champ piège invisible (`societe`) absorbe les robots : s'il est rempli, le Worker
répond 204 sans rien envoyer.

## Redirections

`public/_redirects` envoie les anciennes pages `/projets/*` du portfolio vers l'accueil (301).

## Déployer

Cloudflare Pages, connecté au dépôt Git.

- Build command : `npm run build`
- Output directory : `dist`
- Node version : 20 ou plus

Chaque `git push` sur la branche principale déclenche un build et une mise en ligne.
Les autres branches produisent une preview jetable.
