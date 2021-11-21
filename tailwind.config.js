const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./pages/*.{js,ts,jsx,tsx}", "./components/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontSize: {
      ...defaultTheme.fontSize,
      tiny: ".5rem",
    },

    colors: {
      white: "#FFFFFF",
      red: "#E84F5A",
      gray: "#CDCDCD",
      mint: "#54FFE0",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      idlewild: ["'Idlewild A', 'Idlewild B'"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
