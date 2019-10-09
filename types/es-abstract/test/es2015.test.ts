import ES2015 = require('es-abstract/es2015');

const any: unknown = undefined;

ES2015.ToPrimitive(any); // $ExpectType string | number | boolean | symbol | null | undefined
ES2015.ToInt16(any); // $ExpectType number
ES2015.ToInt8(any); // $ExpectType number
ES2015.ToUint8(any); // $ExpectType number
ES2015.ToUint8Clamp(any); // $ExpectType number
ES2015.ToLength(any); // $ExpectType number

ES2015.Call(Object.prototype.toString, BigInt(Number.MAX_SAFE_INTEGER)); // $ExpectType string

// $ExpectType IterableIterator<number>
ES2015.GetIterator([1, 2, 3]);

function* generable() {
	yield 1;
}

// $ExpectType Generator<number, void, unknown>
ES2015.GetIterator({ [Symbol.iterator]: generable });

// $ExpectType Generator<number, void, unknown>
ES2015.GetIterator(null, generable);

const iteratorYieldResult: IteratorYieldResult<number> = null!;
const iteratorReturnResult: IteratorReturnResult<string> = null!;
const iteratorResult = Math.random() < .5 ? iteratorYieldResult : iteratorReturnResult;
const iteratorNeverAnyResult: IteratorResult<never> = null!;

ES2015.IteratorValue(iteratorYieldResult); // $ExpectType number
ES2015.IteratorValue(iteratorReturnResult); // $ExpectType string
ES2015.IteratorValue(iteratorResult); // $ExpectType string | number
ES2015.IteratorValue(iteratorNeverAnyResult); // $ExpectType any

// Removed in ES2015:
ES2015.CheckObjectCoercible; // $ExpectError
