import webpack = require('webpack');
import hot = require('webpack-hot-client');

const compiler = webpack();

hot(compiler, { logLevel: 'info', reload: false });

const client = hot(compiler, { logLevel: 'info', reload: false, validTargets: ['web', 'node'] });

const { close, server, options} = client;

close(() => {});
server.on('listening', () => {});
server.broadcast({type: 'message'});
const entries = options.allEntries;
