import ES2020 = require("es-abstract/es2020");

declare const any: unknown;

// New operations in ES2020

// CodePointAt
ES2020.CodePointAt("abc", 0); // $ExpectType CodePointRecord

// LengthOfArrayLike
ES2020.LengthOfArrayLike({ length: 5 }); // $ExpectType number

// IsNonNegativeInteger
ES2020.IsNonNegativeInteger(5); // $ExpectType boolean

// OrdinaryObjectCreate
ES2020.OrdinaryObjectCreate(null); // $ExpectType object
ES2020.OrdinaryObjectCreate({}); // $ExpectType {}
ES2020.OrdinaryObjectCreate({}, ["[[Slot]]"]); // $ExpectType {}

// CreateRegExpStringIterator
ES2020.CreateRegExpStringIterator(/test/g, "test", true, false); // $ExpectType IterableIterator<RegExpMatchArray>

// SameValueNonNumeric
ES2020.SameValueNonNumeric("a", "b"); // $ExpectType boolean

// BigIntBitwiseOp
ES2020.BigIntBitwiseOp("&", BigInt(1), BigInt(2)); // $ExpectType bigint
ES2020.BigIntBitwiseOp("|", BigInt(1), BigInt(2)); // $ExpectType bigint
ES2020.BigIntBitwiseOp("^", BigInt(1), BigInt(2)); // $ExpectType bigint

// ToBigInt
ES2020.ToBigInt(any); // $ExpectType bigint

// ToBigInt64
ES2020.ToBigInt64(BigInt(1)); // $ExpectType bigint

// ToBigUint64
ES2020.ToBigUint64(BigInt(1)); // $ExpectType bigint

// ToNumeric
ES2020.ToNumeric(any); // $ExpectType number | bigint

// StringToBigInt
ES2020.StringToBigInt("123"); // $ExpectType bigint | number

// NumberToBigInt
ES2020.NumberToBigInt(5); // $ExpectType bigint

// thisBigIntValue
ES2020.thisBigIntValue(BigInt(1)); // $ExpectType bigint

// StringPad
ES2020.StringPad("foo", 5, " ", "start"); // $ExpectType string
ES2020.StringPad("foo", 5, undefined, "end"); // $ExpectType string

// NumberBitwiseOp
ES2020.NumberBitwiseOp("&", 1, 2); // $ExpectType number
ES2020.NumberBitwiseOp("|", 1, 2); // $ExpectType number
ES2020.NumberBitwiseOp("^", 1, 2); // $ExpectType number

// BinaryAnd
ES2020.BinaryAnd(0, 1); // $ExpectType 0 | 1

// BinaryOr
ES2020.BinaryOr(0, 1); // $ExpectType 0 | 1

// BinaryXor
ES2020.BinaryXor(0, 1); // $ExpectType 0 | 1

// UTF16DecodeSurrogatePair
ES2020.UTF16DecodeSurrogatePair(0xD800, 0xDC00); // $ExpectType string

// UTF16DecodeString
ES2020.UTF16DecodeString("abc"); // $ExpectType string[]
