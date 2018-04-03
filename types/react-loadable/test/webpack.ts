import webpack = require('webpack');
import Loadable = require('react-loadable/webpack');

const config: webpack.Configuration = {
  plugins: [
    new Loadable.ReactLoadablePlugin(),
    new Loadable.ReactLoadablePlugin({
      filename: 'react-loadable.json'
    })
  ]
};

const manifest = {
  react: [
    {
      id: 0,
      name: './node_modules/react/index.js',
      file: 'main.js'
    }
  ]
};

const manifestIds = ['react'];

const bundles = Loadable.getBundles(manifest, manifestIds);
