module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        img1: "url('/hero/barco.webp')",
        img2: "url('/hero/cabildo.webp')",
        img3: "url('/hero/library.webp')",
        img4: "url('/hero/panamericana.webp')",
        img5: "url('/hero/puertomadero.webp')",
        img6: "url('/buenosaires1.webp')",
      },
    },
  },
  plugins: [],
};
