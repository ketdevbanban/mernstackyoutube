/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Noto: ["Noto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
