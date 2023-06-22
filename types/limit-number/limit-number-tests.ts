import limit = require('limit-number');

// $ExpectType number
limit(0, 10, 5);

// @ts-expect-error
limit(0, 10);
