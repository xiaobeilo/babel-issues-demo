module.exports = {
  module: {
    rules: [
      {
        test: require('path').resolve('./node_modules/babel-test.js'),
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/
      },
    ]
  },
  optimization: {
    minimize: false
  }
}