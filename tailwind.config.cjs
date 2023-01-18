/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cardListT: "#006838",
        cardHead: "#FF8500",
        cardListP: "#909090",
        border: "#19A526",
        grayDark: "#646464",
        grayTink: "#F9F9F9",
        footerMenuTitle: "#909090",
        footerMenu: "#BABABA",
        userName: "#006838",
        userEmail: "#919191",
      },
      backgroundColor: {
        subscribeBg: "#19A526",
        subscribeBtn: "#FF8500",
        footerTopBg: "#FFF4E7",
        footerBg: "#404040",
        userBg: "#F1FBF2",
        dashcardBg: "#F4F4F4",
        cardAcBg: "#FFF3F7",
        balaneBg: "#FBE9EF",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
