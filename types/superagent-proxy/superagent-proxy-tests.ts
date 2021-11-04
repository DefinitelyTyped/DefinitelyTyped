import request = require('superagent');
import proxy = require('superagent-proxy');

// Patch superagent with `.proxy()` method
proxy(request);

const callback = (err: any, res: request.Response) => {};
const proxyUrl = 'http://localhost:8888';
const requestUrl = '/search';

// Test usage of `.proxy()` on various HTTP methods
request.get(requestUrl).proxy(proxyUrl).end(callback);

request.delete(requestUrl).proxy(proxyUrl).end(callback);

request.del(requestUrl).proxy(proxyUrl).end(callback);

request.head(requestUrl).proxy(proxyUrl).end(callback);

request.patch(requestUrl).proxy(proxyUrl).end(callback);

request.post(requestUrl).proxy(proxyUrl).end(callback);

request.put(requestUrl).proxy(proxyUrl).end(callback);

// Test usage of `.proxy()` on an alternate syntax
// where the HTTP method is passed in as a parameter
// @see {@link https://visionmedia.github.io/superagent/#request-basics}
request('GET', requestUrl).proxy(proxyUrl).end(callback);
