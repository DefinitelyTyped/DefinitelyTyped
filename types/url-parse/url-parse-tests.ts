import Url = require('url-parse');
const parse = Url;

new Url('foo/bar', 'https://github.com/');
parse('foo/bar');
parse('foo/bar', (query: string) => ({ query }));
parse('foo/bar', true);

const url1 = new Url('https://github.com/foo/bar?baz=true');
url1.hash;
url1.hostname;
url1.query;

const url2 = new Url('foo/bar', 'https://github.com/');
url2.set('protocol', 'http://');

const url3 = new Url('foo/bar', 'https://github.com/', (query) => ({ query }));
url3.query.foo;

const url4 = parse('https://github.com/?foo=bar', true);
url4.query.foo;

Url.extractProtocol('https://github.com/foo/bar');
Url.location('https://github.com/foo/bar');
Url.qs.parse('a=b');
