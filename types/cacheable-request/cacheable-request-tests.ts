import * as http from 'http';
import * as https from 'https';
import CacheableRequest = require('cacheable-request');

// You can do
let cacheableRequest = new CacheableRequest(http.request);
const cacheReq = cacheableRequest('http://example.com', res => {
    res; // $ExpectType ServerResponse | ResponseLike
});
cacheReq.on('request', req => req.end());

cacheableRequest = new CacheableRequest(https.request);

cacheableRequest = new CacheableRequest(http.request, 'redis://user:pass@localhost:6379');
cacheableRequest = new CacheableRequest(http.request, new Map());

cacheableRequest('example.com', res => {
    res; // $ExpectType ServerResponse | ResponseLike
})
    .on('error', err => {
        err; // $ExpectType RequestErrorCls | CacheErrorCls
    })
    .on('request', req => {
        req.on('error', () => {});
        req.end();
    });
