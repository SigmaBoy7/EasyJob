/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-svg': "url('@/assets/img/MainPage.svg')",
      }
    },
  },
  plugins: [],
}

