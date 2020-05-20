import webpack = require('webpack');
import OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

let configuration: webpack.Configuration;

configuration = {
  plugins: [new OptimizeCssAssetsPlugin()],
};

configuration = {
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.min\.css$/,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        map: false,
      },
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true,
    }),
  ],
};
