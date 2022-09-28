/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#0F172A',
        'item-color': '#172031',
        'btn-color': '#FFE0B3',
        'cart-btn-color': '#0284C7',
        'nav-color': '#0D1323',
        'cart-color': 'rgba(255, 153, 0, 0.3)',
      },
    },
  },
  plugins: [require("daisyui")],
}
