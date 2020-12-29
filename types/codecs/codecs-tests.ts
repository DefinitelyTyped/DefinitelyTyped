import codecs = require('codecs');

codecs().name; // $ExpectType "binary"

codecs.ascii.name; // $ExpectType "ascii"
codecs('ascii').name; // $ExpectType "ascii"
codecs.ascii.encode('hello'); // $ExpectType Buffer
codecs.ascii.decode(new Uint8Array()); // $ExpectType string

codecs.base64.name; // $ExpectType "base64"
codecs('base64').name; // $ExpectType "base64"
codecs.base64.encode('hello'); // $ExpectType Buffer
codecs.base64.decode(new Uint8Array()); // $ExpectType string

codecs.binary.name; // $ExpectType "binary"
codecs('binary').name; // $ExpectType "binary"
codecs.binary.encode('hello'); // $ExpectType Buffer
codecs.binary.encode(new Uint8Array()); // $ExpectType Buffer
codecs.binary.decode(new Uint8Array()); // $ExpectType Buffer
codecs.binary.decode(Buffer.alloc(1)); // $ExpectType Buffer

codecs.hex.name; // $ExpectType "hex"
codecs('hex').name; // $ExpectType "hex"
codecs.hex.encode('hello'); // $ExpectType Buffer
codecs.hex.decode(new Uint8Array()); // $ExpectType string

codecs.json.name; // $ExpectType "json"
codecs('json').name; // $ExpectType "json"
codecs.json.encode({ hello: 'world' }); // $ExpectType Buffer
codecs.json.decode(new Uint8Array()); // $ExpectType JsonValue

codecs.ndjson.name; // $ExpectType "ndjson"
codecs('ndjson').name; // $ExpectType "ndjson"
codecs.ndjson.encode({ hello: 'world' }); // $ExpectType Buffer
codecs.ndjson.decode(new Uint8Array()); // $ExpectType JsonValue

codecs['ucs-2'].name; // $ExpectType "ucs2"
codecs('ucs-2').name; // $ExpectType "ucs2"
codecs['ucs-2'].encode('hello'); // $ExpectType Buffer
codecs['ucs-2'].decode(new Uint8Array()); // $ExpectType string

codecs.ucs2.name; // $ExpectType "ucs2"
codecs('ucs2').name; // $ExpectType "ucs2"
codecs.ucs2.encode('hello'); // $ExpectType Buffer
codecs.ucs2.decode(new Uint8Array()); // $ExpectType string

codecs['utf-8'].name; // $ExpectType "utf-8"
codecs('utf-8').name; // $ExpectType "utf-8"
codecs['utf-8'].encode('hello'); // $ExpectType Buffer
codecs['utf-8'].decode(new Uint8Array()); // $ExpectType string

codecs['utf16-le'].name; // $ExpectType "utf16le"
codecs('utf16-le').name; // $ExpectType "utf16le"
codecs['utf16-le'].encode('hello'); // $ExpectType Buffer
codecs['utf16-le'].decode(new Uint8Array()); // $ExpectType string

codecs.utf16le.name; // $ExpectType "utf16le"
codecs('utf16le').name; // $ExpectType "utf16le"
codecs['utf16le'].encode('hello'); // $ExpectType Buffer
codecs['utf16le'].decode(new Uint8Array()); // $ExpectType string

codecs.utf8.name; // $ExpectType "utf-8"
codecs(null).name; // $ExpectType "binary"
codecs('hi').name; // $ExpectType "binary"
codecs('hi', codecs.json).name; // $ExpectType "json"
codecs.json.encode({ hello: 'world' });
codecs.json.decode(new Uint8Array()); // $ExpectType JsonValue
codecs.ndjson.encode({ hello: 'world' });
codecs.ndjson.decode(new Uint8Array()); // $ExpectType JsonValue
