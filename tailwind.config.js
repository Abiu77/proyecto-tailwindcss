/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './js/*.js'
  ],
  theme: {
    extend: {
      spacing:{
        'quarter':'25%'
      },
      fontFamily:{
        'sans' : "'Work Sans', sans-serif",
        'cascadia': '"CascadiaCode"',
      }
    },
  },
  plugins: [],
}

