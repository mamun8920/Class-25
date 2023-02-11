/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#fc1f15',
        secondary: {
          100: '#8d98ff',
          200: '#636bff',
        }
      },
      fontFamily: {
        'body': ['Montserrat']
      }
    },
  },
  plugins: [],
}
