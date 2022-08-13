/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary':'#5800FF',
        'secondary':'#3CFF7E',
        'dark-primary':'#2E106F',
      },
      fontFamily: {
        main: "'Poppins', 'sans-serif'"
      },
    },
  },
  plugins: [],
}