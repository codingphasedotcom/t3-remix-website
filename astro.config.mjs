import { defineConfig } from "astro/config";

// Vercel exposes the production domain at build time; SITE_URL overrides it for a custom domain.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export default defineConfig({
  site: process.env.SITE_URL ?? (vercelUrl ? `https://${vercelUrl}` : "http://localhost:4321"),
  trailingSlash: "ignore",
  markdown: {
    shikiConfig: { theme: "vesper" },
  },
});
