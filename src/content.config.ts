import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().optional(),
    canonicalURL: z.string().url().optional(),
  })
});

const guides = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  })
});

const compare = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/compare" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  })
});

const answers = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/answers" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  })
});

export const collections = { blog, guides, compare, answers };
