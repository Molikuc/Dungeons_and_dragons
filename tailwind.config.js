/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "light-grey": "#404040",
    },
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(15rem, 1fr))",
      },
    },
  },
  plugins: [],
};
