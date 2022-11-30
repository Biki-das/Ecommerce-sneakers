/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        Orange: "hsl(26, 100%, 55%)",
        Paleorange: "hsl(25, 100%, 94%)",
        veryDarkBlue: "hsl(220, 13%, 13%)",
        Darkgrayishblue: "hsl(219, 9%, 45%)",
        Grayishblue: "hsl(220, 14%, 75%)",
        Lightgrayishblue: "hsl(223, 64%, 98%)",
        White: "hsl(0, 0%, 100%)",
        Black: "#7a7a7c",
        LightOrange: "#ffac6a",
        transparentBlack: "rgb(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
