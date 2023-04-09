/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'one':'#AC92EB',
        'two':'#4FC1E8',
        'three':'#A0D568',
        'four':'#FFCE54',
        'five':'#ED5564',
        'text':'#36454F'
      }
    },
  },
  plugins: [],
}

