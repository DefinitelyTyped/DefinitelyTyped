import express = require('express');
import proxy = require('http-proxy-middleware');
import { IncomingMessage } from "http";

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
  logProvider() {
    // provider can be just log()
    return {
      log: console.log
    };
  }
});

proxy({
  logProvider(provider) {
    // customizing/modifying exisiting provider
    provider.log = console.log;
    provider.debug = console.log;
    provider.info = console.info;
    provider.warn = console.warn;
    provider.error = console.error;

    return provider;
  }
});

proxy({
  logProvider() {
    // replacing provider
    return {
      log: console.log,
      debug: console.log,
      info: console.info,
      warn: console.warn,
      error: console.error
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

// Shorthands
proxy('/');
