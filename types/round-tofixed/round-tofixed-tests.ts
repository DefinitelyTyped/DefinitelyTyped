import roundToFixed from "round-tofixed";

// $ExpectType number
const checkReturnTypeType = roundToFixed(4.99);

// $ExpectType number
const checkBothArgs = roundToFixed(4.99, 3);

// @ts-expect-error expect to fail on string for first arg
roundToFixed("foo");

// @ts-expect-error expect to fail on string for second arg
roundToFixed(3, "foo");
