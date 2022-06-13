module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257E6',
        },
    },
    borderRadius: {
      md: '4px',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
}
