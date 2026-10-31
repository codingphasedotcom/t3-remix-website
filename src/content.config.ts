import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

export const DOC_SECTIONS = ["Get started", "Agent companies", "Reference"] as const;

const docs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/docs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.enum(DOC_SECTIONS),
    order: z.number(),
  }),
});

export const collections = { docs };
