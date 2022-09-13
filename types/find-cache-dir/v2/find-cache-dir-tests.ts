import findCacheDir = require('find-cache-dir');

findCacheDir({ name: 'unicorns' }); // $ExpectType string | null
findCacheDir({ name: 'unicorns', files: 'foo' }); // $ExpectType string | null
findCacheDir({ name: 'unicorns', files: ['foo', 'bar'] }); // $ExpectType string | null
findCacheDir({ name: 'unicorns', cwd: 'foo' }); // $ExpectType string | null
findCacheDir({ name: 'unicorns', create: true }); // $ExpectType string | null
findCacheDir({ name: 'unicorns', thunk: false }); // $ExpectType string | null
// @ts-expect-error
findCacheDir({});
// @ts-expect-error
findCacheDir();

const thunk = findCacheDir({ name: 'unicorns', thunk: true });
thunk; // $ExpectType ((...pathParts: string[]) => string) | null

if (thunk) {
    thunk(); // $ExpectType string
    thunk('bar.js'); // $ExpectType string
    thunk('baz', 'quz.js'); // $ExpectType string
}
