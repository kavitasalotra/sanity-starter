/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#7c2c0c',
        textGray: '#535353', // ADD YOUR COLOR CODE HERE
        textGrayLite: '#878585',
        textLight: '#fcfcfc',
        backgroundLite: '#fae6c4',
        backgroundDark: '#100703',
      },
    },
  },
  plugins: [],
};
