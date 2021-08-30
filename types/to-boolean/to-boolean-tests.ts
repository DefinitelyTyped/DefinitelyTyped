import toBoolean = require('to-boolean');

// $ExpectType boolean
toBoolean('yes');

// $ExpectType boolean
globalThis.toBoolean('');

// $ExpectError
toBoolean();
