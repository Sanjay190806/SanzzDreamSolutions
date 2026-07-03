tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        dmsans: ["DM Sans", "Inter", "sans-serif"]
      },
      colors: {
        brandBlue: {
          DEFAULT: "#00a8ff",
          deep: "#0070f3",
          soft: "#e0f5ff"
        },
        brandGold: {
          DEFAULT: "#d4af37",
          soft: "#fff7d6",
          deep: "#9a7415"
        },
        brandNavy: "#0a1428",
        brandMuted: "#475569",
        brandSection: "#f8fafc",
        brandBorder: "#e2e8f0",
        successGreen: "#16a34a"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(10, 20, 40, 0.08)",
        lift: "0 24px 70px rgba(10, 20, 40, 0.12)",
        blueGlow: "0 18px 42px rgba(0, 168, 255, 0.22)",
        goldGlow: "0 16px 42px rgba(212, 175, 55, 0.16)"
      }
    }
  }
};
