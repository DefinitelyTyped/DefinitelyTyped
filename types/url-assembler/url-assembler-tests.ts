import UrlAssembler = require('url-assembler');
UrlAssembler('http://goggle.com').segment('string');
const f = new UrlAssembler('https://foo/bar/');

function printUrl(u: UrlAssembler) {
    return u.toJSON();
}

function checkQSConfig(u: UrlAssembler) {
    u.qsConfig({
        delimiter: '#',
        strictNullHandling: true,
        skipNulls: true,
        encode: true,
        filter: [1, 2, 3],
        arrayFormat: 'indices',
        indices: true,
        sort: (a: string, b: string) => a.localeCompare(b),
        serializeDate: (d: Date) => d.toString(),
        format: 'RFC1738',
        encodeValuesOnly: true,
        addQueryPrefix: true,
        allowDots: true,
        charset: 'utf-8',
        charsetSentinel: true,
    });

    u.qsConfig({
        // $ExpectError
        delimiter: true,
        // $ExpectError
        strictNullHandling: 'boop',
        // $ExpectError
        skipNulls: 'boop',
        // $ExpectError
        encode: 'encode',
        // $ExpectError
        filter: true,
        // $ExpectError
        arrayFormat: 'uncool',
        // $ExpectError
        indices: 'true',
        // $ExpectError
        sort: false,
        // $ExpectError
        serializeDate: (d: Date) => d.toString(),
        // $ExpectError
        format: 'RFC1111',
        // $ExpectError
        encodeValuesOnly: 'values',
        // $ExpectError
        addQueryPrefix: 'yes please',
        // $ExpectError
        allowDots: 'no dots',
        // $ExpectError
        charset: 'UtF-eight',
        // $ExpectError
        charsetSentinel: 'sentinel?',
    });
}
