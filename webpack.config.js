const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  target: 'node',
  entry: ['./index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'skygard-iot.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  loose: true
                }
              ]
            ]
          }
        }
      },
      {
          test: /\.html$/,
          use: {
              loader: 'html-loader',
              options: {
                  attrs: [':data-src']
              }
          }
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: false,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 6,
          mangle: false
        },
        sourceMap: true
      })
    ]
  },
};