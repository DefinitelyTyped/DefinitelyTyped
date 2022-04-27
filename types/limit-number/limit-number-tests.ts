import limit = require('limit-number');

// $ExpectType number
limit(0, 10, 5);

// $ExpectError
limit(0, 10);
