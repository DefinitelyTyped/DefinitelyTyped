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

/*
Tests for hasSearch(), hasQuery()
From: http://medialize.github.io/URI.js/docs.html#search-has
*/

uri = URI("?string=bar&list=one&list=two&number=123&null&empty=");

uri.hasQuery("string") === true;
uri.hasSearch("nono") === false;

uri.hasQuery("string", true) === true;
uri.hasSearch("string", false) === false;

uri.hasQuery("string", "bar") === true;
uri.hasSearch("number", 123) === true;

uri.hasQuery("list", "two", true) === true;
uri.hasSearch("list", ["two"], true) === true;
uri.hasQuery("list", "three", true) === false;
uri.hasSearch("list", ["two", "three"], true) === false;
uri.hasQuery("list", /ne$/, true) === true;

uri.hasQuery("string", /ar$/) === true;

uri.hasQuery(/^str/) === true;
uri.hasQuery(/^li/, "two") === true;

uri.hasQuery("string", (value : string, name : string, data : string) => {
    return true;
}) === true;
