/// <reference path="URI.d.ts" />

new URI();
new URI('http://user:pass@example.org:80/foo/bar.html?foo=bar&bar=baz#frag');
new URI({
    protocol: 'http',
    username: 'user',
    password: 'pass',
    hostname: 'example.org',
    port: '80',
    path: '/foo/bar.html',
    query: 'foo=bar&bar=baz',
    fragment: 'frag'
});

var uri: uri.URI = $('a').uri();
