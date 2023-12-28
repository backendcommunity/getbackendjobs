/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: '2rem',
      center: true
    },
    extend: {
      colors: {
        primaryColor: '#17154B',
        secondaryColor: '#262730'
      }
    }
  },
  plugins: []
}
