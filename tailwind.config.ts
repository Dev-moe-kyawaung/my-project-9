import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: "#0a0a0f",
          dark: "#12121a",
          panel: "#1a1a2e",
          cyan: "#00f3ff",
          pink: "#ff00ff",
          yellow: "#ffff00",
          violet: "#8b5cf6",
          lime: "#39ff14",
        },
        neon: {
          cyan: "#00f3ff",
          pink: "#ff00ff",
          yellow: "#ffd700",
        }
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
        display: ["Orbitron", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scanline": "scanline 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glitch": "glitch 1s linear infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 20px rgba(0, 243, 255, 0.5)" },
          "50%": { opacity: ".5", boxShadow: "0 0 40px rgba(0, 243, 255, 0.8)" },
        },
        "scanline": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glitch": {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        }
      },
      backgroundImage: {
        "cyber-grid": "linear-gradient(rgba(0, 243, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 243, 255, 0.03) 1px, transparent 1px)",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
