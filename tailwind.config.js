/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#D1B745',
        'accent-blue': '#7072E0',
        'accent-grey': '#8c8d8c'
      }
    },
  },
  plugins: [],
}

