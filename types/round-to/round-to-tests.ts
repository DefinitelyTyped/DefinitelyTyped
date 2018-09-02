import roundTo = require('round-to');

// $ExpectType number
roundTo(1.234, 2);

// $ExpectType number
roundTo.up(1.234, 2);

// $ExpectType number
roundTo.down(1.234, 2);
