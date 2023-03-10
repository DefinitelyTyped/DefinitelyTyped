import http from 'http';
import http2 from 'http2';
import https from 'https';
import proxy from 'proxy';

proxy();

proxy(http.createServer());
proxy(https.createServer());

// @ts-expect-error
proxy(http2.createServer());

// @ts-expect-error
proxy({});
