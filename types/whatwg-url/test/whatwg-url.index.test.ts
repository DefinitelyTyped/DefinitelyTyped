import * as whatwgUrl from 'whatwg-url';

// test type exports
type URLRecord = whatwgUrl.URLRecord;
type IPv6Address = whatwgUrl.IPv6Address;
type URL = whatwgUrl.URL;
type URLSearchParams = whatwgUrl.URLSearchParams;
type StateOverride = whatwgUrl.StateOverride;
type TypedArray = whatwgUrl.TypedArray;

declare const searchParams: whatwgUrl.URLSearchParams;

// $ExpectType URL
new whatwgUrl.URL('http://example.com');

// $ExpectType URL
new whatwgUrl.URL('foo', 'http://example.com');

// $ExpectType URLRecord | null
const urlRecord = whatwgUrl.parseURL('http://example.com');
whatwgUrl.parseURL('http://example.com', { baseURL: 'foo' });

if (urlRecord !== null) {
    urlRecord.scheme; // $ExpectType string
    urlRecord.username; // $ExpectType string
    urlRecord.password; // $ExpectType string
    urlRecord.host; // $ExpectType string | number | IPv6Address | null
    urlRecord.port; // $ExpectType number | null
    urlRecord.path; // $ExpectType string | string[]
    urlRecord.query; // $ExpectType string | null
    urlRecord.fragment; // $ExpectType string | null
    whatwgUrl.basicURLParse('http://example.com', { url: urlRecord }); // $ExpectType URLRecord | null
    whatwgUrl.basicURLParse('http://example.com', { baseURL: 'foo' }); // $ExpectType URLRecord | null
    (
        [
            'scheme start',
            'scheme',
            'no scheme',
            'special relative or authority',
            'path or authority',
            'relative',
            'relative slash',
            'special authority slashes',
            'special authority ignore slashes',
            'authority',
            'host',
            'hostname',
            'port',
            'file',
            'file slash',
            'file host',
            'path start',
            'path',
            'opaque path',
            'query',
            'fragment',
        ] as const
    ).forEach(override => {
        whatwgUrl.basicURLParse('http://example.com', { stateOverride: override }); // $ExpectType URLRecord | null
    });
    whatwgUrl.serializeURL(urlRecord); // $ExpectType string
    whatwgUrl.serializeURLOrigin(urlRecord); // $ExpectType string
    whatwgUrl.setTheUsername(urlRecord, 'user'); // $ExpectType void
    whatwgUrl.setThePassword(urlRecord, 'secret'); // $ExpectType void
    whatwgUrl.cannotHaveAUsernamePasswordPort(urlRecord); // $ExpectType boolean
    whatwgUrl.serializePath(urlRecord); // $ExpectType string
    whatwgUrl.hasAnOpaquePath(urlRecord); // $ExpectType boolean
}

// $ExpectType string
whatwgUrl.serializeHost('http://example.com');

// $ExpectType string
whatwgUrl.serializeHost(42);

// $ExpectType string
whatwgUrl.serializeHost([0, 0, 0, 0, 0, 0, 0, 0]);

// $ExpectType string
whatwgUrl.serializeInteger(42);

// $ExpectType Uint8Array
whatwgUrl.percentDecodeBytes(new Uint8Array([]));

// $ExpectType Uint8Array
whatwgUrl.percentDecodeString('foo');

[
    Int8Array,
    Int16Array,
    Int32Array,
    Uint8Array,
    Uint8ClampedArray,
    Uint16Array,
    Uint32Array,
    Float32Array,
    Float64Array,
].forEach(ctor => {
    // $ExpectType Uint8Array
    whatwgUrl.percentDecodeBytes(new ctor());
});

[BigInt64Array, BigUint64Array].forEach(ctor => {
    whatwgUrl.percentDecodeBytes(
        // @ts-expect-error
        new ctor(),
    );
});

searchParams.forEach((value, name, self) => {
    value; // $ExpectType string
    name; // $ExpectType string
    self; // $ExpectType URLSearchParams
});

// tslint:disable-next-line: space-before-function-paren
searchParams.forEach(function (value, name, self) {
    this; // $ExpectType null
    value; // $ExpectType string
    name; // $ExpectType string
    self; // $ExpectType URLSearchParams
}, null);

searchParams.keys(); // $ExpectType IterableIterator<string>
searchParams.values(); // $ExpectType IterableIterator<string>
searchParams.entries(); // $ExpectType IterableIterator<[name: string, value: string]>
searchParams[Symbol.iterator](); // $ExpectType IterableIterator<[name: string, value: string]>
