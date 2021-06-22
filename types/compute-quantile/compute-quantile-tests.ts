import quantile = require('compute-quantile');

// $ExpectType number
quantile([1, 2, 3], 0.5);

// $ExpectType number
quantile([1, 2, 3], 0.5, undefined);

// $ExpectType number
quantile([1, 2, 3], 0.5, {});

// $ExpectType number
quantile([1, 2, 3], 0.5, { sorted: true });
