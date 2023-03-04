/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
    fontFamily:{
      "Plus-Jakarta-Sans": ['"Plus Jakarta Sans"', "sans-serif"]
    },
    gridTemplateColumns: {
      "auto-fit": "repeat(auto-fit, minmax(300px, 1fr))"
    }
  },
  plugins: [],
}
