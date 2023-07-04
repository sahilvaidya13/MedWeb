/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://img.freepik.com/free-photo/heart-shape-stethoscope-medical-subjects_23-2150254029.jpg?w=2000')",
      },
      colors: {
        lgrey: "#d3d3d3",
      },
      spacing: {
        defm: "33rem",
      },
    },
  },
  plugins: [],
};
