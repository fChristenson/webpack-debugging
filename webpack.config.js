const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const hardsourcePlugin = require("hard-source-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "app.jsx"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new hardsourcePlugin(),
    new htmlWebpackPlugin({
      language: "sv",
      template: path.join(__dirname, "src", "index.html"),
      filename: "sv.html"
    }),
    new htmlWebpackPlugin({
      language: "en",
      template: path.join(__dirname, "src", "index.html"),
      filename: "en.html"
    }),
    new htmlWebpackPlugin({
      language: "es",
      template: path.join(__dirname, "src", "index.html"),
      filename: "es.html"
    })
  ]
};
