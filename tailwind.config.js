module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "150px",
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1200px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
