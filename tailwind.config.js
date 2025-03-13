// tailwind.config.js
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Adjust based on your project structure
    theme: {
      extend: {
        colors: {
          cyan: "hsl(179, 62%, 43%)",
          lightGray: "hsl(204, 43%, 93%)",
          brightYellow: "hsl(71, 73%, 54%)",
          grayishBlue: "hsl(218, 22%, 67%)",
        },
      },
    },
    plugins: [],
  };
  