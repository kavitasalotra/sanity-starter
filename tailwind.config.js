/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#3a3d45',
        textGray: '#666666', // ADD YOUR COLOR CODE HERE
        textGrayLite: '#878585',
        textLight: '#ffffff',
        // backgroundLite: '#fae6c4',
        // backgroundDark: '#100703',
      },
    },
  },
  plugins: [],
};
