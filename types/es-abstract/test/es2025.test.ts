import ES2025 = require("es-abstract/es2025");

// New operations in ES2025

// CreateIteratorResultObject
ES2025.CreateIteratorResultObject("value", false); // $ExpectType IteratorResultObject<string>
ES2025.CreateIteratorResultObject(42, true); // $ExpectType IteratorResultObject<number>

// Test a few re-exported operations to ensure they work
ES2025.truncate(5.5); // $ExpectType number
ES2025.ToIntegerOrInfinity(5); // $ExpectType number
ES2025.StringIndexOf("hello", "l", 0); // $ExpectType number
