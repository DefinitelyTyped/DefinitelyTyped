import wif = require('wif');

const testString = 'test';
const testBuffer = Buffer.from(testString);

// $ExpectType WIFReturn
wif.decodeRaw(testBuffer);
// $ExpectType WIFReturn
wif.decodeRaw(testBuffer, 0);
// $ExpectType WIFReturn
wif.decode(testString);
// $ExpectType WIFReturn
wif.decode(testString, 0);

// $ExpectType Buffer
wif.encodeRaw(1, testBuffer, true);
// $ExpectType string
wif.encode(1, testBuffer, true);
