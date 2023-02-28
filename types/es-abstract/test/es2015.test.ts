import ES2015 = require('es-abstract/es2015');
import { expectType, newType } from './index.test';

declare const any: unknown;
declare const args: IArguments;

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

ES2015.ToPrimitive(any); // $ExpectType string | number | bigint | boolean | symbol | null | undefined
ES2015.ToInt16(any); // $ExpectType number
ES2015.ToInt8(any); // $ExpectType number
ES2015.ToUint8(any); // $ExpectType number
ES2015.ToUint8Clamp(any); // $ExpectType number
ES2015.ToLength(any); // $ExpectType number

ES2015.Call<bigint, readonly [], string>(Object.prototype.toString, BigInt(Number.MAX_SAFE_INTEGER), []); // $ExpectType string
ES2015.Call(Object.prototype.hasOwnProperty, [], ['length'] as const); // $ExpectType boolean
ES2015.Call(Object.prototype.hasOwnProperty, any, args as IArguments & [PropertyKey]); // $ExpectType boolean

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
ES2015.Invoke(generable(), 'next', args as IArguments & [string]);
ES2015.Invoke(generable(), Symbol.iterator, args as IArguments & []);

// $ExpectType boolean
ES2015.Invoke(Reflect, 'has', args as IArguments & [object, PropertyKey]);
ES2015.Invoke(Object as typeof Object & typeof Object.prototype, 'hasOwnProperty', ['prototype']); // $ExpectType boolean

// $ExpectType Generator<number, boolean, string>
ES2015.GetIterator({ [Symbol.iterator]: generable });

// $ExpectType Generator<number, boolean, string>
ES2015.GetIterator(null, generable);

ES2015.IteratorNext(generable()); // $ExpectType IteratorResult<number, boolean>
ES2015.IteratorNext(any as AsyncGenerator<number, void>); // $ExpectType Promise<IteratorResult<number, void>>

// $ExpectType IteratorYieldResult<number> | IteratorReturnResult<void> | Promise<IteratorResult<number, void>> || IteratorResult<number, void> | Promise<IteratorResult<number, void>>
expectType<IteratorResult<number, void> | Promise<IteratorResult<number, void>>>(
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

ES2015.Get(Object, 'prototype'); // $ExpectType Object
// @ts-expect-error
ES2015.Get(123, 'valueOf');
// @ts-expect-error
ES2015.Get(null, 'toString');

ES2015.GetV(Object, 'prototype'); // $ExpectType Object
ES2015.GetV(123, 'valueOf'); // $ExpectType () => number
// @ts-expect-error
ES2015.GetV(null, 'toString');

expectType<ES2015.PropertyDescriptor<typeof Reflect.getPrototypeOf> | undefined>(
    ES2015.OrdinaryGetOwnProperty(Reflect, 'getPrototypeOf'),
);
expectType<ES2015.PropertyDescriptor<typeof Reflect.setPrototypeOf> | undefined>(
    ES2015.OrdinaryGetOwnProperty(Reflect, 'setPrototypeOf'),
);

const completeNullishUnionDescriptor = ES2015.CompletePropertyDescriptor(
    newType<{ '[[Value]]': object | null | undefined }>(),
);
completeNullishUnionDescriptor['[[Configurable]]']; // $ExpectType boolean
completeNullishUnionDescriptor['[[Enumerable]]']; // $ExpectType boolean
completeNullishUnionDescriptor['[[Writable]]']; // $ExpectType boolean
completeNullishUnionDescriptor['[[Value]]']; // $ExpectType object | null | undefined

const completeRequiredValueDescriptor = ES2015.CompletePropertyDescriptor(newType<{ '[[Value]]': string }>());
completeRequiredValueDescriptor['[[Configurable]]']; // $ExpectType boolean
completeRequiredValueDescriptor['[[Enumerable]]']; // $ExpectType boolean
completeRequiredValueDescriptor['[[Writable]]']; // $ExpectType boolean
completeRequiredValueDescriptor['[[Value]]']; // $ExpectType string

const completeDataDescriptor = ES2015.CompletePropertyDescriptor(newType<{ '[[Value]]'?: number | undefined }>());
completeDataDescriptor['[[Configurable]]']; // $ExpectType boolean
completeDataDescriptor['[[Enumerable]]']; // $ExpectType boolean
completeDataDescriptor['[[Writable]]']; // $ExpectType boolean
completeDataDescriptor['[[Value]]']; // $ExpectType number | undefined

const completeAccessorDescriptor = ES2015.CompletePropertyDescriptor(newType<{ '[[Get]]'?: (() => symbol) | undefined }>());
completeAccessorDescriptor['[[Configurable]]']; // $ExpectType boolean
completeAccessorDescriptor['[[Enumerable]]']; // $ExpectType boolean
completeAccessorDescriptor['[[Get]]']; // $ExpectType (() => symbol) | undefined
completeAccessorDescriptor['[[Set]]']; // $ExpectType ((value: symbol) => void) | undefined

declare namespace testDefinePropertyOrThrow {
    interface Foo {
        bar: string;
    }
}

function testDefinePropertyOrThrow(foo: testDefinePropertyOrThrow.Foo) {
    ES2015.DefinePropertyOrThrow(foo, 'baz', {
        '[[Configurable]]': true,
        '[[Writable]]': true,
        '[[Value]]'() {
            this; // $ExpectType Foo
            this.bar; // $ExpectType string
        },
    });
}

declare class Foo {}

declare const Bar: {
    (): any;
    new (): object;
    readonly prototype: unknown;
};

declare const Baz: {
    (foo: number): any;
    new (bar: string): object;
    readonly prototype?: unknown | undefined;
};

// tslint:disable-next-line: ban-types
declare const Biz: { readonly prototype?: null | undefined } & Omit<Function, 'prototype'>;

ES2015.GetPrototypeFromConstructor(Foo, '%Object.prototype%'); // $ExpectType Foo
ES2015.GetPrototypeFromConstructor(Bar, '%Object.prototype%'); // $ExpectType Object
ES2015.GetPrototypeFromConstructor(Baz, '%Object.prototype%'); // $ExpectType Object
ES2015.GetPrototypeFromConstructor(Biz, '%Object.prototype%'); // $ExpectType Object

ES2015.GetPrototypeFromConstructor(Foo, 'unknown'); // $ExpectType Foo
ES2015.GetPrototypeFromConstructor(Bar, 'unknown'); // $ExpectType object
ES2015.GetPrototypeFromConstructor(Baz, 'unknown'); // $ExpectType object
ES2015.GetPrototypeFromConstructor(Biz, 'unknown'); // $ExpectType object

// Removed in ES2015:
// @ts-expect-error
ES2015.CheckObjectCoercible;
