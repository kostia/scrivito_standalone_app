const path = require('path');

module.exports = {
  entry: {
    application: "application.js",
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    publicPath: '/assets',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js(\.jsx)?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015'],
            cacheDirectory: 'tmp/babel-cache',
          },
        }],
      },
    ],
  },
  devtool: 'cheap-source-map-inline',

  // assume there's a devServer running at 8080 for Scrivito itself
  // and proxy everything below /scrivito to it.
  devServer: {
    contentBase: path.join(__dirname, "public"),
    proxy: {
      "/scrivito": { target: "http://localhost:8080" },
    }
  },
};
