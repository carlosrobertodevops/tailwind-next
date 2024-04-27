/** @type {import('tailwindcss').Config}*/

module.exports = {
  content: [
    "./src//**/*.tsx",
  ],
  exports: {darkMode: 'selector'},
  theme: {
    extend: {
      maxWidth: {
        app: '700px%'
      },

      colors: {
        diego: '#3333'
      }

    },
  },
  plugins: [],
}
