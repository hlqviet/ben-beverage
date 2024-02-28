import { defineCollection, z } from "astro:content";

const products = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      image: image(),
      url: z.string().url(),
    }),
});

export const collections = {
  products,
};
