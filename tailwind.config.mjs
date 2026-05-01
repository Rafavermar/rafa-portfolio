/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#111827",
          800: "#263241",
          650: "#526273",
          500: "#718096",
        },
        paper: {
          50: "#fbfaf7",
          100: "#f4efe7",
          200: "#e8dece",
        },
        line: "#d7d3cb",
        moss: "#50715f",
        steel: "#315f86",
        copper: "#ad6d3b",
        plum: "#6f5b7f",
        teal: "#32706f",
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
        soft: "0 18px 50px rgba(23, 32, 28, 0.08)",
      },
    },
  },
  plugins: [],
};
