/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Space Grotesk", "Syne", "sans-serif"],
        dmsans: ["Inter", "DM Sans", "sans-serif"]
      },
      colors: {
        brandBlue: {
          DEFAULT: "#0077ff",
          deep: "#005bd1",
          soft: "#e8f3ff"
        },
        brandGold: {
          DEFAULT: "#c9a227",
          soft: "#fff7dc",
          deep: "#b88a00"
        },
        brandCyan: "#38bdf8",
        brandBg: "#f7f7f4",
        brandNavy: "#0b0d12",
        brandMuted: "#5f6673",
        brandSection: "#f7f7f4",
        brandBorder: "#e4e4df",
        charcoalCTA: "#111318",
        successGreen: "#16a34a"
      },
      boxShadow: {
        subtle: "0 12px 40px rgba(11, 13, 18, 0.06)",
        soft: "0 18px 50px rgba(11, 13, 18, 0.08)",
        lift: "0 24px 70px rgba(11, 13, 18, 0.12)",
        blueGlow: "0 18px 42px rgba(0, 168, 255, 0.22)",
        goldGlow: "0 16px 42px rgba(184, 138, 0, 0.16)",
        charcoal: "0 18px 48px rgba(17, 19, 24, 0.2)"
      }
    }
  },
  plugins: []
};
