import murmurhash = require('murmurhash');

const stringValue = "test";
let numberValue = 123;

numberValue = murmurhash(stringValue);
numberValue = murmurhash(stringValue, numberValue);

numberValue = murmurhash.v2(stringValue);
numberValue = murmurhash.v2(stringValue, numberValue);

numberValue = murmurhash.v3(stringValue);
numberValue = murmurhash.v3(stringValue, numberValue);
