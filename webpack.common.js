const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');
const StylelintPlugin = require('stylelint-webpack-plugin');

const htmlPages = require('./app.config');
const multiPagePlugin = require('./multipage.webpack.plugin');
const packages = require('./package.json');

module.exports = {
  entry: {
    app: './src/app.js',
    vendor: Object.keys(packages.dependencies),
    home: './src/js/home.js',
    about: './src/js/about.js'
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnError: true,
          emitError: true
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    ...new multiPagePlugin(htmlPages),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new WebpackBar(),
    new StylelintPlugin({ emitError: true, failOnError: true })
  ]
};
