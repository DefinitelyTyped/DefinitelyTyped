import Agent = require('http-proxy-agent');

// $ExpectType HttpProxyAgent
new Agent('url');
new Agent({});
new Agent({ host: 'url' });

new Agent({}).proxy;
new Agent({}).secureProxy;

// $ExpectError
new Agent();

// $ExpectError
new Agent({ a: 1 });
