import anymatch = require('anymatch');

const matchers = [
    'path/to/file.js',
    'path/anyjs/**/*.js',
    /foo\.js$/,
    (str: string) => str.indexOf('bar') !== -1 && str.length > 10
];

// $ExpectType boolean
anymatch(matchers, 'path/to/file.js');
// $ExpectType boolean
anymatch(matchers, 'path/to/file.js', false);
// $ExpectType boolean
anymatch(matchers, 'path/to/file.js', false, 1);
// $ExpectType boolean
anymatch(matchers, 'path/to/file.js', false, 1, 2);

// $ExpectType number
anymatch(matchers, 'foo.js', true);
// $ExpectType number
anymatch(matchers, 'path/anyjs/foo.js', true, 2);
// $ExpectType number
anymatch(matchers, 'path/anyjs/foo.js', true, 2, 3);

const matcher = anymatch(matchers);
// $ExpectType boolean
matcher('path/to/file.js');
// $ExpectType boolean
matcher('path/to/file.js', false);
// $ExpectType boolean
matcher('path/to/file.js', false, 1);
// $ExpectType boolean
matcher('path/to/file.js', false, 1, 2);
// $ExpectType number
matcher('path/anyjs/baz.js', true);
// $ExpectType number
matcher('path/anyjs/baz.js', true, 2);
// $ExpectType number
matcher('path/anyjs/baz.js', true, 2, 3);

// tslint:disable-next-line no-unnecessary-callback-wrapper
['foo.js', 'bar.js'].filter(str => matcher(str));
