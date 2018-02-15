let path = require('path'),
  TextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: "./src/app/index.js"
  },
  output: {
    filename: path.join('js', 'build.js'),
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: TextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new TextPlugin(
      {
        filename: path.join('css', '[name].css'),
        disable: false,
        allChunks: true
      })
  ],
  devServer: {
    port: 9000
  },
  watch: false
};