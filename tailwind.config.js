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
    },
    fill: theme => ({
      'brand-white': theme('colors.brand-white'),
      'brand-gray': theme('colors.brand-gray'),
      'brand-black': theme('colors.brand-black'),
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    minWidth: {
      'screen': '100vw'
    },
    screens: {
      'portrait': { 'raw': '(orientation: portrait)' },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
