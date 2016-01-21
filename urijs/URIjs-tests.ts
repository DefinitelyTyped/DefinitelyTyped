/// <reference path="URIjs.d.ts" />

URI();
URI('http://user:pass@example.org:80/foo/bar.html?foo=bar&bar=baz#frag');
URI({
    protocol: 'http',
    username: 'user',
    password: 'pass',
    hostname: 'example.org',
    port: '80',
    path: '/foo/bar.html',
    query: 'foo=bar&bar=baz',
    fragment: 'frag'
});
URI(document.createElement('a'));

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
new URI(document.createElement('a'));

URI('').setQuery('foo', 'bar');
URI('').setQuery({ foo: 'bar' });
URI('').setSearch('foo', 'bar');
URI('').setSearch({ foo: 'bar' });

var uri: uri.URI = $('a').uri();

/*
 To enable `URI.expand` when using `URI.js` via `npm`, include the following:

 ```
 import * as URI from "urijs";
 import * as URITemplate from "urijs/src/URITemplate";
 void URITemplate;
 ```
 */
URI('http://user:pass@example.org:80/foo/bar.html?foo=bar&bar=baz#frag').equals(
    URI.expand('http://user:pass@example.org:80{/p*}{?q*}{#h}', {
        p: ["foo", "bar.html"],
        q: {foo: "bar", bar: "baz"},
        h: "frag"
    })
);
