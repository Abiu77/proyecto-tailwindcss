/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './js/*.js'
  ],
  theme: {
    extend: {
      spacing:{
        'quarter':'25%',
      },
      colors:{
        'dark-blue' : '#00f',
      },
    },
  },
  plugins: [],
}

