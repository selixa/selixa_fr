---
titre: "Flexliving — l'application mobile"
resume: "Application iOS et Android construite en FlutterFlow, branchée sur une petite dizaine d'API tierces. Le projet où j'ai passé le plus de temps à lire de la documentation d'intégration."
annee: "2025"
statut: "en ligne"
stack: ["FlutterFlow", "API REST", "Xano"]
ordre: 3
---

## L'idée

Une application mobile pour les résidents, qui centralise dans un seul écran ce qui est habituellement éparpillé entre six services différents et quatre adresses de courriel.

## La partie amusante

Presque tout passe par des intégrations. Chaque service tiers a sa propre idée de ce qu'est une API : authentification par jeton ici, par clé dans l'en-tête là, pagination différente à chaque fois, formats de date incompatibles, et au moins un fournisseur qui renvoie un code 200 accompagné d'un message d'erreur. L'essentiel du travail consiste à normaliser tout ça en amont pour que l'application, elle, reste simple.

## FlutterFlow

Le compromis assumé : on livre une application native sur les deux plateformes sans écrire de Dart, au prix d'un plafond de personnalisation qu'on finit par toucher. Quand on le touche, on descend écrire du code custom — et savoir où se situe ce plafond avant de commencer, c'est ce qui fait la différence entre un projet livré et un projet abandonné.
