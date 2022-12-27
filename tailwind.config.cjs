/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          brightRed: "hsl(12, 88%, 59%)",
          darkBlue: "hsl(228, 39%, 23%)"
        },
        neutral: {
          grayishBlue: "hsl(227, 12%, 61%)",
          veryDarkBlue: "hsl(233, 12%, 13%)",
          paleRed: "hsl(13, 100%, 96%)",
          lightGray: "hsl(0, 0%, 98%)",
          white: "hsl(0, 0%, 100%)"
        }
      }
    },
  },
  plugins: [],
}
