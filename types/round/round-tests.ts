import round = require('round');

// $ExpectType number
const apples = round(4.99);

// $ExpectType number
const cents = round.down(24.02342, 0.01);

// @ts-expect-error
round();

// @ts-expect-error
round.up('1');
