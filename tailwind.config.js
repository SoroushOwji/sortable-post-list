/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6356b0",
        secondary: {
          light: "#66ffb5",
          DEFAULT: "#00FF86",
          dark: "#00cc69",
        },
      },
    },
  },
  plugins: [],
}
