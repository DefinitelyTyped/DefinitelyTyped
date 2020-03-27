import LoadablePlugin from '@loadable/webpack-plugin';
import { Configuration } from 'webpack';

let config: Configuration = {
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
