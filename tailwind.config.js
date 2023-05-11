/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
  fontFamily:{
    "press-start": ['"Press Start 2P"', 'cursive']
  },
    extend: {
      colors: {
        "c64purple" : "#6600cc",
        "c64light-purple" : "#9966ff",
        "c64light-red" : "#FF7777",
        "c64-green" : "#00CC55"

      }
    },
  },
  plugins: [],
}

