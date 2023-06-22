import equal = require('array-equal');

// @ts-expect-error
equal();
// @ts-expect-error
equal([]);

equal([1, 2, 3], [1, 2, 3]);
