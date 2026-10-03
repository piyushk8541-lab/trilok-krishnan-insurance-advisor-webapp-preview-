import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f3f9",
          100: "#d9e1ef",
          200: "#b3c3df",
          300: "#8da5cf",
          400: "#4668a8",
          500: "#1a365d",
          600: "#12264a",
          700: "#0e1e3a",
          800: "#0a152a",
          900: "#060e1c",
        },
        brand: {
          red: "#E31E24",
          "red-dark": "#C41A1F",
          blue: "#0E1E3A",
          navy: "#102542"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "premium": "0 10px 40px -10px rgba(14,30,58,0.15), 0 4px 16px -4px rgba(14,30,58,0.08)",
        "premium-lg": "0 20px 60px -15px rgba(14,30,58,0.20), 0 8px 24px -8px rgba(14,30,58,0.12)",
        "soft": "0 2px 20px rgba(14,30,58,0.06)",
        "floating": "0 16px 48px rgba(14,30,58,0.18)"
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.7s ease-out",
        "float": "float 6s ease-in-out infinite"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        }
      }
    },
  },
  plugins: [],
};
export default config;
