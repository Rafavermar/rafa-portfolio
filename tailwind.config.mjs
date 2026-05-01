/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#14213d",
          800: "#243246",
          650: "#516073",
          500: "#758195",
        },
        paper: {
          50: "#f8f7f3",
          100: "#efede7",
          200: "#e3ded4",
        },
        line: "#d9d5cc",
        steel: "#25607a",
        sage: "#5f7667",
        sand: "#b7905c",
        cloud: "#fffdf8",
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
