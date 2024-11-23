/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // Aggiungi il file HTML
    './src/**/*.{vue,js,ts,jsx,tsx}', // Aggiungi questa riga per includere i tuoi file .vue
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
