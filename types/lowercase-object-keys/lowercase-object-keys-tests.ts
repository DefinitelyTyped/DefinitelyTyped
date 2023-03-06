import lowercaseObjectKeys = require('lowercase-object-keys');

// $ExpectType LowercaseObjectKeysResult<{}>
const niceObj = lowercaseObjectKeys({});

// $ExpectType string
const name = lowercaseObjectKeys({ NAME: 'Bob '}).name;

// @ts-expect-error
lowercaseObjectKeys();

// @ts-expect-error
lowercaseObjectKeys<number>({ a: 1, b: 2, c: 3 });
