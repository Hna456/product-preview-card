/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkCyan: '#3c8067',
        cream: '#f2ebe3',
        darkBlue: '#1c232b',
        grayishBlue: '#6c7289',
        darkerCyan: '#1e4033'
      },
      fontFamily: {
        'Fraunces': ['Fraunces', 'serif'],
        'Montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

