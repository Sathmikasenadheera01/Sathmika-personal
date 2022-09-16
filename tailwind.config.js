/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary':'#001730',
        'dark-blue':'#051622',
        'secondary':'#55c2c3',
        'primary-grey':'#c9d1d5'
      },
      fontFamily: {
        main: "'Inter', sans-serif"
      },
    },
  },
  plugins: [],
}