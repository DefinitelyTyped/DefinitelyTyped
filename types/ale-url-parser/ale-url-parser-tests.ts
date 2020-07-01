import { parse, stringify } from 'ale-url-parser';

let url;
let urlObject;

url = stringify({});
console.log(url);

url = stringify({
    protocol: 'protocol',
    host: 'host',
    path: ['foo', 'bar', 'baz'],
    hash: 'hash',
    query: {
        foo: 1,
        bar: [2, '3']
    }
});
console.log(url);

urlObject = parse('//any.dom.ain.co.m/foo/bar?test=1&test=2#hash');
console.log(urlObject);
