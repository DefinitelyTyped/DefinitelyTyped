import toSigned = require('boolean-to-signed');

// $ExpectType 1 | -1
toSigned(true);

// @ts-expect-error
toSigned(40);

// $ExpectType number
234234 * toSigned(false);
