import express = require('express');
import proxy = require('http-proxy-middleware');
import { IncomingMessage } from "http";
import * as Winston from "winston";

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

// create the proxy (without context)
const exampleProxy = proxy(options);

// mount `exampleProxy` in web server
const app = express();
app.use('/api', exampleProxy);
app.listen(3000);

proxy(options);
proxy('/', options);
proxy('/api', options);
proxy(['/api', '/ajax', '/someotherpath'], options);

const filter = (pathname: string, req: IncomingMessage) => {
  return !!(pathname.match('^/api') && req.method === 'GET');
};
const apiProxy = proxy(filter, {target: 'http://www.example.org'});

proxy({pathRewrite: {'^/old/api': '/new/api'}});
proxy({
  pathRewrite(path, req) {
    return path.replace('/api', '/base/api') || '';
  }
});

proxy({
  router: {
    'integration.localhost:3000': 'http://localhost:8001',
    'staging.localhost:3000': 'http://localhost:8002',
    'localhost:3000/api': 'http://localhost:8003',
    '/rest': 'http://localhost:8004',
  }
});
proxy({
  router(req) {
    return 'http://localhost:8004';
  }
});

proxy({logLevel: 'debug'});

proxy({
  logProvider(provider) {
    return Winston;
  }
});
proxy({
  logProvider(provider) {
    const logger = Winston.createLogger();

    return {
      log: logger.log,
      debug: logger.debug,
      info: logger.info,
      warn: logger.warn,
      error: logger.error
    };
  }
});

proxy({
  onError(err, req, res) {
    res.writeHead(500, {
      'Content-Type': 'text/plain'
    });
    res.end('Something went wrong. And we are reporting a custom error message.');
  }
});
proxy({
  onProxyRes(proxyRes, req, res) {
    proxyRes.headers['x-added'] = 'foobar';
    delete proxyRes.headers['x-removed'];
  }
});
proxy({
  onProxyReq(proxyReq, req, res) {
    proxyReq.setHeader('x-added', 'foobar');
  }
});
proxy({
  onProxyReqWs(proxyReq, req, socket, options, head) {
    proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
  }
});
proxy({
  onOpen(proxySocket) {
    proxySocket.on('data', (data: Buffer) => {
    });
  }
});
proxy({
  onClose(res, socket, head) {
    console.log('Client disconnected');
  }
});

proxy({cookieDomainRewrite: false});
proxy({cookieDomainRewrite: "new.domain"});
proxy({
  cookieDomainRewrite: {
    "unchanged.domain": "unchanged.domain",
    "old.domain": "new.domain",
    "*": ""
  }
});

proxy({
  headers: {host: 'www.example.org'}
});
