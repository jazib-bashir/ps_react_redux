const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  // 1- Webpack core development settings

  mode: "development",
  target: "web",
  // display source code in browser debugging
  devtool: "cheap-module-source-map",
  entry: "./src/index",
  // webpack save output in memory these path settings are just for remember memory status
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },

  // 2- Dev Server

  devServer: {
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
    // last three setting just to tackle latest chrome bugs
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false
  },

  // 3- Plugins

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico"
    })
  ],

  // 4- Loaders

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
