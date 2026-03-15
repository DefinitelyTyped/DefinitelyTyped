import assignSymbols = require("assign-symbols");

const sym = Symbol("test");

const target = { a: 1 };
const source = { [sym]: "hello" };

// $ExpectType { a: number; }
assignSymbols(target, source);

// Multiple sources
assignSymbols({}, { a: 1 }, { b: 2 });

// @ts-expect-error - target must be an object
assignSymbols(null, {});
