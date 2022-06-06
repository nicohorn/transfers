module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        img1: "url('/hero/barco.jpg')",
        img2: "url('/hero/cabildo.jpg')",
        img3: "url('/hero/library.jpg')",
        img4: "url('/hero/panamericana.jpg')",
        img5: "url('/hero/puertomadero.jpg')",
        img6: "url('/buenosaires1.jpg')",
      },
    },
  },
  plugins: [],
};
