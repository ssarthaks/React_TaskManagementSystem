/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#092635",
        textColor: "#9EC8B9",
        bgNavs: "#212529",
      },
      backgroundImage: {
        heroJpg: "url('/public/background.jpg')",
      },
    },
  },
  plugins: [],
};
