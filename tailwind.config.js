/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PopinsB: ['Popins-Bold'],
        PopinsBI: ['Popins-BoldItalic'],
        PopinsEB: ['Popins-ExtraBold'],
        PopinsEBI: ['Popins-ExtraBoldItalic'],
        PopinsI: ['Popins-Italic'],
        PopinsR: ['Popins-Regular'],
      },
    },
  },
  plugins: [],
}

