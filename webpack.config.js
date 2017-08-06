const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, '/public/jsx/App.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public/js')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015']
          }
        }
      }
    ]
  },
};