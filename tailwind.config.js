module.exports = {
    theme: {
        extend: {
          screens: {
            print: { raw: 'print' }
          },
          listStyleType: {
            'lower-alpha': 'lower-alpha',
            'upper-alpha': 'upper-alpha'
          }
        }
    },
    variants: {
        extend: {
          ringColor: ['hover', 'active']
        }
    },
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
}