module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js', './src/**/*.postcss'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-white': '#EFEFEF',
        'brand-gray': '#E4E4E4',
        'brand-black': '#434343',
      },
      minWidth: {
        'screen': '100vw'
      },
      screens: {
        'portrait': { 'raw': '(orientation: portrait)' },
        'lg': '1280px',
        'xl': '1600px',
        'xxl': '2000px',
      },
      fontSize: {
        '7.5xl': '5rem',
      }
    },
    fill: theme => ({
      'brand-white': theme('colors.brand-white'),
      'brand-gray': theme('colors.brand-gray'),
      'brand-black': theme('colors.brand-black'),
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
