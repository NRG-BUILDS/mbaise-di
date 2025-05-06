/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#F9F2F2",
          100: "#F3E5E5",
          200: "#E6CBCB",
          300: "#D4ACAC",
          400: "#B57676",
          500: "#783837" /* Base brown */,
          600: "#692F2E",
          700: "#592726",
          800: "#48201F",
          900: "#361817",
          950: "#280F0F",
        },
        beige: {
          50: "#FAF5E4",
          100: "#F5E8C7",
          200: "#E8D9A3",
          300: "#DABF7B",
          400: "#C9A95B",
          500: "#B08D3C" /* Base beige */,
          600: "#96752F",
          700: "#7D5F24",
          800: "#64491A",
          900: "#4A3512",
          950: "#33250C",
        },
      },
    },
  },
  plugins: [],
};
