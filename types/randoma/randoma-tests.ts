import Randoma = require('randoma');

const random = new Randoma({ seed: 10 });
new Randoma({ seed: '🦄' });
new Randoma({ seed: Randoma.seed() });

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
// $ExpectType string
random.arrayItem(['🦄']);
// $ExpectType Date
random.date();
// $ExpectType Date
random.dateInRange(new Date(), new Date());

random
    .color(0.5)
    .hex()
    .toString();
