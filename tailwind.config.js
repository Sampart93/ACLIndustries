/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        custom: '1170px', // Custom breakpoint
        tablet: '770px', // Custom breakpoint
      },
    },
  },
  plugins: [],
};
