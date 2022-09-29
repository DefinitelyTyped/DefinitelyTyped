import isValidUTF8 = require('utf-8-validate');

// $ExpectType boolean
isValidUTF8(Buffer.from([0xf0, 0x90, 0x80, 0x80]));

// Will got a `Assertion `val->IsArrayBufferView()' failed.`
// @ts-expect-error
isValidUTF8(new ArrayBuffer(10));
