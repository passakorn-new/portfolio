// const animated = require('./animation.config.js')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // https://colorhunt.co/palette/eeeddee0ddaa203239141e27
        primary: '#141E27',
        secondary: '#203239',
        tertiary: '#E0DDAA',
        quaternary: '#EEEDDE'
      }
    },
    screens: {
      xs: { max: '319px' },
      sm: { max: '639px' },
      md: { max: '767px' },
      lg: { max: '1023px' },
      xl: { max: '1279px' }
    }
  },
  plugins: []
};
