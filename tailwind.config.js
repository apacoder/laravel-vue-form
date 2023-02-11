
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        uca: {
          azul: {
            light: '#6683ac',
            base: '#003C71',
            dark: '#042354'
          },
          amarillo: '#fdc018'
        }
      }
    },
  },
  plugins: [],
}