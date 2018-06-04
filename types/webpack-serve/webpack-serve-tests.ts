import webpack = require('webpack');
import serve = require('webpack-serve');

const compiler = webpack();

const server = serve({
  config: {
    http2: true,
    dev: {
      publicPath: '/',
      logLevel: 'info'
    },
    host: 'localhost'
  }
});

server
  .then((server) => {
    server.on('listening', () => {
      server.close();
    });
  });
