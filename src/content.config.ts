import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: z.object({
    titre: z.string(),
    resume: z.string(),
    annee: z.string(),
    statut: z.enum(['en cours', 'en ligne', 'archivé', 'terminé']).optional(),
    stack: z.array(z.string()).default([]),
    lien: z.string().url().optional(),
    lienLabel: z.string().optional(),
    ordre: z.number().default(99),
    brouillon: z.boolean().default(false),
  }),
});

export const collections = { projets };
