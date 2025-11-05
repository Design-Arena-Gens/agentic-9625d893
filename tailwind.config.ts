import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#d6e8ff",
          200: "#adcfff",
          300: "#7ab0ff",
          400: "#4b90ff",
          500: "#1f6fff",
          600: "#1556d4",
          700: "#0f41a8",
          800: "#0a2d7d",
          900: "#041a52"
        }
      }
    }
  },
  plugins: []
};

export default config;
