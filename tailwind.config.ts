import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-960': '#001200', // A custom very dark green,
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily: {
        gasoek: ['"Gasoek One"', 'serif'],
        gayathri: ['"Gayathri"', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
