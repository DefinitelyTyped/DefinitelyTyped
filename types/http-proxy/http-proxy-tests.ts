import * as http from "http";
import HttpProxy = require("http-proxy");

const proxy = new HttpProxy({
  changeOrigin: true
});

proxy.on("error", (err) => {
  console.error("An error occured:", err);
});

/**
 * Test type inference of event listener parameters:
 */
proxy.on("start", (req, res, target) => {
  const headers = req.headers; // defined;
  const status = res.statusCode; // defined;
  const partial =
    typeof target === "string"
      ? target.substr(0) // defined;
      : target.protocol; // defined;
});

http.createServer((req, res) => {
  proxy.web(req, res);
});

const newProxyDefault = HttpProxy.createProxyServer({
    target: {
        host: 'localhost',
        port: '9015'
    },
    ws: true
});

const newProxyUrl = HttpProxy.createProxyServer({
  target: 'http://localhost:9015'
});

const newProxyComplete = HttpProxy.createProxyServer({
  target: {
    protocol: 'http:',
    host: 'localhost',
    port: 9015,
    pfx: Buffer.from('foobar'),
    hostname: 'localhost.com',
    socketPath: '/foo',
    passphrase: 'password',
    key: 'my-key',
    cert: 'my-cert',
    ca: 'my-ca',
    ciphers: 'my-ciphers',
    secureProtocol: 'my-secure-protocol'
  }
});
