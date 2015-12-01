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

URI('http://example.org/foo/hello.html').segment('bar');
URI('http://example.org/foo/hello.html').segment(0, 'bar');
URI('http://example.org/foo/hello.html').segment(['foo', 'bar', 'foobar.html']);

var withDuplicates = URI("?bar=1&bar=1")
  .duplicateQueryParameters(true)
  .normalizeQuery()
  .toString();