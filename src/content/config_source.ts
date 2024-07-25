import { z, defineCollection } from 'astro:content';

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
  
  // 3. Export a single `collections` object to register your collection(s)
  export const collections = {
    'SDGs': SDGCollection,
    'subjects': SubjectCollection,
  };