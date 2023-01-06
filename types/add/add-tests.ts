import add, { dumbSum, fastTwoSum, nextPowerTwo } from "add"
const evil = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7]

// $ExpectType number
add(evil);

// @ts-expect-error
add(15, 14);

// $ExpectType number
dumbSum([15, 14]);

// @ts-expect-error
dumbSum(20, "a")

// $ExpectType [number, number, null]
fastTwoSum(1 / 3, 1 / 6);

// @ts-expect-error
fastTwoSum(1 / 3);

// $ExpectType number
nextPowerTwo(1534);

// @ts-expect-error
nextPowerTwo(new Symbol());
