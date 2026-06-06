import stringify = require("fast-stable-stringify");

// Test with various types
const strResult: string | undefined = stringify({ a: 1, b: 2 });
const arrResult: string | undefined = stringify([1, 2, 3]);
const numResult: string | undefined = stringify(42);
const boolResult: string | undefined = stringify(true);
const nullResult: string | undefined = stringify(null);
const undefinedResult: string | undefined = stringify(undefined);

// Test with nested objects - keys should be sorted
const nested: string | undefined = stringify({
    c: 8,
    b: [{ z: 6, y: 5, x: 4 }, 7],
    a: 3,
});

// Test with object having toJSON method
const withToJSON: string | undefined = stringify({
    toJSON: () => ({ serialized: true }),
});

// Test that result can be undefined for functions
const funcResult: string | undefined = stringify(() => {});

// Test with string
const stringResult: string | undefined = stringify("hello");

// Test with Date (has toJSON)
const dateResult: string | undefined = stringify(new Date());

// Verify the result type allows string operations when defined
if (strResult !== undefined) {
    const len: number = strResult.length;
    const parsed: unknown = JSON.parse(strResult);
}
