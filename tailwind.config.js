/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#050b1a",
        baseAlt: "#030814",
        card: "#0a1327",
        line: "#1e293b",
        accent: {
          DEFAULT: "#3b82f6",
          hover: "#2563eb",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
