import lcm = require('compute-lcm');

lcm(2, 3); // $ExpectType number | null
lcm(3); // $ExpectError
lcm([2, 3]); // $ExpectType number | null
lcm([2, 3], 2); // $ExpectError
const data: Array<[string, number]> = [
    ['foo', 2],
    ['bar', 3],
];
lcm(data, d => d[1]); // $ExpectType number | null
