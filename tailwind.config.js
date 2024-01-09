/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      colors: {

        'light-gray': '#f8f9fa',
        'dark-gray': '#6c757d',
        'dark-gray-2': '#212529',
        'blue': '#192bc2'
        
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        bitter: ['Bitter', 'serif']
      }
    },
  },
  plugins: [],
}

