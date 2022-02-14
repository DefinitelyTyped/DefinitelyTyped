import LoadablePlugin from '@loadable/webpack-plugin';
import webpack = require('webpack');

let config: webpack.Configuration = {
  plugins: [new LoadablePlugin()],
};

config = {
  plugins: [
    new LoadablePlugin({
      filename: 'stats.json',
      writeToDisk: true,
      outputAsset: false,
    }),
  ],
};

config = {
  plugins: [new LoadablePlugin({ writeToDisk: { filename: 'stats.json' } })],
};
