import pIsPromise = require('p-is-promise');

// $ExpectType boolean
pIsPromise(Promise.resolve('🦄'));
// $ExpectType boolean
pIsPromise('🦄');
