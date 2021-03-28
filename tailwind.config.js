const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        6: '6px'
      },
      colors: {
        'cyan': colors.cyan,
        'emerald': colors.emerald,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}