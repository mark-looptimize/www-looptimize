const openProps = require('open-props');

module.exports = {
  plugins: [
    require('postcss-nesting'),
    require('postcss-custom-media'),
    require('postcss-jit-props')(openProps),
    require('postcss-preset-env')({ stage: 0 })
  ]
};
