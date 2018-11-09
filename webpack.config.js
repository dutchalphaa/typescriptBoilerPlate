const path = require("path");

module.exports = {
  entry: "./src/app.ts",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "app.bundle.js"
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".ts"]
  }
};
