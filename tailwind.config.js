/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        show: "show 1.5s ease-in-out",
      },
      keyframes: {
        show: {
          "0%": { opacity: 0, transform: "scale(0.5)" },
          "50%": { opacity: 0.5 },
          "85%": { opacity: 0.75, transform: "scale(1.05)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
