/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
          'print': { 'raw': 'print' }
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography")
  ],
}

