/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '450px',
        'md': '850px',
        'lg' : '1024px',
        'xl' : '1280px',
        '2xl' : '1500px',
      }
    },
  },
  plugins: [],
}
