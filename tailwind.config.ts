import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "hover-scale": "zoom 0.2s ease-in-out forwards",
        "bio-link": "bio-link 0.2s ease-in-out forwards",
      },
      keyframes: {
        zoom: {
          "0%": {
            opacity: "0.5",
          },
          "100%": {
            transform: "scale(120%)",
            opacity: "1",
          },
        },
        "bio-link": {
          "100%": {
            "border-bottom": "2px solid rgb(103 232 249)",
            color: "rgb(103 232 249)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
