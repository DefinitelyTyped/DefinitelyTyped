import ensureError = require('ensure-error');

const error = new TypeError('🦄');

// $ExpectType TypeError
ensureError(error);

// $ExpectType NonError
ensureError(10);
