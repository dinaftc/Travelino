/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#42A7C3',
        secondary:'#FA8443',
      },
    },
  },
  plugins: [require('daisyui')],
}