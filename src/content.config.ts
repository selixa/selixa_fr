import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const produits = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/produits' }),
  schema: z.object({
    nom: z.string(),
    /** Une ligne, affichée sur la carte et sous le titre de la fiche. */
    accroche: z.string(),
    /** Meta description de la fiche : 150 à 160 caractères. */
    description: z.string().max(170),
    /** Titre de la balise <title>, sans « | Selixacorp » (ajouté automatiquement). */
    titreSeo: z.string(),
    categorie: z.string(),
    statut: z.enum(['en ligne', 'bêta', 'en préparation']),
    url: z.string().url().optional(),
    /** Organisation ou dépôt de code public, affiché sur la fiche. */
    github: z.string().url().optional(),
    depuis: z.string().optional(),
    plateformes: z.array(z.string()).default([]),
    /** Trois ou quatre bénéfices courts. */
    points: z.array(z.string()).min(2).max(5),
    ordre: z.number().default(99),
    brouillon: z.boolean().default(false),
  }),
});

export const collections = { produits };
