const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: ['webpack-dev-server/client?http://localhost:3000', './src/index.js'],
  devServer: {
    inline: true,
    host: 'localhost',
    port: '3000',
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    }
  },
  output: {
    path: __dirname,
    filename: "./build/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass?sourceMap']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      },
      {
        test: /\.(gif|png|jpe?g|wav|mp3)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:3000' }),
  ]
};