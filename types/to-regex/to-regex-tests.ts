import toRegex = require('to-regex');

// $ExpectType RegExp
toRegex('foo');

// $ExpectType RegExp
toRegex(['foo', 'bar']);

// $ExpectType RegExp
toRegex('foo', { contains: true });

// $ExpectType RegExp
toRegex('foo', {
    contains: true,
    negate: false,
    nocase: true,
    flags: 'g',
    cache: true,
    safe: true,
});
