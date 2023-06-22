import lcm = require('compute-lcm');

lcm(2, 3); // $ExpectType number | null
// @ts-expect-error
lcm(3);
lcm([2, 3]); // $ExpectType number | null
// @ts-expect-error
lcm([2, 3], 2);
const data: Array<[string, number]> = [
    ['foo', 2],
    ['bar', 3],
];
lcm(data, d => d[1]); // $ExpectType number | null
