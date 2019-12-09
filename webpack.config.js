module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {test:/\.css$/, use: ['style-loader', 'css-loader']},
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }

    ]
  }
}
