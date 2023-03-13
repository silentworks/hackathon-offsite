import { z, defineCollection } from "astro:content";

const ai = defineCollection({
  schema: z.object({
    step: z.string(),
    title: z.string(),
  }),
});

export const collections = { ai };
