module.exports = {
  entry: ['./test/index.tsx'],
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx"]
  },
  output: {
    path: './output/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.tsx?$/,
        loaders: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  devtool: "#source-map"
};