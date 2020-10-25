import JSONBig = require('json-bigint');

const jsonString = `{ "a": "b"}`;
const jsonObject = { a: 'b' };

// $ExpectType any
JSONBig({
    useNativeBigInt: true,
    alwaysParseAsBig: false,
    constructorAction: 'error',
    protoAction: 'preserve',
    storeAsString: undefined,
    strict: true,
}).parse(jsonString);

JSONBig.parse(jsonString); // $ExpectType any

JSONBig().stringify(jsonObject); // $ExpectType string
JSONBig.stringify(jsonObject); // $ExpectType string
