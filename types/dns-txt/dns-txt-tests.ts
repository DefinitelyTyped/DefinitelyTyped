import dnsTxt = require("dns-txt");

// test type exports
type Options = dnsTxt.Options;
type DataToEncode = dnsTxt.DataToEncode;
type DecodedData = dnsTxt.DecodedData;

const txt = dnsTxt();
dnsTxt({ binary: true });

const obj = {
    foo: 1,
    bar: "2",
    baz: true,
    quux: Buffer.alloc(1),
};

txt.encode(obj); // $ExpectType Buffer
txt.encode(obj, Buffer.alloc(100)); // $ExpectType Buffer
txt.encode(obj, Buffer.alloc(100), 10); // $ExpectType Buffer
txt.encode.bytes; // $ExpectType number | undefined

const decoded = txt.decode(Buffer.alloc(100)); // $ExpectType DecodedData
txt.decode(Buffer.alloc(100), 10); // $ExpectType DecodedData
txt.decode(Buffer.alloc(100), 10, 50); // $ExpectType DecodedData
txt.decode.bytes; // $ExpectType number | undefined

decoded.foo; // $ExpectType string | true | Buffer

txt.encodingLength(obj); // $ExpectType number
