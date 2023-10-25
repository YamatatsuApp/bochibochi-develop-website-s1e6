import { z, defineCollection } from 'astro:content';
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    author: z.string(),
    tags: z.string().array().optional(),
    createdAt: z.string().transform((str: string) => new Date(str)),
  }),
});
export const collections = {
  blog,
};
