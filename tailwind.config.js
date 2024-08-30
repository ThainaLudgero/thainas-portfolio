/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#2549F9",
        "secondary-yellow": "#f9d625",
        "terciary-purple": "#6C25F9",
        "accent-pink": "#F525F9",
        "white": "#F8F8F8",
        "black": "#000000"
      },
      fontFamily: {
        PeaceSans: ['PeaceSans', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

