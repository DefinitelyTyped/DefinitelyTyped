import ES2024 = require("es-abstract/es2024");

// ES2024 re-exports from ES2023
// Test a few operations to ensure re-exports work

ES2024.truncate(5.5); // $ExpectType number
ES2024.CanBeHeldWeakly({}); // $ExpectType boolean
ES2024.ToIntegerOrInfinity(5); // $ExpectType number
