/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#121212', // Using a very dark charcoal
        'brand-gold': '#DAA520',
        'brand-white': '#FFFFFF',
        'brand-text-gold': '#FFD700',
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: theme('colors.brand-gold', 'currentColor'),
        'brand-gold': theme('colors.brand-gold'),
      }),
      boxShadow: {
        'gold-glow': '0 0 15px 5px rgba(218, 165, 32, 0.7)',
      },
    },
  },
  plugins: [],
}
