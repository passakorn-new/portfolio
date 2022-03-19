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
      },
    },
  },
  plugins: []
};