import ES2015 = require('es-abstract/es2015');
import { expectType } from './index.test';

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

ES2015.IteratorNext(generable()); // $ExpectType IteratorResult<number, void>
ES2015.IteratorNext(any as AsyncGenerator<number, void>); // $ExpectType Promise<IteratorResult<number, void>>
// $ExpectType IteratorYieldResult<number> | IteratorReturnResult<void> | Promise<IteratorResult<number, void>>
expectType<IteratorResult<number, void> | Promise<IteratorResult<number, void>>>(
	// tslint:disable-next-line: invalid-void
	ES2015.IteratorNext<number, void>(any as Generator<number, void> | AsyncGenerator<number, void>),
);

const iteratorYieldResult: IteratorYieldResult<number> = null!;
const iteratorReturnResult: IteratorReturnResult<string> = null!;
const iteratorResult = Math.random() < 0.5 ? iteratorYieldResult : iteratorReturnResult;
const iteratorNeverUnknownResult: IteratorResult<never, unknown> = iteratorResult as any;

ES2015.IteratorValue(iteratorYieldResult); // $ExpectType number
ES2015.IteratorValue(iteratorReturnResult); // $ExpectType string
ES2015.IteratorValue(iteratorResult); // $ExpectType string | number
ES2015.IteratorValue(iteratorNeverUnknownResult); // $ExpectType unknown

if (ES2015.IteratorComplete(iteratorResult)) {
	iteratorResult; // $ExpectType IteratorReturnResult<string>
} else {
	iteratorResult; // $ExpectType IteratorYieldResult<number>
}

const anyIterator = any as Iterator<unknown, unknown, unknown>;

ES2015.GetMethod(anyIterator, 'next'); // $ExpectType (...args: [] | [unknown]) => IteratorResult<unknown, unknown>
ES2015.GetMethod(anyIterator, 'throw'); // $ExpectType ((e?: any) => IteratorResult<unknown, unknown>) | undefined
ES2015.GetMethod(anyIterator, 'return'); // $ExpectType ((value?: unknown) => IteratorResult<unknown, unknown>) | undefined

// Removed in ES2015:
ES2015.CheckObjectCoercible; // $ExpectError
