/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-img":
          "url('https://cdn.pixabay.com/photo/2022/05/11/13/55/nature-7189418_1280.jpg')",
      },
    },
  },
  plugins: [],
};
