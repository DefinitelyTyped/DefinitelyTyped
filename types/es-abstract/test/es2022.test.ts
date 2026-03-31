import ES2022 = require("es-abstract/es2022");

declare const any: unknown;

// New operations in ES2022

// DefineMethodProperty
ES2022.DefineMethodProperty({}, "foo", () => {}, false); // $ExpectType void

// StringToNumber
ES2022.StringToNumber("123"); // $ExpectType number

// IsLessThan
ES2022.IsLessThan(1, 2, true); // $ExpectType boolean | undefined

// IsLooselyEqual
ES2022.IsLooselyEqual(any, any); // $ExpectType boolean

// IsStrictlyEqual
ES2022.IsStrictlyEqual(any, any); // $ExpectType boolean

// CreateNonEnumerableDataPropertyOrThrow
ES2022.CreateNonEnumerableDataPropertyOrThrow({}, "foo", "bar"); // $ExpectType void
