import ES2023 = require("es-abstract/es2023");

declare const any: unknown;

// New operations in ES2023

// truncate
ES2023.truncate(5.5); // $ExpectType number

// CanBeHeldWeakly
ES2023.CanBeHeldWeakly(any); // $ExpectType boolean

// SameValueNonNumber
ES2023.SameValueNonNumber("a", "b"); // $ExpectType boolean
