import add = require("add");
const { dumbSum, fastTwoSum, nextPowerTwo } = add;

// $ExpectType number
add([0.1, 0.2]);

// @ts-expect-error
add(15, 14);

// $ExpectType number
dumbSum([15, 14]);

// @ts-expect-error
dumbSum(20, "a");

// $ExpectType [number, number, null]
fastTwoSum(1 / 3, 1 / 6);

// @ts-expect-error
fastTwoSum(1 / 3);

// $ExpectType number
nextPowerTwo(1534);

// @ts-expect-error
nextPowerTwo(new Symbol());
