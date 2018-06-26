import webpack = require('webpack');
import serve = require('webpack-serve');

const config: webpack.Configuration = {
  mode: 'development',
  entry: ['index.js'], // when use compiler entry must be array or object
};

const serveConfig = {
  http2: true,
  dev: {
    publicPath: '/',
    logLevel: 'info'
  },
  host: 'localhost'
};

const compiler = webpack(config);

const server = serve({
  compiler,
  ...serveConfig
});

server
  .then((server) => {
    server.on('listening', () => {
      server.close();
    });
  });

const config2: webpack.Configuration = {
  ...config,
  serve: {
    ...serveConfig,
    port: 8888,
    hot: {
      port: 8889
    }
  },
};

const server2 = serve({
  config: config2
});

server2
  .then((server) => {
    server.on('listening', () => {
      server.close();
    });
  });
