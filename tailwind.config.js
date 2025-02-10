/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        underline: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        underline: 'underline 2s ease-in-out infinite',
        typing: 'blink 1s step-end infinite',
      },
    },
    fontFamily:{
      signature: ["Great Vibes"],
    }
  },
  plugins: [],
}