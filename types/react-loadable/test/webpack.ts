import * as webpack from 'webpack';
import { ReactLoadablePlugin, getBundles } from 'react-loadable/webpack';

const config: webpack.Configuration = {
  plugins: [
    new ReactLoadablePlugin(),
    new ReactLoadablePlugin({
      filename: 'react-loadable.json'
    })
  ]
};

const manifest = {
  react: [
    {
      id: 0,
      name: "./node_modules/react/index.js",
      file: "main.js"
    }
  ]
};

const manifestIds = ['react'];

const bundles = getBundles(manifest, manifestIds);
