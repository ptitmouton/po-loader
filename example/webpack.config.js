const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: [/\.pot?$/, /\.mo$/],
        loader: require.resolve('messageformat-po-loader'),
        options: {
          biDiSupport: false,
          defaultCharset: null,
          defaultLocale: 'en',
          forceContext: false,
          pluralFunction: null,
          verbose: false
        }
      }
    ]
  }
};

