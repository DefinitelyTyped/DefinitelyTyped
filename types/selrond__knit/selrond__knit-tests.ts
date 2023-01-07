import knit = require('@selrond/knit');

// $ExpectType number[]
knit.knit([10, 9, 8], 3);

// $ExpectType (string | number)[]
knit.knit([1, 2, 3], ' + ');

// @ts-expect-error
knit.knit([1, 2, 3]);
