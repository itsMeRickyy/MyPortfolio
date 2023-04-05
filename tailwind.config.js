/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./node_modules/flowbite/dist/flowbite.min.js"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        Grotesque: "Darker Grotesque",
      },
      colors: {
        darkColor: "#202020",
        whiteColor: "#FFFFFF",
        purpleColor: "#5b38e3",
        yellowColor: "#f7d046",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
