import { defineCollection, z } from "astro:content";

const products = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      image: image(),
      url: z.string().url(),
      price: z.number().nonnegative(),
      featured: z.number().min(1).optional(),
    }),
});

export const collections = {
  products,
};
