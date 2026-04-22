const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './Apps/app/src/index.tsx',
  output: {
    path: path.resolve(__dirname, './Apps/app/public/dist'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@features': path.resolve(__dirname, 'packages/features'),
      '@shared': path.resolve(__dirname, 'packages/shared/src'),
      '@store': path.resolve(__dirname, 'packages/store/src')
    },
    mainFields: ['main', 'module']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.json'),
            projectReferences: true
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './Apps/app/public/index.html'
    })
  ],
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true
  }
};