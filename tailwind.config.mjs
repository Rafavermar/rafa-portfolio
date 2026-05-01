/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "rgb(var(--color-ink-950) / <alpha-value>)",
          800: "rgb(var(--color-ink-800) / <alpha-value>)",
          650: "rgb(var(--color-ink-650) / <alpha-value>)",
          500: "rgb(var(--color-ink-500) / <alpha-value>)",
        },
        paper: {
          50: "rgb(var(--color-paper-50) / <alpha-value>)",
          100: "rgb(var(--color-paper-100) / <alpha-value>)",
          200: "rgb(var(--color-paper-200) / <alpha-value>)",
        },
        line: "rgb(var(--color-line) / <alpha-value>)",
        steel: "rgb(var(--color-steel) / <alpha-value>)",
        sage: "rgb(var(--color-sage) / <alpha-value>)",
        sand: "rgb(var(--color-sand) / <alpha-value>)",
        cloud: "rgb(var(--color-cloud) / <alpha-value>)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      boxShadow: {
        soft: "0 16px 42px rgba(20, 33, 61, 0.08)",
        lift: "0 24px 60px rgba(20, 33, 61, 0.12)",
      },
    },
  },
  plugins: [],
};
