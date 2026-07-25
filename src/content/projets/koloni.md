---
titre: "Koloni"
resume: "SaaS de gestion et déclaration d'ACM. Inscriptions, facturation, conformité SDJES, zéro papier. Écrit seul, hébergé en France."
annee: "2025 —"
statut: "en cours"
stack: ["Supabase", "WeWeb", "Stancer"]
lien: "https://koloni.fr"
lienLabel: "koloni.fr"
ordre: 1
---

## Le problème

Un directeur d'accueil collectif de mineurs passe ses soirées de juin dans Excel. Fiches sanitaires en papier, attestations CAF ressaisies à la main, déclaration TAM remplie deux fois, et la certitude qu'un inspecteur SDJES peut débarquer le mardi suivant.

## Ce que fait Koloni

Un tunnel d'inscription famille en quelques minutes, avec authentification par code à usage unique, paiement en dix modes différents, et facturation automatique au niveau de la souscription. Côté structure : gestion du personnel et des diplômes, contrôle des taux d'encadrement, génération des documents de conformité, et un module d'urgence qui sort en PDF les hôpitaux et points d'eau les plus proches du lieu de séjour.

## Ce que j'ai construit

Le schéma PostgreSQL complet, une trentaine de tables sous RLS. Une vingtaine d'Edge Functions en Deno pour les tunnels d'inscription, la génération de PDF, les paiements et les exports. L'interface entière en WeWeb. Le déploiement sur Cloudflare Pages. Et la documentation, parce que le développeur qui reprendra ce code un jour, c'est probablement moi dans deux ans.

## Ce que ça m'a appris

Que vingt saisons de terrain valent tous les entretiens utilisateurs du monde, et que ça ne dispense pas d'en faire quand même.
