import { defineCollection, z } from 'astro:content';

const games = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    category: z.string(),
    image: z.string().optional(),
    rating: z.number().min(0).max(5).default(4),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    releaseDate: z.string().optional(),
    playUrl: z.string().optional(),
  }),
});

const promos = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    code: z.string(),
    game: z.string(),
    discount: z.string(),
    description: z.string(),
    expiryDate: z.string(),
    isActive: z.boolean().default(true),
    category: z.string().default('general'),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    author: z.string().default('YonoLink Team'),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { games, promos, blog };
