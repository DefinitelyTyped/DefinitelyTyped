import ref = require("ref-napi");
import ref_array = require("ref-array-di");
const ArrayType = ref_array(ref);

declare const typeLike: string | ref.Type;
declare const buffer: Buffer;
declare const number: number;
declare const numberArray: number[];

// $ExpectType ArrayType<unknown>
ArrayType(typeLike);
// $ExpectType ArrayType<unknown>
ArrayType(typeLike, undefined);
// $ExpectType FixedLengthArrayType<unknown>
ArrayType(typeLike, number);

// $ExpectType ArrayType<unknown>
new ArrayType(typeLike);
// $ExpectType ArrayType<unknown>
new ArrayType(typeLike, undefined);
// $ExpectType FixedLengthArrayType<unknown>
new ArrayType(typeLike, number);

// define the "int[]" type
declare const IntArray: ref_array.ArrayType<number>;

// $ExpectType number
IntArray.BYTES_PER_ELEMENT;

// $ExpectType number | undefined
IntArray.fixedLength;

// $ExpectType Type
IntArray.type;

// $ExpectType TypedArray<number>
IntArray.untilZeros(buffer);

// $ExpectType TypedArray<number>
IntArray();
// $ExpectType TypedArray<number>
IntArray(undefined);
// $ExpectType TypedArray<number>
IntArray(number);
// $ExpectType TypedArray<number>
IntArray(numberArray);
// $ExpectType TypedArray<number>
IntArray(numberArray, undefined);
// $ExpectType TypedArray<number>
IntArray(numberArray, number);
// $ExpectType TypedArray<number>
IntArray(buffer);
// $ExpectType TypedArray<number>
IntArray(buffer, undefined);
// $ExpectType TypedArray<number>
IntArray(buffer, number);

// $ExpectType TypedArray<number>
new IntArray();
// $ExpectType TypedArray<number>
new IntArray(undefined);
// $ExpectType TypedArray<number>
new IntArray(number);
// $ExpectType TypedArray<number>
new IntArray(numberArray);
// $ExpectType TypedArray<number>
new IntArray(numberArray, undefined);
// $ExpectType TypedArray<number>
new IntArray(numberArray, number);
// $ExpectType TypedArray<number>
new IntArray(buffer);
// $ExpectType TypedArray<number>
new IntArray(buffer, undefined);
// $ExpectType TypedArray<number>
new IntArray(buffer, number);

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

// $ExpectType Buffer
ar.buffer;

// $ExpectType Buffer
ar.ref();
