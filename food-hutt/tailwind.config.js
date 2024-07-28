/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "4rem",
          "2xl": "5rem",
        },
      },
      colors: {
        primary: "#F54748",
        secondary: "#FDC55E",
      },
      fontFamily: {
        Sofia: "Sofia Sans Condensed"
      }
    },
  },
  plugins: [],
};