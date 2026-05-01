import { defineConfig } from "astro/config";

const repositoryName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "rafa-site";
const isUserOrOrgPage = repositoryName.endsWith(".github.io");

const base =
  process.env.BASE_PATH ??
  (process.env.GITHUB_ACTIONS === "true" && !isUserOrOrgPage
    ? `/${repositoryName}`
    : "/");

const site =
  process.env.SITE_URL ??
  (process.env.GITHUB_REPOSITORY_OWNER
    ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
    : "https://example.com");

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
});
