import ES2024 = require("es-abstract/es2024");

// ES2024 re-exports from ES2023
// Test a few operations to ensure re-exports work

const truncateNum: number = 5.5;
const truncateBig: bigint = 5n;
ES2024.truncate(truncateNum); // $ExpectType number
ES2024.truncate(truncateBig); // $ExpectType bigint
ES2024.CanBeHeldWeakly({}); // $ExpectType boolean
ES2024.ToIntegerOrInfinity(5); // $ExpectType number
ES2024.ToZeroPaddedDecimalString(7, 4); // $ExpectType string

ES2024.SystemTimeZoneIdentifier(); // $ExpectType string
