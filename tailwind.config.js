/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary-blue": "#40DFEF",
      "secondary-blue": "#E8F9FD",
      "primary-black": "#000000",
    },
    extend: {
      backgroundImage: {
        hero: 'url("/assets/5.jpg")',
        blog: 'url("/assets/12.jpg")',
        story: 'url("/assets/11.jpg")',
      },
    },
  },
  plugins: [],
};
