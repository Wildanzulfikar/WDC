/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      textShadow: {
        'default': '10px 10px 10px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}