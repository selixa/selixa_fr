# Design system Selixacorp

Kit de marque pour le site de présentation de Selixacorp (selixa.fr) et les supports associés (stores, réseaux, mails). À lire en entier avant de coder ou de designer quoi que ce soit.

Ouvre `preview.html` dans un navigateur pour voir le tout rendu.

## Contenu du kit

- `logos/` : tous les logos en SVG, texte déjà vectorisé (aucune police nécessaire pour les afficher).
- `png/` : exports prêts à l'emploi (icônes stores, favicons, logo horizontal, images d'en-tête).
- `tokens/tokens.css` : variables CSS, thèmes clair et sombre, reset léger et deux composants de base (`.sx-btn`, `.sx-card`). C'est le fichier à importer.
- `tokens/tokens.json` : les mêmes valeurs en JSON, pour un outil ou une config Tailwind.
- `fonts/` : Space Grotesk 400, 500 et 700 en woff2 (licence OFL incluse). Pas besoin de Google Fonts, ce qui évite aussi tout souci RGPD.
- `preview.html` : page de référence qui montre logos, couleurs, typo et composants.

## Identité

Selixacorp est la société éditrice de Koloni (gestion des accueils collectifs de mineurs) et d'autres applications. Le ton de la marque : sobre, fiable, simple. Pas de jargon, pas d'effets, pas de superlatifs.

Le logo est un S arrondi blanc sur tuile indigo, avec un petit point corail en haut à droite. Le nom s'écrit « Selixacorp » en un mot, avec « Selixa » en gras et « corp » en régulier.

## Logos : quoi utiliser où

- `logo-horizontal.svg` sur fond clair, `logo-horizontal-dark.svg` sur fond sombre. C'est le logo par défaut dans l'en-tête du site (hauteur 40 à 56 px).
- `icon-rounded.svg` pour le favicon et les petits usages carrés. `favicon.svg` est identique, à référencer dans `<link rel="icon" type="image/svg+xml">`.
- `icon-square.svg` pleine page, sans coins arrondis : pour Google Play (`png/icon-512.png`) et l'App Store (`png/icon-1024-appstore.png`), qui appliquent eux-mêmes l'arrondi. Ne jamais envoyer d'icône déjà arrondie ou avec transparence à Apple.
- `mark.svg` et `mark-white.svg` : le S seul, sans tuile, pour les filigranes, les puces ou les fonds colorés.
- `png/play-feature-1024x500.png` : image de présentation Google Play. `png/feature-4096x2304.png` : même visuel en 16:9, utilisable en image Open Graph après recadrage (1200×630).
- `png/apple-touch-icon-180.png` pour iOS, `png/favicon-192.png` et `favicon-32.png` en repli.

Règles : laisser autour du logo un espace libre au moins égal à la hauteur du S. Ne pas étirer, ne pas recolorer, ne pas ajouter d'ombre ni de dégradé, ne pas descendre sous 24 px de haut pour la version horizontale. Ne pas redessiner le texte avec une autre police : utiliser les SVG.

## Couleurs

- Indigo `#1E2160` : couleur de marque, texte principal en thème clair, fond du bouton principal.
- Indigo profond `#14163A` : fond du thème sombre, survol du bouton principal.
- Bleu `#2B3FD6` : liens et focus en thème clair uniquement.
- Corail `#FF8A5B` : accent décoratif, à utiliser en toutes petites touches (un point, un filet, une puce). Jamais pour du texte, ni comme fond d'un bouton avec texte blanc : le contraste est insuffisant.
- Fond `#F7F7FB`, surface `#FFFFFF`, bordure `#E2E4F0`, texte atténué `#5A5E8A`.

Le thème sombre suit `prefers-color-scheme` et peut être forcé avec `data-theme="dark"` ou `data-theme="light"` sur `<html>`. Tous les couples texte/fond du kit respectent un contraste d'au moins 4.5:1. Les nouvelles couleurs sont à ajouter dans `tokens.css`, pas en dur dans les composants.

## Typographie

Space Grotesk partout : 700 pour les titres et le display, 500 pour les libellés et boutons, 400 pour le texte courant. Titres avec un interlignage serré (1.05 à 1.15) et un léger crénage négatif (`-0.02em`, `-0.03em` pour le display). Texte courant en 17 px, interligne 1.6, largeur de ligne limitée à environ 60 caractères.

## Mise en page et composants

Grille de 4 px, échelle `--sx-space-1` à `--sx-space-10`. Conteneur de 1120 px max avec gouttières de 16 px sur mobile et 32 px à partir de 768 px. Rayons : 8, 16, 24 px et pilule pour les boutons. Cibles tactiles d'au moins 48 px de haut.

Le site doit fonctionner à 390 px de large sans défilement horizontal. Un seul bouton principal par écran. Pas de dégradés, pas d'illustrations génériques, pas d'émojis comme icônes. Les icônes sont des SVG au trait, de 2 px d'épaisseur, coins arrondis, dans la couleur du texte.

## Pour Claude Code

Copie ce dossier dans le repo du site (par exemple `design-system/`) et ajoute au `CLAUDE.md` du projet :

```
Charte graphique : design-system/README.md est la référence. Importer design-system/tokens/tokens.css, n'utiliser que les variables --sx-*, les polices locales de design-system/fonts/ et les logos de design-system/logos/. Aucune couleur ni police en dur.
```

Au moment de déployer, copie les logos, les polices et `tokens.css` dans le dossier public du site, en gardant leurs chemins relatifs (le CSS référence `../fonts/`).

## Contenu éditorial à ne pas inventer

Les textes du site (présentation, chiffres, références clients, mentions légales, SIREN, adresse) viennent d'Alexis. Ne pas inventer de statistiques, de témoignages ni de logos clients : mettre un marqueur `[À COMPLÉTER]` à la place.

## Écarts assumés (v1.1, novembre 2026)

Pour le site selixa.fr, Alexis a choisi un rendu plus audacieux et futuriste que le kit d'origine. Les règles « pas d'effets, pas de dégradés » sont assouplies, **dans ce cadre seulement** :

- **Halos** : dégradés radiaux très diffus (`--sx-glow`, `--sx-glow-2`) derrière les titres display. Jamais derrière du texte courant, jamais sur un bouton.
- **Trame de grille** (`--sx-grid-line`) en fond du hero et des bandes sombres. Son lent défilement est figé si `prefers-reduced-motion: reduce`.
- **Verre** : en-tête collant translucide (`--sx-glass-bg`, `--sx-glass-blur`).
- **Bandes nuit** : sections en `--sx-indigo-night` dans les deux thèmes, texte `--sx-on-band` / `--sx-on-band-muted` (contraste > 4.5:1).
- **Mouvement** : apparitions au scroll et survols (`--sx-ease`, `--sx-dur`), toujours désactivés avec `prefers-reduced-motion`.

Restent inchangés : le corail jamais pour du texte ni comme fond de bouton, les logos jamais modifiés, un seul bouton principal par écran, aucune couleur en dur hors `tokens.css`.
