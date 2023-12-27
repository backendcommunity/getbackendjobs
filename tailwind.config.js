/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: '1rem',
      center: true
    },
    extend: {
      colors: {
        primaryColor: '#17154B',
        secondaryColor: '#1A1A1A'
      }
    }
  },
  plugins: []
}
