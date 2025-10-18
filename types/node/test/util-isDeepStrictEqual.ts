import * as util from "node:util";

const a = { x: 1 },
    b = { x: 1 };

// Basic usage without options returns boolean
util.isDeepStrictEqual(a, b); // $ExpectType boolean

// With valid options returns boolean
util.isDeepStrictEqual(a, b, { skipPrototype: true }); // $ExpectType boolean
util.isDeepStrictEqual(a, b, { skipPrototype: false }); // $ExpectType boolean
util.isDeepStrictEqual(a, b, {}); // $ExpectType boolean

// Test with different types
util.isDeepStrictEqual(1, 1); // $ExpectType boolean
util.isDeepStrictEqual("str", "str"); // $ExpectType boolean
util.isDeepStrictEqual([1, 2], [1, 2]); // $ExpectType boolean
util.isDeepStrictEqual(null, null); // $ExpectType boolean
util.isDeepStrictEqual(undefined, undefined); // $ExpectType boolean

// Invalid option type should error
// @ts-expect-error
util.isDeepStrictEqual(a, b, { skipPrototype: "yes" });

// Unknown properties should error
// @ts-expect-error
util.isDeepStrictEqual(a, b, { unknown: true });
