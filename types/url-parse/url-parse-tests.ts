import URL = require('url-parse');
const parse = URL;

new URL('foo/bar', 'https://github.com/');
new URL('foo/bar', 'https://github.com/', (query: string) => ({ query }));
new URL('foo/bar', 'https://github.com/', true);
parse('foo/bar', 'https://github.com/');
parse('foo/bar', 'https://github.com/', (query: string) => ({ query }));
const result = parse('foo/bar?baz=quux', true);
if (result.query.baz !== 'quux') {
    throw new Error('bad query parsing');
}

const url1 = new URL('https://github.com/foo/bar?baz=true');
url1.hash;
url1.hostname;

const url3 = new URL('https://github.com/foo/bar?baz=true', true);
url3.hash;
url3.hostname;
url3.query.baz;

function pseudoParse(): Set<number> {
  return new Set([1]);
}

const url4 = new URL('https://github.com/foo/bar?baz=true', undefined, pseudoParse);
url4.hash;
url4.hostname;
url4.query.has(3);

const url2 = new URL('foo/bar', 'https://github.com/');
url2.set('protocol', 'http://');
url2.set('slashes', true);
url2.set('query', 'bar=foo');
url2.set('query', {queryParameterName: 'queryParameterValue'});

const url5 = new URL('https://github.com/foo/bar?baz=true', true);
url5.set('query', {queryParameterName: 'queryParameterValue'});
url5.query.queryParameterName;

URL.extractProtocol('https://github.com/foo/bar');
URL.location('https://github.com/foo/bar');
URL.trimLeft('   https://github.com/foo/bar');
URL.qs.parse('a=b');
