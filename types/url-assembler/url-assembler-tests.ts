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
        // @ts-expect-error
        delimiter: true,
        // @ts-expect-error
        strictNullHandling: 'boop',
        // @ts-expect-error
        skipNulls: 'boop',
        // @ts-expect-error
        encode: 'encode',
        // @ts-expect-error
        filter: true,
        // @ts-expect-error
        arrayFormat: 'uncool',
        // @ts-expect-error
        indices: 'true',
        // @ts-expect-error
        sort: false,
        // @ts-expect-error
        serializeDate: (s: string) => s,
        // @ts-expect-error
        format: 'RFC1111',
        // @ts-expect-error
        encodeValuesOnly: 'values',
        // @ts-expect-error
        addQueryPrefix: 'yes please',
        // @ts-expect-error
        allowDots: 'no dots',
        // @ts-expect-error
        charset: 'UtF-eight',
        // @ts-expect-error
        charsetSentinel: 'sentinel?',
    });
}
