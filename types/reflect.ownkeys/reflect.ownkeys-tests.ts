import ownKeys = require("reflect.ownkeys");
import "reflect.ownkeys/auto";

ownKeys({}); // @ExpectType (PropertyKey)[]

const obj = { "a": 1, "b": 2, [Symbol.iterator]: 3 };

ownKeys(obj); // @ExpectType ('a' | 'b' | Symbol.iterator)[]

// @ts-expect-error
ownKeys(123);
