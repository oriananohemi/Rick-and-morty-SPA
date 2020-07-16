const path = require('path');
const HtmlWebackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js';
  output: {
    path: path.resolve(__dirname)
  }
}