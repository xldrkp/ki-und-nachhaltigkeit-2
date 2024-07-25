// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Astroship'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

const SubjectCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
      title: z.string(),
      color: z.string(),
    }),
  });

const SDGCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
      number: z.number(),
      title: z.string(),
      subtitle: z.string(),
      color: z.string(),
      zotero_id: z.string().optional(),
      einordnung: z.string().optional(),
    }),
  });
  
export const collections = {
  'blog': blogCollection,
  'team': teamCollection,
    'SDGs': SDGCollection,
    'subjects': SubjectCollection,
};