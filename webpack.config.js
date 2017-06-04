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
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader",
            /*options: {
                includePaths: ["absolute/path/a", "absolute/path/b"]
            }*/
        }]
      }
    ]
  },
  devServer: {
    contentBase: './public',
    port: 8081
  }
}