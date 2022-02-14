import LoadablePlugin from '@loadable/webpack-plugin';
import * as webpack from 'webpack';

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

config = {
    plugins: [new LoadablePlugin().apply]
}
