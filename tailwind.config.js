/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    fontFamily: {
      raleway: ['"Raleway"', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [],
};
