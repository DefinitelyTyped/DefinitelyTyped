import isEqual from "is-equal-shallow";

// $ExpectType boolean
isEqual({ a: 1 }, { a: 1 });

// $ExpectType boolean
isEqual({ a: 1 }, { a: 2 });

// @ts-expect-error
isEqual(1, 1);

// @ts-expect-error
isEqual("test", "test");

// Nested objects (shallow comparison only checks top level)
const obj1 = { a: { b: 1 } };
const obj2 = { a: { b: 1 } };

// $ExpectType boolean
isEqual(obj1, obj2);
