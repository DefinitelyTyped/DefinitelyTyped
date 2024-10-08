import ref = require("ref-napi");
import ref_array = require("ref-array-di");
const ArrayType = ref_array(ref);

declare const typeLike: string | ref.Type<unknown>;
declare const buffer: Buffer;
declare const number: number;
declare const numberArray: number[];

// $ExpectType ArrayType<unknown>
ArrayType(typeLike);
// $ExpectType ArrayType<unknown>
ArrayType(typeLike, undefined);
// $ExpectType FixedLengthArrayType<unknown, number>
ArrayType(typeLike, number);
// $ExpectType FixedLengthArrayType<unknown, 1>
ArrayType(typeLike, 1);

// $ExpectType ArrayType<unknown>
new ArrayType(typeLike);
// $ExpectType ArrayType<unknown>
new ArrayType(typeLike, undefined);
// $ExpectType FixedLengthArrayType<unknown, number>
new ArrayType(typeLike, number);
// $ExpectType FixedLengthArrayType<unknown, 1>
new ArrayType(typeLike, 1);

// define the "int[]" type
declare const IntArray: ref_array.ArrayType<number>;

// $ExpectType number
IntArray.BYTES_PER_ELEMENT;

// $ExpectType number | undefined
IntArray.fixedLength;

// $ExpectType Type<number>
IntArray.type;

// $ExpectType TypedArray<number, number>
IntArray.untilZeros(buffer);

// $ExpectType TypedArray<number, number>
IntArray();
// $ExpectType TypedArray<number, number>
IntArray(undefined);
// $ExpectType TypedArray<number, number>
IntArray(number);
// $ExpectType TypedArray<number, number>
IntArray(numberArray);
// $ExpectType TypedArray<number, number>
IntArray(numberArray, undefined);
// $ExpectType TypedArray<number, number>
IntArray(numberArray, number);
// $ExpectType TypedArray<number, number>
IntArray(buffer);
// $ExpectType TypedArray<number, number>
IntArray(buffer, undefined);
// $ExpectType TypedArray<number, number>
IntArray(buffer, number);
// $ExpectType TypedArray<number, 1>
IntArray([1]);

// $ExpectType TypedArray<number, number>
new IntArray();
// $ExpectType TypedArray<number, number>
new IntArray(undefined);
// $ExpectType TypedArray<number, number>
new IntArray(number);
// $ExpectType TypedArray<number, number>
new IntArray(numberArray);
// $ExpectType TypedArray<number, number>
new IntArray(numberArray, undefined);
// $ExpectType TypedArray<number, number>
new IntArray(numberArray, number);
// $ExpectType TypedArray<number, number>
new IntArray(buffer);
// $ExpectType TypedArray<number, number>
new IntArray(buffer, undefined);
// $ExpectType TypedArray<number, number>
new IntArray(buffer, number);
// $ExpectType TypedArray<number, 1>
new IntArray([1]);

declare const IntArray1: ref_array.FixedLengthArrayType<number, 1>;

// $ExpectType 1
IntArray1.fixedLength;

// $ExpectType TypedArray<number, 1>
IntArray1();

declare const ar: ref_array.TypedArray<number>;

// $ExpectType number
ar[0];

// $ExpectType number
ar.length;

// $ExpectType number[]
ar.toArray();

// $ExpectType number[]
ar.toJSON();

// $ExpectType string
ar.inspect();

// $ExpectType Buffer || Buffer<ArrayBufferLike>
ar.buffer;

// $ExpectType Buffer || Buffer<ArrayBufferLike>
ar.ref();

declare const ar1: ref_array.TypedArray<number, 1>;

// $ExpectType 1
ar1.length;
