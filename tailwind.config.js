/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1150px'},
      // => @media (max-width: 1150px) { ... }

      'md': {'max': '1025px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '850px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
}