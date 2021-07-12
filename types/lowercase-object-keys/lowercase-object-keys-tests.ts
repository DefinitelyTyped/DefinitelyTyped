import lowercaseObjectKeys = require('lowercase-object-keys');

// $ExpectType LowercaseObjectKeysResult<{}>
const niceObj = lowercaseObjectKeys({});

// $ExpectType string
const name = lowercaseObjectKeys({ NAME: 'Bob '}).name;

// $ExpectError
lowercaseObjectKeys();

// $ExpectError
lowercaseObjectKeys<number>({ a: 1, b: 2, c: 3 });
