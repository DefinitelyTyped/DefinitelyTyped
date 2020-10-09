import URI = require('urijs');
import * as URITemplate from 'urijs/src/URITemplate';
declare var $: (arg?: any) => JQuery;

// Scope it so doesn't name conflict with other tests.
{
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
        fragment: 'frag',
    });

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
        fragment: 'frag',
    });

    URI.preventInvalidHostname = false;

    URI('').setQuery('foo', 'bar');
    URI('').setQuery({ foo: 'bar' });
    URI('').setSearch('foo', 'bar');
    URI('').setSearch({ foo: 'bar' });
    URI('http://example.org/foo/hello.html').addQuery('foo');
    URI('http://example.org/foo/hello.html').addQuery('foo', 'bar');
    URI('http://example.org/foo/hello.html').addQuery({ foo: 'bar' });
    URI('http://example.org/foo/hello.html').addSearch('foo');
    URI('http://example.org/foo/hello.html').addSearch('foo', 'bar');
    URI('http://example.org/foo/hello.html').addSearch({ foo: 'bar' });

    let uri: URI = $('a').uri();

    URI('http://example.org/foo/hello.html').segment('bar');
    URI('http://example.org/foo/hello.html').segment(0, 'bar');
    URI('http://example.org/foo/hello.html').segment(['foo', 'bar', 'foobar.html']);

    URI('http://example.org/foo/hello.html').segment(0);
    URI('http://example.org/foo/hello.html').segment(100);

    URI('http://example.org/foo/hello.html').segmentCoded('foo bar');
    URI('http://example.org/foo/hello.html').segmentCoded(0, 'foo bar');
    URI('http://example.org/foo/hello.html').segmentCoded(['foo bar', 'bar foo', 'foo bar.html']);

    const withDuplicates = URI('?bar=1&bar=1')
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
    URI(
        'http://user:pass@example.org:80/foo/bar.html?foo=bar&bar=baz#frag'
    ).equals(
        URI.expand!('http://user:pass@example.org:80{/p*}{?q*}{#h}', {
            p: ['foo', 'bar.html'],
            q: { foo: 'bar', bar: 'baz' },
            h: 'frag',
        }),
    );

    // Basic URITemplate type usage
    URI('http://user:pass@example.org:80/foo/bar.html?foo=bar&bar=baz#frag').equals(
        URITemplate('http://user:pass@example.org:80{/p*}{?q*}{#h}').expand({
            p: ['foo', 'bar.html'],
            q: { foo: 'bar', bar: 'baz' },
            h: 'frag',
        })
    );

    // Using a callback for a specific key value.
    URI('http://user:pass@example.org:80/foo/bar.html?foo=bar&bar=baz#frag').equals(
        URITemplate('http://user:pass@example.org:80{/p*}{?q*}{#h}').expand({
            p: key => ['foo', 'bar.html'],
            q: { foo: 'bar', bar: 'baz' },
            h: 'frag',
        })
    );

    // Using a callback for entire data parameter.
    URI('http://user:pass@example.org:80/foo/bar.html?foo=bar&bar=baz#frag').equals(
        URITemplate('http://user:pass@example.org:80{/p*}{?q*}{#h}').expand(key => {
            switch (key) {
                case 'p':
                    return ['foo', 'bar.html'];
                case '1':
                    return { foo: 'bar', bar: 'baz' };
                case 'h':
                    return 'frag';
            }
        })
    );

    // Supports null/undefined values for certain keys
    URI('http://user:pass@example.org:80/foo/bar.html').equals(
        URITemplate('http://user:pass@example.org:80{/p*}{?q*}{#h}').expand({
            p: ['foo', 'bar.html'],
            q: null,
            h: undefined,
        })
    );

    const template = URITemplate('/items/{?page,count}');
    template.parse() === template;

    const test = <T>(a: T, b: T): boolean => {
        return a === b;
    };

    /*
    Tests for hasSearch(), hasQuery()
    From: http://medialize.github.io/URI.js/docs.html#search-has
    */
    uri = URI('?string=bar&list=one&list=two&number=123&null&empty=');

    test(uri.hasQuery('string'), true);
    test(uri.hasSearch('nono'), false);

    test(uri.hasQuery('string', true), true);
    test(uri.hasSearch('string', false), false);

    test(uri.hasQuery('string', 'bar'), true);
    test(uri.hasSearch('number', 123), true);

    test(uri.hasQuery('list', 'two', true), true);
    test(uri.hasSearch('list', ['two'], true), true);
    test(uri.hasQuery('list', 'three', true), false);
    test(uri.hasSearch('list', ['two', 'three'], true), false);
    test(uri.hasQuery('list', /ne$/, true), true);

    test(uri.hasQuery('string', /ar$/), true);

    test(uri.hasQuery(/^str/), true);
    test(uri.hasQuery(/^li/, 'two'), true);

    test(
        uri.hasQuery('string', (value: string, name: string, data: string) => {
            return true;
        }),
        true
    );

    /*
    Tests for removeSearch()
    From: https://medialize.github.io/URI.js/docs.html#search-remove
    */
    uri = new URI('?hello=world&hello=mars&foo=bar');
    uri.removeSearch('hello');
    test(uri.search(), '?foo=bar');

    uri.search('?hello=world&hello=mars&foo=bar');
    uri.removeSearch('hello', 'world');
    test(uri.search(), '?hello=mars&foo=bar');

    uri.search('?hello=world&hello=mars&foo=bar&mine=true');
    uri.removeSearch(['hello', 'foo']);
    test(uri.search(), '?mine=true');

    /*
    Tests for is()
    From: https://medialize.github.io/URI.js/docs.html#is
    */
    uri = new URI('?hello=world&hello=mars&foo=bar');
    test(uri.is('relative'), true);
    test(uri.is('absolute'), false);
    test(uri.is('urn'), false);
    test(uri.is('url'), true);
    test(uri.is('domain'), false);
    test(uri.is('name'), false);
    test(uri.is('sld'), false);
    test(uri.is('idn'), false);
    test(uri.is('punycode'), false);
    test(uri.is('ip'), false);
    test(uri.is('ip4'), false);
    test(uri.is('ipv4'), false);
    test(uri.is('inet4'), false);
    test(uri.is('ip6'), false);
    test(uri.is('ipv6'), false);
    test(uri.is('inet6'), false);

    /*
    Tests for URI.build()
    From: https://medialize.github.io/URI.js/docs.html#static-build
    */
    URI.build({
        protocol: 'mailto',
        path: 'mail@example.org',
        urn: true,
    }) === 'mailto:mail@example.org';

    /*
    Tests for URI.parse()
    From: https://medialize.github.io/URI.js/docs.html#static-parse
    */
    const parts = URI.parse('mailto:mail@example.org');
    parts.path === 'mail@example.org';
    parts.preventInvalidHostname = false;
    parts.protocol === 'mailto';
    parts.urn === true;

    /*
    Tests for URI.buildQuery()
    From: https://medialize.github.io/URI.js/docs.html#static-buildQuery
    */
    const buildQueryData = {
      foo: 'bar',
      hello: ['world', 'mars', 'mars'],
      bam: '',
      yup: null,
      removed: undefined,
    };
    test(URI.buildQuery(buildQueryData), 'foo=bar&hello=world&hello=mars&bam=&yup');
    test(URI.buildQuery(buildQueryData, true), 'foo=bar&hello=world&hello=mars&hello=mars&bam=&yup');

    /*
    Tests for URI.parseQuery()
    From: https://medialize.github.io/URI.js/docs.html#static-parseQuery
    */
    test(URI.parseQuery('?foo=bar&hello=world&hello=mars&bam=&yup'), {
      foo: 'bar',
      hello: ['world', 'mars'],
      bam: '',
      yup: null,
    });
    test(URI.parseQuery('akey=1&v=alue&akey=two&akey=&akey'), {
      v: 'alue',
      akey: ['1', 'two', '', null],
    });

    /*
    Tests for URI.search(), URI.query()
    From: https://medialize.github.io/URI.js/docs.html#accessors-search
    */
    const u = new URI('mailto:mail@example.org');
    u.query(qs => qs);
    u.search(qs => qs);
    u.query(() => undefined);
    u.search(() => undefined);
    u.query(() => {
        // Return nothing
    });
    u.search(() => {
        // Return nothing
    });
}
