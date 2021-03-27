const path = require('path');
// const nodeExternals = require('webpack-node-externals');

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'none',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  plugins: [
    // new CopyPlugin([
    //   { from: 'bundle.d.ts', to: 'bundle.d.ts' },
    // ]),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
    
    ]
  },
//   externals: [nodeExternals()],
};
