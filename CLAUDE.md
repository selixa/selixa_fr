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
- Seule la fiche Koloni affiche un lien GitHub (`github` dans le front matter). Pas de réseaux sociaux pour l'instant.
- Ne pas inventer de chiffres, témoignages, logos clients ni informations légales : mettre `[À COMPLÉTER]`.
- Rédaction : vouvoiement, typographie française, pas d'emoji.
