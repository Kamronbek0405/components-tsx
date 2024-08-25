/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'three-color-gradient': 'linear-gradient(150deg, #002797, #f0f0f0, #00d4ff)',
      },
    },
  },
  plugins: [],
}