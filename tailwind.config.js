/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "hero-image": "url('/src/assets/images/hero.jpg')",
      },
      colors: {
        primary: "#0984e3",
      },
    },
  },
  plugins: [],
};
