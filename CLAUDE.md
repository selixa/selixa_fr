# selixa.fr — vitrine de Selixacorp

Site statique Astro (aucun framework JS côté client), déployé sur Cloudflare Pages. Présente la société Selixacorp et ses produits (Koloni, bonjour.guide, Freat…) ; sert aussi d'outil SEO pour annoncer les prochains produits.

## Charte graphique
- `design-system/README.md` est la référence. `design-system/tokens/tokens.css` est importé par `src/styles/global.css` (polices embarquées et hachées par Vite).
- N'utiliser que les variables `--sx-*`, la police Space Grotesk locale et les logos de `public/brand/logos/` (copies de `design-system/logos/`). Aucune couleur ni police en dur (seule exception : `<meta name="theme-color">`).
- Écarts assumés (v1.1) : halos, trame de grille, en-tête en verre, bandes « nuit » (`.bande`), animations. Toujours via les tokens de l'extension futuriste, toujours coupés par `prefers-reduced-motion`.
- Corail jamais pour du texte ni comme fond de bouton. Un seul bouton principal (`.sx-btn`) par écran.

## Contenu
- Produits : `src/content/produits/*.md` (schéma dans `src/content.config.ts`). Le Grenier du Curé n'est volontairement pas présenté pour l'instant.
- Pages d'engagements (écologie, IA, indépendance numérique) : `src/pages/engagements/`, gabarit `src/layouts/Engagement.astro`, liste dans `src/data/engagements.ts`. Ne pas y décrire les briques internes (translate-hub, support-hub, pdf-api, cockpit) : Alexis ne veut pas les exposer.
- Pas de lien GitHub. Les fiches affichent une rangée d'icônes (site, LinkedIn, Instagram, Google Play, App Store) selon `url` et `liens` ; store `"bientôt"` = icône grisée. Pas de réseaux sociaux pour Selixacorp elle-même pour l'instant.
- Ne pas inventer de chiffres, témoignages, logos clients ni informations légales : mettre `[À COMPLÉTER]`.
- Rédaction : vouvoiement, typographie française, pas d'emoji.

## Logos et vidéos produits
- Logos carrés des produits dans `public/brand/produits/<slug>.svg` (copiés des dépôts des produits, ne pas les redessiner), affichés via `src/components/LogoProduit.astro` sur une tuile claire `--sx-logo-tile`.
- Vidéo de présentation facultative (`video` dans le front matter) : MP4 720p compressé, poster JPG et sous-titres VTT dans `public/media/<slug>/`. Source Koloni : `~/dev/koloni/motion/out/koloni-pitch.mp4` (Remotion), réencodé avec `npx remotion ffmpeg` (CRF 27, 1280 px, faststart).

## Formulaire de contact
- Worker `workers/contact/` (route `selixa.fr/api/contact`), envoi par Cloudflare Email Service vers une destination vérifiée. Plus de Resend ni de Pages Function.
- Ne jamais écrire l'adresse de réception dans le dépôt (public) : c'est le secret `CONTACT_TO` du Worker.
