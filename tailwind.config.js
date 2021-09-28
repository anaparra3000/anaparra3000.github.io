module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        roll: {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateX(20rem) rotate(385deg)' }
        }
      },
      animation: {
        roll: 'roll 3s ease-in-out infinite'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};