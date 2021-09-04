import toRegex from 'to-regex';

toRegex('foo');

toRegex(['foo', 'bar']);

toRegex('foo', { contains: true });

toRegex('foo', {
    contains: true,
    negate: false,
    nocase: true,
    flags: 'g',
    cache: true,
    safe: true
});

