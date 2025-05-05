/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#FAF5F0",
          100: "#F5EBE0",
          200: "#E8D5C0",
          300: "#DABE9F",
          400: "#C9A87C",
          500: "#B08D57" /* Base brown */,
          600: "#96754A",
          700: "#7D5F3C",
          800: "#64492E",
          900: "#4A3522",
          950: "#332515",
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
