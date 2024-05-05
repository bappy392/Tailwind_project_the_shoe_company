/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'media1200':'1200px',
        'media560':'560px',
        
      },
    },
  },
  plugins: [],
}

