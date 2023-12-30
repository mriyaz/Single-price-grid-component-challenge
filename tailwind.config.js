/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-cyan": "hsl(179, 62%, 43%)",
        "primary-light-cyan": "hsl(179, 62%, 48%)",
        "primary-bright-yellow": "hsl(71, 73%, 54%)",
        "neutral-light-gray": "hsl(204, 43%, 93%)",
        "neutral-grayish-blue": "hsl(218, 22%, 67%)",
      },
      fontFamily: {
        'custom': ['Karla', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}

