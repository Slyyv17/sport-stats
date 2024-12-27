/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      fontFamily: {
        pryFF: ["Satoshi", "sans-serif"]
      },

      colors: {
        pryClr: "#2E294E",
        hoverClr: "#B3B3F1",
        mainClr: "#FFFFFF",
        secClr: "#000000",
      },

      transition: {
        transitionPry: "background-color 0.3s ease",
      },
    },
  },
  plugins: [],
};

