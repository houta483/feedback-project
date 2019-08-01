var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  devServer: {
    publicPath: '/',
    contentBase: "./app",
    proxy: {'/api/**': 'http://localhost:3000'},
    hot: true
  },

  mode: 'development',
  module: {
    rules: [
      { test: /\.jsx?/, use: { loader: 'babel-loader', options: { presets: ["@babel/preset-env", "@babel/preset-react"] }}},
      { test: /\.css$/, use: ['style-loader','css-loader'] },
      { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ]},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html",
      filename: 'index.html'
    })
  ]
}