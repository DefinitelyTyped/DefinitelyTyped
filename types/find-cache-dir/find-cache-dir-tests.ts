import findCacheDir = require('find-cache-dir');

findCacheDir({ name: 'unicorns' }); // $ExpectType string | undefined
findCacheDir({ name: 'unicorns', files: 'foo' }); // $ExpectType string | undefined
findCacheDir({ name: 'unicorns', files: ['foo', 'bar'] }); // $ExpectType string | undefined
findCacheDir({ name: 'unicorns', cwd: 'foo' }); // $ExpectType string | undefined
findCacheDir({ name: 'unicorns', create: true }); // $ExpectType string | undefined
findCacheDir({ name: 'unicorns', thunk: false }); // $ExpectType string | undefined
// @ts-expect-error
findCacheDir({});
// @ts-expect-error
findCacheDir();

const thunk = findCacheDir({ name: 'unicorns', thunk: true });
thunk; // $ExpectType ((...pathParts: string[]) => string) | undefined

if (thunk) {
    thunk(); // $ExpectType string
    thunk('bar.js'); // $ExpectType string
    thunk('baz', 'quz.js'); // $ExpectType string
}
