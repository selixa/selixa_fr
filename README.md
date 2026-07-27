# selixa.fr

Portfolio statique. Astro , aucune base de données, aucun framework JS côté client.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # sortie dans dist/
```

## Ajouter un projet

Créer `src/content/projets/mon-projet.md` :

```markdown
---
titre: "Mon projet"
resume: "Une phrase, deux maximum."
annee: "2026"
statut: "en cours"        # en cours | en ligne | archivé | terminé — optionnel
stack: ["Supabase", "Deno"]
lien: "https://exemple.fr"  # optionnel
lienLabel: "exemple.fr"     # optionnel
ordre: 4                    # tri croissant sur la page d'accueil
brouillon: false            # true = exclu du site publié
---

## Un titre de section

Le texte en Markdown.
```

Le nom du fichier devient l'URL : `/projets/mon-projet/`. Le schéma est déclaré dans
`src/content.config.ts` — si un champ obligatoire manque ou qu'un type est faux, le
build échoue avec un message explicite plutôt que de publier une page cassée.

Les images vont dans `src/assets/` et se référencent en relatif depuis le Markdown ;
Astro les redimensionne et les convertit en WebP au build.

## Modifier les outils

`src/data/outils.ts`. Un tableau de catégories, chaque outil a un nom, une note courte
et un niveau (`quotidien`, `solide`, `occasionnel`). Le niveau `quotidien` s'affiche en
couleur d'accent.

## Formulaire de contact

Le formulaire poste sur `/api/contact`, servi par la Pages Function
`functions/api/contact.ts` qui relaie vers Resend. Trois variables d'environnement à
créer dans Cloudflare Pages (Settings → Environment variables), pour production **et**
preview :

| Variable         | Exemple                       |
| ---------------- | ----------------------------- |
| `RESEND_API_KEY` | `re_...` (chiffrée)           |
| `CONTACT_TO`     | `alexis@selixa.fr`            |
| `CONTACT_FROM`   | `site@selixa.fr`              |

Le domaine de `CONTACT_FROM` doit être vérifié dans Resend (SPF + DKIM). Un champ
piège invisible (`societe`) absorbe les robots : s'il est rempli, la fonction répond
204 sans rien envoyer.

## Déployer

Cloudflare Pages, connecté au dépôt Git.

- Build command : `npm run build`
- Output directory : `dist`
- Node version : 20 ou plus

Chaque `git push` sur la branche principale déclenche un build et une mise en ligne.
Les autres branches produisent une preview jetable.

## Mode sombre

Bascule dans l'en-tête, choix mémorisé dans `localStorage`, thème système par défaut.
Les couleurs sont des variables CSS dans `src/styles/global.css` — deux blocs, `:root`
et `:root[data-theme='dark']`. Ne jamais écrire une couleur en dur ailleurs.
