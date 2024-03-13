/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'gruv-bg': '#282828',
        'gruv-blue': '#458588',
        'gruv-purple': '#b16286',
        'gruv-aqua': '#689d6a',
        'gruv-yellow': '#d79921',
        'gruv-red': '#cc241d',
        'gruv-gray-light': '#909090',
        'gruv-gray-dark': '#606060',
        'close-red': '#ff5f57',
      },
    },
  },
  plugins: [],
}
