module.exports = {
  mode: 'jit',
  content: ['./index.html',"./src/**/*.{wue, js, ts, jsx, tsx, html,js}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily:{
        sans: ['Barlow', 'sans-serif']
      },
      colors:{
        gray:{
          100: '#E0E6E9',
          500: '#ABBBC2',
          700: '#393C49',
          800: '#252836',
          900: '#1F1D2B',
        }
      }
    },
  },
  plugins: [],
}