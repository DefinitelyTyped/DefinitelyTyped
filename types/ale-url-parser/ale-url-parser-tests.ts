import { parse, stringify } from 'ale-url-parser';

// $ExpectType string
stringify({});

// $ExpectType string
stringify({
    protocol: 'protocol',
    host: 'host',
    path: ['foo', 'bar', 'baz'],
    hash: 'hash',
    query: {
        foo: 1,
        bar: [2, '3'],
    },
});

// $ExpectType UrlObject
parse('//any.dom.ain.co.m/foo/bar?test=1&test=2#hash');

const order = ['first', 'second', 'third', 'fourth'];
// $ExpectType string
stringify(
    {
        host: 'domain.lol',
        query: { third: '3', first: '1', fourth: '4', second: '2' },
    },
    {
        compareFunction: (a, b) => (order.indexOf(a) > order.indexOf(b) ? 1 : -1),
    },
);
