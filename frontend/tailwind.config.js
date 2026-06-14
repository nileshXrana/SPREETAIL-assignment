/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f0ff',
          100: '#e7dbff',
          200: '#d0b8ff',
          300: '#b688ff',
          400: '#9c4dff',
          500: '#7f24ff',
          600: '#6b13e6',
          700: '#5912b2',
          800: '#470f84',
          900: '#36105e',
        },
        accent: {
          50: '#fff5ed',
          100: '#ffe5d3',
          200: '#ffcca3',
          300: '#ffab6d',
          400: '#ff8a3b',
          500: '#ff6d03',
          600: '#e65100',
          700: '#b73d00',
          800: '#8e2f00',
          900: '#6d2300',
        }
      }
    },
  },
  plugins: [],
}
