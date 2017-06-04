var path = require('path');

module.exports = {
  entry: {
    app: ["./app/app.js"]
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/assets/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  },
  devServer: {
    contentBase: './public',
    port: 8081
  }
}