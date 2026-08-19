import { tokens } from "./src/theme/tokens.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: tokens.colors,
      borderRadius: tokens.radii,
      boxShadow: tokens.shadows,
      fontFamily: tokens.fontFamily,
      spacing: tokens.spacing,
    },
  },
  plugins: [],
};
