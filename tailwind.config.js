/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-img":
          "url('https://cdn.pixabay.com/photo/2017/12/01/03/17/nature-2990060_1280.jpg')",
      },
    },
  },
  plugins: [],
};
