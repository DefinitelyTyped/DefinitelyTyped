import * as d20 from 'd20';

d20.roll('1d6'); // $ExpectType number
d20.roll(20); // $ExpectType number

d20.roll('1d6', false); // $ExpectType number
d20.roll('1d6', true); // $ExpectType number[]
d20.roll(20, false); // $ExpectType number
d20.roll(20, true); // $ExpectType number[]

d20.verboseRoll('1d6'); // $ExpectType number[]
d20.verboseRoll(20); // $ExpectType number[]
