import ParkMiller = require('park-miller');

const random = new ParkMiller(10);

// $ExpectType number
random.integer();
// $ExpectType number
random.integerInRange(0, 1);
// $ExpectType number
random.float();
// $ExpectType number
random.floatInRange(0, 1);
// $ExpectType boolean
random.boolean();
