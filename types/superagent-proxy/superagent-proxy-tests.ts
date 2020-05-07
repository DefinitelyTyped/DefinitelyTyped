import request = require('superagent');
import proxy = require('superagent-proxy');

// Patch superagent with `.proxy()` method
proxy(request);

const callback = (err: any, res: request.Response) => {};
const proxyUrl = 'http://localhost:8888';

// using proxy
request
    .get('/search')
    .proxy(proxyUrl)
    .end(callback);
