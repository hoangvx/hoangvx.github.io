/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'dracular-dark': '#1E1E1E',
      'dracular-bg': '#282A36',
      'dracular-comment': '#5C6798',
      'dracular-cyan': '#9FE5FB',
      'dracular-green': '#8AF774',
      'dracular-pink': '#E371BE',
      'dracular-orange': '#EDAF66',
      'dracular-text': '#F7F7F0',
    },
    extend: {},
  },
  plugins: [],
}
