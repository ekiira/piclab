const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./pages/*.{js,ts,jsx,tsx}", "./components/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontSize: {
      ...defaultTheme.fontSize,
      tiny: ".5rem",
      "xs-1": ".813rem",
      "lg-1": "1.188rem",
      "xl-1": "1.375rem",
    },
    boxShadow: {
      ...defaultTheme.boxShadow,
      new: "0px 37px 90px rgba(0, 0, 0, 0.2)",
    },
    colors: {
      white: "#FFFFFF",
      red: "#E84F5A",
      gray: "#CDCDCD",
      "gray-100": "#A2A2A2",
      "gray-200": "#262626",
      dark: "#404040",
      mint: "#54FFE0",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      idlewild: ["'Idlewild A', 'Idlewild B'"],
    },
  },
  variants: {
    extend: { borderWidth: ["last"] },
  },
  plugins: [],
};
