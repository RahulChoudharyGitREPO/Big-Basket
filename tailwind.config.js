/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      theme: {
        extend: {
          colors: {
            'rgba-16-16-16': 'rgba(16, 16, 16, 1)',
          },
        },
      },
    },
  },
  plugins: [],
}
// // tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         'rgba-16-16-16': 'rgba(16, 16, 16, 1)',
//       },
//     },
//   },
// };

