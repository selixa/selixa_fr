---
titre: "Koloni — l'application"
resume: "SaaS de gestion et de déclaration d'accueils collectifs de mineurs. Inscriptions, facturation, conformité SDJES. Une trentaine de tables, une vingtaine d'Edge Functions, écrit seul."
annee: "2025 —"
statut: "en cours"
stack: ["Supabase", "PostgreSQL", "WeWeb", "Deno", "Stancer"]
lien: "https://koloni.fr"
lienLabel: "koloni.fr"
ordre: 1
---

## Le problème

Un directeur d'accueil collectif de mineurs passe ses soirées de juin dans Excel. Fiches sanitaires en papier, attestations CAF ressaisies à la main, déclaration TAM remplie deux fois, et la certitude qu'un inspecteur peut débarquer le mardi suivant.

## L'architecture

Une base PostgreSQL sur Supabase, hébergée en France : une trentaine de tables sous RLS, une hiérarchie souscription → inscription → lignes de détail, des vues en `SECURITY INVOKER` et un helper `is_admin()` en `SECURITY DEFINER`. Les traitements lourds tournent dans une vingtaine d'Edge Functions Deno — tunnel d'inscription famille, génération de factures PDF avec QR code, gestionnaire de paiement unifié couvrant dix modes dont Stripe et Stancer, exports et documents de conformité.

## L'interface

Construite en WeWeb, déployée en statique sur Cloudflare Pages. Tunnel d'inscription multi-étapes avec authentification par code à usage unique, datagrids AG Grid pour la gestion du personnel et des inscriptions, module de conformité avec catalogue de 34 points de contrôle, et une génération de PDF d'urgence qui interroge l'IGN et Overpass pour sortir les hôpitaux et points d'eau les plus proches du lieu de séjour.

## Ce que ça m'a appris

Que la partie difficile n'est jamais la technique. C'est de décider quelle contrainte on impose à l'utilisateur pour que la donnée reste propre, sans qu'il ait l'impression de remplir un formulaire administratif de plus.
