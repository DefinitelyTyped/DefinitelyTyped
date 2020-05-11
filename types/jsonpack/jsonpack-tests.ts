import * as jsonpack from 'jsonpack';

const obj = { myString: 'myStringValue' };

jsonpack.pack(obj); // $ExpectType string
jsonpack.pack(obj, { verbose: true }); // $ExpectType string
jsonpack.pack(JSON.stringify(obj)); // $ExpectType string
jsonpack.pack(JSON.stringify(obj), { debug: true }); // $ExpectType DebugObject

const packed = 'packed-string-here';

jsonpack.unpack(packed); // $ExpectType {}
jsonpack.unpack<string>(packed, { verbose: true }); // $ExpectType string
