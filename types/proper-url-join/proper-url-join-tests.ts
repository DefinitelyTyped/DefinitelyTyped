import urlJoin from 'proper-url-join';

urlJoin('foo', 'bar'); // /foo/bar
urlJoin('/foo/', '/bar/'); // /foo/bar
urlJoin('foo', '', 'bar'); // /foo/bar
urlJoin('foo', undefined, 'bar'); // /foo/bar
urlJoin('foo', null, 'bar'); // /foo/bar

// With leading & trailing slash options
urlJoin('foo', 'bar', { leadingSlash: false }); // foo/bar
urlJoin('foo', 'bar', { leadingSlash: 'keep' }); // foo/bar
urlJoin('foo', 'bar', { trailingSlash: true }); // /foo/bar/
urlJoin('foo', 'bar', { trailingSlash: 'keep' }); // /foo/bar
urlJoin('foo', 'bar', { leadingSlash: false, trailingSlash: true }); // foo/bar/
urlJoin('foo', 'bar', { leadingSlash: 'keep', trailingSlash: 'keep' }); // foo/bar

// Absolute URLs
urlJoin('http://google.com', 'foo'); // http://google.com/foo

// Protocol relative URLs
urlJoin('//google.com', 'foo', { protocolRelative: true }); // //google.com/foo

// With query string as an url part
urlJoin('foo', 'bar?queryString'); // /foo/bar?queryString
urlJoin('foo', 'bar?queryString', { trailingSlash: true }); // /foo/bar/?queryString

// With query string as an object
urlJoin('foo', { query: { biz: 'buz', foo: 'bar' } }); // /foo?biz=buz&foo=bar

// With both query string as an url part and an object
urlJoin('foo', 'bar?queryString', { query: { biz: 'buz', foo: 'bar' } });

// @ts-expect-error
urlJoin('foo', 'bar?queryString', { query: { biz: 'buz', foo: 'bar' } }, 'wrong');
