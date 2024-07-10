/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      boxShadow: {
        custom: "0 25px 40px -20px rgba(0, 0, 0, 0.0951)",
      },
      colors: {
        bg: "#EFF5FF",
        "border-color": "#D6D9E6",
        denim: "#022959",
        grey: "#9699AA",
        "light-blue": "#ABBCFF",
        "light-grey": "#D6D9E6",
        orange: "#FFAF7E",
        pink: "#F9818E",
        purple: "#483EFF",
        "red-errors": "#EE374A",
        "sky-blue": "#BEE2FD",
        "very-light-gray": "#F8F9FF",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
