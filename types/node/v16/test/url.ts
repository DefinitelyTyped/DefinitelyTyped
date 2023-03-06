import { Blob } from 'node:buffer';
import assert = require('node:assert');
import { RequestOptions } from 'node:http';
import * as url from 'node:url';

{
    url.format(url.parse('http://www.example.com/xyz'));

    url.format('http://www.example.com/xyz');

    // https://google.com/search?q=you're%20a%20lizard%2C%20gary
    url.format({
        protocol: 'https',
        host: "google.com",
        pathname: 'search',
        query: { q: "you're a lizard, gary" }
    });

    const myURL = new url.URL('https://a:b@你好你好?abc#foo');
    url.format(myURL, { fragment: false, unicode: true, auth: false });

    // `format doesn't work with `path`: use `pathname` and `search` instead
    // @ts-expect-error
    url.format({ path: '/foo' });
}

{
    const helloUrl = url.parse('http://example.com/?hello=world', true);
    let helloQuery = helloUrl.query['hello'];
    assert.equal(helloUrl.query['hello'], 'world');

    let strUrl = url.parse('http://example.com/?hello=world');
    let queryStr: string = strUrl.query!;

    strUrl = url.parse('http://example.com/?hello=world', false);
    queryStr = strUrl.query!;

    function getBoolean(): boolean { return false; }
    const urlUrl = url.parse('http://example.com/?hello=world', getBoolean());
    if (typeof(urlUrl.query) === 'string') {
        queryStr = urlUrl.query;
    } else if (urlUrl.query) {
        helloQuery = urlUrl.query['hello'];
    }
}

{
    const ascii: string = url.domainToASCII('español.com');
    const unicode: string = url.domainToUnicode('xn--espaol-zwa.com');
}

{
    let myURL = new url.URL('https://theuser:thepwd@example.org:81/foo/path?query=string#bar');
    assert.equal(myURL.hash, '#bar');
    assert.equal(myURL.host, 'example.org:81');
    assert.equal(myURL.hostname, 'example.org');
    assert.equal(myURL.href, 'https://theuser:thepwd@example.org:81/foo/path?query=string#bar');
    assert.equal(myURL.origin, 'https://example.org:81');
    assert.equal(myURL.password, 'thepwd');
    assert.equal(myURL.username, 'theuser');
    assert.equal(myURL.pathname, '/foo/path');
    assert.equal(myURL.port, "81");
    assert.equal(myURL.protocol, "https:");
    assert.equal(myURL.search, "?query=string");
    assert.equal(myURL.toString(), 'https://theuser:thepwd@example.org:81/foo/path?query=string#bar');
    assert(myURL.searchParams instanceof url.URLSearchParams);

    myURL.host = 'example.org:82';
    myURL.hostname = 'example.com';
    myURL.href = 'http://other.com';
    myURL.hash = 'baz';
    myURL.password = "otherpwd";
    myURL.username = "otheruser";
    myURL.pathname = "/otherPath";
    myURL.port = "82";
    myURL.protocol = "http";
    myURL.search = "a=b";
    assert.equal(myURL.href, 'http://otheruser:otherpwd@other.com:82/otherPath?a=b#baz');

    myURL = new url.URL('/foo', 'https://example.org/');
    assert.equal(myURL.href, 'https://example.org/foo');
    assert.equal(myURL.toJSON(), myURL.href);
}

{
    const searchParams = new url.URLSearchParams('abc=123');

    assert.equal(searchParams.toString(), 'abc=123');
    searchParams.forEach((value: string, name: string, me: url.URLSearchParams): void => {
        assert.equal(name, 'abc');
        assert.equal(value, '123');
        assert.equal(me, searchParams);
    });

    searchParams.forEach(function() {
        this; // $ExpectType number
    }, 1);

    assert.equal(searchParams.get('abc'), '123');

    searchParams.append('abc', 'xyz');

    assert.deepEqual(searchParams.getAll('abc'), ['123', 'xyz']);

    const entries = searchParams.entries();
    assert.deepEqual(entries.next(), { value: ["abc", "123"], done: false });
    assert.deepEqual(entries.next(), { value: ["abc", "xyz"], done: false });
    assert.deepEqual(entries.next(), { value: undefined, done: true });

    const keys = searchParams.keys();
    assert.deepEqual(keys.next(), { value: "abc", done: false });
    assert.deepEqual(keys.next(), { value: "abc", done: false });
    assert.deepEqual(keys.next(), { value: undefined, done: true });

    const values = searchParams.values();
    assert.deepEqual(values.next(), { value: "123", done: false });
    assert.deepEqual(values.next(), { value: "xyz", done: false });
    assert.deepEqual(values.next(), { value: undefined, done: true });

    searchParams.set('abc', 'b');
    assert.deepEqual(searchParams.getAll('abc'), ['b']);

    searchParams.delete('a');
    assert(!searchParams.has('a'));
    assert.equal(searchParams.get('a'), null);

    searchParams.sort();
}

{
    const searchParams = new url.URLSearchParams({
        user: 'abc',
        query: ['first', 'second'] as ReadonlyArray<string>
    });

    assert.equal(searchParams.toString(), 'user=abc&query=first%2Csecond');
    assert.deepEqual(searchParams.getAll('query'), ['first,second']);
}

{
    // Using an array
    const params = new url.URLSearchParams([
        ['user', 'abc'],
        ['query', 'first'],
        ['query', 'second'],
    ] as ReadonlyArray<[string, string]>);
    assert.equal(params.toString(), 'user=abc&query=first&query=second');
}

{
    // @ts-expect-error
    new url.URLSearchParams({ foobar: undefined });
}

{
    let path: string = url.fileURLToPath('file://test');
    path = url.fileURLToPath(new url.URL('file://test'));
}

{
    const path: url.URL = url.pathToFileURL('file://test');
}

{
    const opts: RequestOptions = url.urlToHttpOptions(new url.URL('test.com'));
}
{
    const dataUrl: string = url.URL.createObjectURL(new Blob(['']));
}
{
    const dataUrl1: URL = new url.URL('file://test');
    const dataUrl2: url.URL = new URL('file://test');
    const urlSearchParams1: URLSearchParams = new url.URLSearchParams();
    const urlSearchParams2: url.URLSearchParams = new URLSearchParams();
}
