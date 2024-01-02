/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem', // Padding for mobile (default)
        lg: '2rem' // Padding for desktop (lg)
      }
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
