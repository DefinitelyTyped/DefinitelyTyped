import ES2023 = require("es-abstract/es2023");

declare const any: unknown;

// New operations in ES2023

// truncate
const truncateNum: number = 5.5;
const truncateBig: bigint = 5n;
ES2023.truncate(truncateNum); // $ExpectType number
ES2023.truncate(truncateBig); // $ExpectType bigint

// CanBeHeldWeakly
ES2023.CanBeHeldWeakly(any); // $ExpectType boolean

// SameValueNonNumber
ES2023.SameValueNonNumber("a", "b"); // $ExpectType boolean

// IsTimeZoneOffsetString
ES2023.IsTimeZoneOffsetString("+05:00"); // $ExpectType boolean

// GetUTCEpochNanoseconds
ES2023.GetUTCEpochNanoseconds(2024, 1, 1, 0, 0, 0, 0, 0, 0); // $ExpectType bigint

// GetNamedTimeZoneEpochNanoseconds
ES2023.GetNamedTimeZoneEpochNanoseconds("UTC", 2024, 1, 1, 0, 0, 0, 0, 0, 0); // $ExpectType [bigint]

// ToZeroPaddedDecimalString (re-exported from ES2022)
ES2023.ToZeroPaddedDecimalString(7, 4); // $ExpectType string
