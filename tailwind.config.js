/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      brand: "#2b4650",
    },
  },
  purge: {
    mode: "all",
    content: ["./src/components/**/**/*.{ts, tsx}"],
  },
  plugins: [],
};
