import ES2021 = require("es-abstract/es2021");

declare const any: unknown;

// New operations in ES2021

// StringIndexOf
ES2021.StringIndexOf("hello", "l", 0); // $ExpectType number

// ToIntegerOrInfinity
ES2021.ToIntegerOrInfinity(any); // $ExpectType number

// substring
ES2021.substring("hello", 0, 3); // $ExpectType string
ES2021.substring("hello", 0); // $ExpectType string

// IsIntegralNumber
ES2021.IsIntegralNumber(any); // $ExpectType boolean

// clamp
ES2021.clamp(5, 0, 10); // $ExpectType number

// CodePointsToString
ES2021.CodePointsToString(["a", "b", "c"]); // $ExpectType string

// StringToCodePoints
ES2021.StringToCodePoints("abc"); // $ExpectType string[]
