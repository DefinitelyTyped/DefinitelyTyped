// Derived from https://github.com/chimurai/http-proxy-middleware#example

import * as express from 'express';
import * as proxy from 'http-proxy-middleware';

const options = {
  target: 'http://www.example.org',
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    '^/api/old-path': '/api/new-path',
    '^/api/remove/path': '/path'
  },
  router: {
    'dev.localhost:3000': 'http://localhost:8000'
  }
};

const myProxy = proxy(options);

const app = express();
app.use('/api', myProxy);
app.listen(3000);
