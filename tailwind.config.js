/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      backgroundColor: {
        'purple-500': '#6B46C1',
        'indigo-500': '#667EEA',
        'blue-500': '#4299E1',
        'green-500': '#48BB78',
      },
    },
    
  },
  plugins: [],
}

