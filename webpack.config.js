const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

const { NODE_ENV } = process.env;

module.exports = function exports() {
  const plugins = [
    new HtmlPlugin({
      template: './src/static/index.html'
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    })
  ];

  const resolveAlias = {
    '@': path.resolve(__dirname, 'src')
  };

  return {
    mode: NODE_ENV,
    entry: './src/index.tsx',
    output: {
      path: '/',
      publicPath: '/',
      filename: '[name].[hash].js',
      hashDigestLength: 6
    },
    resolve: {
      alias: resolveAlias,
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
      rules: [
        {
          test: /\.css?$/,
          include: path.resolve(__dirname, 'node_modules'),
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.tsx?$/,
          include: path.resolve(__dirname, 'src'),
          loader: 'babel-loader'
        },
        {
          test: /\.(woff2?|jpg|png)$/,
          include: path.resolve(__dirname, 'src'),
          loader: 'file-loader'
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack']
        }
      ]
    },
    plugins,
    devtool: NODE_ENV === 'production' ? 'none' : 'source-map',
    devServer: {
      port: 8001,
      historyApiFallback: true,
      compress: true,
      clientLogLevel: 'silent',

      stats: {
        chunks: false,
        modules: false,
        assets: false
      }
    },
    stats: false
  };
};
