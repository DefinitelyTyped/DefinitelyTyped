import URL = require('url-parse');
const parse = URL;

new URL('foo/bar', 'https://github.com/');
new URL('foo/bar', 'https://github.com/', (query: string) => ({ query }));
parse('foo/bar', 'https://github.com/');
parse('foo/bar', 'https://github.com/', (query: string) => ({ query }));

const url1: URL = new URL('https://github.com/foo/bar?baz=true');
url1.hash;
url1.hostname;
url1.query.baz;

const url2 = new URL('foo/bar', 'https://github.com/');
url2.set('protocol', 'http://');

URL.extractProtocol('https://github.com/foo/bar');
URL.location('https://github.com/foo/bar');
URL.qs.parse('a=b');
