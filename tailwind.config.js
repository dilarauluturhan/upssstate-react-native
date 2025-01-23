/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#2973B2",
          200: "#48A6A7",
          300: "#9ACBD0",
        },
      },
    },
  },
  plugins: [],
};
