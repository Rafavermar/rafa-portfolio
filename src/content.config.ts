import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "zod";

const linkSchema = z.object({
  label: z.string(),
  url: z.string(),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    context: z.string().optional(),
    problem: z.string().optional(),
    solution: z.string().optional(),
    stack: z.array(z.string()).default([]),
    impact: z.string().optional(),
    links: z.array(linkSchema).default([]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    source: z.string(),
    summary: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    externalUrl: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const certifications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/certifications" }),
  schema: z.object({
    name: z.string(),
    issuer: z.string(),
    date: z.string().optional(),
    credentialUrl: z.string().optional(),
    status: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects,
  articles,
  certifications,
};
