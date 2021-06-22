import * as whatwgUrl from "whatwg-url";

declare const searchParams: whatwgUrl.URLSearchParams;

// $ExpectType URL
new whatwgUrl.URL("http://example.com");

// $ExpectType URL
new whatwgUrl.URL("foo", "http://example.com");

// $ExpectType URLRecord | null
const urlRecord = whatwgUrl.parseURL("http://example.com");

if (urlRecord !== null) {
    whatwgUrl.basicURLParse("http://example.com", { url: urlRecord }); // $ExpectType URLRecord | null
    whatwgUrl.serializeURL(urlRecord); // $ExpectType string
    whatwgUrl.serializeURLOrigin(urlRecord); // $ExpectType string
    whatwgUrl.setTheUsername(urlRecord, "user"); // $ExpectType void
    whatwgUrl.setThePassword(urlRecord, "secret"); // $ExpectType void
    whatwgUrl.cannotHaveAUsernamePasswordPort(urlRecord); // $ExpectType boolean
}

// $ExpectType string
whatwgUrl.serializeHost("http://example.com");

// $ExpectType string
whatwgUrl.serializeHost(42);

// $ExpectType string
whatwgUrl.serializeHost([0, 0, 0, 0, 0, 0, 0, 0]);

// $ExpectType string
whatwgUrl.serializeInteger(42);

// $ExpectType Buffer
whatwgUrl.percentDecode(Buffer.from("foo"));

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
].forEach((ctor) => {
    // $ExpectType Buffer
    whatwgUrl.percentDecode(new ctor());
});

[BigInt64Array, BigUint64Array].forEach((ctor) => {
    whatwgUrl.percentDecode(
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
