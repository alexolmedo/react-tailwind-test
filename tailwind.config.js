/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-custom': '#252F3D',
        'gray-background': '#FAFAFA',
        'gray-crossed': '#969696',
        'black-stock': '#37465A',
        'black-copy': '#4D5254',
        'green-verified': '#5BB59A',
        'green-claim': '#59AE43',
        'blue-highlight': '#2C7EF8',
        'light-blue-background': '#EDF3FD',
      }
    },
  },
  plugins: [],
}