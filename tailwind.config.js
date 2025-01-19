/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },

      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-50%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        showUp: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        slideDown: 'slideDown .8s ease-out',
        showUp: 'showUp .8s ease-in-out',
      },
    },
  },
  plugins: [],
};