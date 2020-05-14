import ES2015 = require('es-abstract/es2015');
import { expectType } from './index.test';

declare const any: unknown;

ES2015.Type(undefined); // $ExpectType "Undefined"
ES2015.Type(null); // $ExpectType "Null"
ES2015.Type('foo'); // $ExpectType "String"
ES2015.Type(123); // $ExpectType "Number"
ES2015.Type(true); // $ExpectType "Boolean"
ES2015.Type(false); // $ExpectType "Boolean"
ES2015.Type({}); // $ExpectType "Object"
ES2015.Type([]); // $ExpectType "Object"

// Can't use '$ExpectType' due to union type ordering weirdness:
expectType<
	| 'String'
	| 'Number'
	| 'Boolean'
	| 'Symbol' // New in ES2015
	| 'Null'
	| 'Undefined'
	| 'Object'
	| undefined
>(ES2015.Type(any));
expectType<
	| 'String'
	| 'Number'
	| 'Boolean'
	| 'Symbol' // New in ES2015
	| 'Null'
	| 'Undefined'
	| 'Object'
	| undefined
>(ES2015.Type<any>(any));

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
	const foo: string = yield 1;
	return Boolean(foo);
}

declare function iterNext<T, TReturn = any, TNext = unknown>(
	this: Iterator<T, TReturn, TNext>,
	...args: [] | [TNext]
): IteratorResult<T, TReturn>;

// $ExpectType IteratorResult<number, boolean>
ES2015.Call(iterNext, generable());

// $ExpectType IteratorResult<number, boolean>
ES2015.Invoke(generable(), 'next', any as IArguments);

ES2015.Invoke(generable(), Symbol.iterator, any as IArguments);

// $ExpectType boolean
ES2015.Invoke(Reflect, 'has', any as IArguments);

// $ExpectType Generator<number, boolean, string>
ES2015.GetIterator({ [Symbol.iterator]: generable });

// $ExpectType Generator<number, boolean, string>
ES2015.GetIterator(null, generable);

ES2015.IteratorNext(generable()); // $ExpectType IteratorResult<number, boolean>
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
