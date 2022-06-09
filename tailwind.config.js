module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          // orange: "#ff451b",
          // green: "#7cfc00",
          // yellow: "#ffff00",
          // blue: "#ff799f",
          // pink: "#ff799f",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}