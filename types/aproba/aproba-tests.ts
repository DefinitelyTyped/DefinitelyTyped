import validate = require("aproba");

// $ExpectType void
validate("S", ["hello"]);

// $ExpectType void
validate("SN", ["hello", 42]);

// $ExpectType void
validate("SNF", ["hello", 42, () => {}]);

// Multiple schemas with pipe
// $ExpectType void
validate("SA|SN", ["hello", [1, 2]]);

// Wildcard
// $ExpectType void
validate("S*", ["hello", true]);

// Null/undefined type
// $ExpectType void
validate("SZ", ["hello", null]);

// Using arguments object
function example() {
    validate("SF", arguments);
}

// @ts-expect-error - schema must be a string
validate(123, []);

// @ts-expect-error - args must be array-like
validate("S", 42);
