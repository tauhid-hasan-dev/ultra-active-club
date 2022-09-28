/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#03203C',
        'btn-color': '#FFE0B3',
        'cart-color': 'rgba(255, 153, 0, 0.3)',
      },
    },
  },
  plugins: [require("daisyui")],
}
