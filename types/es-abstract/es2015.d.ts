import toPrimitive = require('es-to-primitive/es2015');

import ES5 = require('./es5');
import { Intrinsics } from './GetIntrinsic';
import { PropertyKey as ESPropertyKey } from './index';

type TSPropertyKey = PropertyKey;
type AnyFunction = (...args: any) => unknown;
type AnyConstructor = new (...args: any) => unknown;

interface ES2015 extends Omit<typeof ES5, 'CheckObjectCoercible' | 'ToPrimitive' | 'Type'> {
	Call<F extends (this: T, ...args: A) => unknown, T, A extends unknown[]>(F: F, thisArg: T, args?: A): ReturnType<F>;
	Call<F extends (...args: A) => unknown, A extends unknown[]>(F: F, thisArg: unknown, args?: A): ReturnType<F>;
	Call(F: AnyFunction, thisArg: unknown, args?: unknown[]): unknown;

	readonly ToPrimitive: typeof toPrimitive;
	ToInt16(value: unknown): number;
	ToInt8(value: unknown): number;
	ToUint8(value: unknown): number;
	ToUint8Clamp(value: unknown): number;
	ToPropertyKey(value: unknown): ESPropertyKey;
	ToLength(value: unknown): number;

	CanonicalNumericIndexString(value: unknown): number | undefined;
	readonly RequireObjectCoercible: typeof ES5.CheckObjectCoercible;

	readonly IsArray: typeof Array.isArray;
	IsConstructor(arg: unknown): arg is AnyConstructor;
	readonly IsExtensible: typeof Object.isExtensible;
	IsInteger(arg: unknown): arg is number;
	IsPropertyKey(arg: unknown): arg is ESPropertyKey;
	IsRegExp(arg: unknown): arg is RegExp;
	SameValueZero(x: unknown, y: unknown): boolean;

	GetV<O, P extends ESPropertyKey>(O: O, P: P): P extends keyof O ? O[P] : unknown;
	GetV(O: unknown, P: ESPropertyKey): unknown;

	GetMethod<O, P extends ESPropertyKey>(
		O: O,
		P: P,
	): P extends keyof O
		? (NonNullable<O[P]> extends AnyFunction ? O[P] : never)
		: AnyFunction | undefined;
	GetMethod(O: unknown, P: ESPropertyKey): AnyFunction | undefined;

	Get<O extends object, P extends ESPropertyKey>(O: O, P: P): P extends keyof O ? O[P] : unknown;
	Get(O: object, P: ESPropertyKey): unknown;

	Type(x: unknown): 'Null' | 'Undefined' | 'Object' | 'Number' | 'Boolean' | 'String' | 'Symbol' | undefined;
	SpeciesConstructor<C extends AnyConstructor = AnyConstructor>(
		O: object,
		defaultConstructor?: C,
	): AnyConstructor | C;

	CompletePropertyDescriptor<D extends ES5.PropertyDescriptor>(
		Desc: D & ThisType<any>,
	): Required<
		D extends { '[[Value]]': unknown } | { '[[Writable]]': boolean }
			? D & ES5.DataDescriptor
			: D extends { '[[Get]]': () => unknown } | { '[[Set]]': (value: unknown) => void }
			? D & ES5.AccessorDescriptor
			: D & ES5.PropertyDescriptor
	>;
	CompletePropertyDescriptor(Desc: ES5.PropertyDescriptor & ThisType<any>): Required<ES5.PropertyDescriptor>;

	Set(O: object, P: ESPropertyKey, V: unknown, Throw: true): true | never;
	Set(O: object, P: ESPropertyKey, V: unknown, Throw: boolean): boolean;

	HasOwnProperty(O: object, P: ESPropertyKey): boolean;
	HasProperty(O: object, P: ESPropertyKey): boolean;

	IsConcatSpreadable(O: object): boolean;
	Invoke<O, P extends keyof O & ESPropertyKey, AX extends unknown[]>(
		O: O,
		P: P,
		args?: AX,
	): O[P] extends (...args: AX) => infer R ? R : never;

	/**
	 * @param obj The iterable
	 * @param method The method to use to get the `Iterator`
	 */
	GetIterator<I extends Iterator<unknown>>(obj: { [Symbol.iterator](): I }): I;
	GetIterator<O, I extends Iterator<unknown>>(obj: O, method: (this: O) => I): I;

	IteratorNext<T, TReturn = unknown, TNext = undefined>(
		iterator: Iterator<T, TReturn, TNext>,
		value?: TNext,
	): IteratorResult<T, TReturn>;
	IteratorNext<T, TReturn = unknown, TNext = undefined>(
		iterator: AsyncIterator<T, TReturn, TNext>,
		value?: TNext,
	): Promise<IteratorResult<T, TReturn>>;
	IteratorNext<T, TReturn = unknown, TNext = undefined>(
		iterator: Iterator<T, TReturn, TNext> | AsyncIterator<T, TReturn, TNext>,
		value?: TNext,
	): IteratorResult<T, TReturn> | Promise<IteratorResult<T, TReturn>>;
	IteratorComplete(iterResult: IteratorResult<unknown, unknown>): iterResult is IteratorReturnResult<unknown>;
	IteratorValue<T = never, TReturn = never>(iterResult: IteratorResult<T, TReturn>): T | TReturn;
	IteratorStep<T>(iterator: Iterator<T>): IteratorYieldResult<T> | false;
	IteratorClose<T>(iterator: Iterator<unknown, unknown, unknown>, completion: () => T): T;
	CreateIterResultObject<T>(value: T, done: boolean): IteratorResult<T, T>;

	RegExpExec(R: RegExp | { exec(string: string): RegExpExecArray | null }, S: string): RegExpExecArray | null;
	ArraySpeciesCreate<T>(originalArray: T[], length: number): T[];

	CreateDataProperty(O: object, P: ESPropertyKey, V: unknown): boolean;
	CreateDataPropertyOrThrow(O: object, P: ESPropertyKey, V: unknown): boolean;

	ObjectCreate(proto: object | null, internalSlotsList?: []): object;
	AdvanceStringIndex(S: string, index: number, unicode: boolean): number;

	CreateMethodProperty(O: object, P: ESPropertyKey, V: unknown): boolean;
	DefinePropertyOrThrow(O: object, P: ESPropertyKey, desc: ES5.PropertyDescriptor & ThisType<any>): boolean;
	DeletePropertyOrThrow(O: object, P: ESPropertyKey): boolean;

	readonly EnumerableOwnNames: typeof Object.keys;

	// tslint:disable-next-line: ban-types
	thisNumberValue(value: number | Number): number;

	// tslint:disable-next-line: ban-types
	thisBooleanValue(value: boolean | Boolean): boolean;

	// tslint:disable-next-line: ban-types
	thisStringValue(value: string | String): string;
	thisTimeValue(value: Date): number;

	SetIntegrityLevel(O: object, level: 'sealed' | 'frozen'): boolean;
	TestIntegrityLevel(O: object, level: 'sealed' | 'frozen'): boolean;

	OrdinaryHasInstance(C: unknown, O: object): boolean;
	OrdinaryHasProperty(O: object, P: ESPropertyKey): boolean;

	// tslint:disable-next-line: ban-types
	InstanceofOperator(O: object, C: Function | { [Symbol.hasInstance](O: unknown): boolean }): boolean;

	IsPromise(x: unknown): x is Promise<unknown>;
	ValidateAndApplyPropertyDescriptor(
		O: undefined,
		P: unknown,
		extensible: boolean,
		Desc: ES5.PropertyDescriptor & ThisType<any>,
		current?: ES5.PropertyDescriptor & ThisType<any>,
	): boolean;
	ValidateAndApplyPropertyDescriptor(
		O: object | undefined,
		P: ESPropertyKey,
		extensible: boolean,
		Desc: ES5.PropertyDescriptor & ThisType<any>,
		current?: ES5.PropertyDescriptor & ThisType<any>,
	): boolean;
	OrdinaryDefineOwnProperty(O: object, P: ESPropertyKey, Desc: ES5.PropertyDescriptor & ThisType<any>): boolean;
	OrdinaryGetOwnProperty(O: object, P: ESPropertyKey): ES5.PropertyDescriptor | undefined;

	ArrayCreate(length: number, proto?: object | null): unknown[];
	ArraySetLength(A: unknown[], Desc: ES5.PropertyDescriptor & ThisType<any>): boolean;
	CreateHTML(string: unknown, tag: string, attribute: string, value?: unknown): string;

	GetOwnPropertyKeys(O: object, Type: 'String'): string[];
	GetOwnPropertyKeys(O: object, Type: 'Symbol'): symbol[];
	GetOwnPropertyKeys(O: object, Type: 'String' | 'Symbol'): string[] | symbol[];

	SymbolDescriptiveString(sym: symbol): string;
	GetSubstitution(matched: string, str: string, position: number, captures: string[], replacement: string): string;
	ToDateString(tv: number): string;

	CreateListFromArrayLike<T>(
		obj: ArrayLike<T>,
		types?: Array<'Undefined' | 'Null' | 'Boolean' | 'String' | 'Symbol' | 'Number' | 'Object'>,
	): T[];
	GetPrototypeFromConstructor<K extends keyof Intrinsics>(
		constructor: AnyConstructor,
		intrinsicDefaultProto: K,
	): Intrinsics[K];
	GetPrototypeFromConstructor(constructor: AnyConstructor, intrinsicDefaultProto: string): unknown;
	SetFunctionName(F: AnyFunction | AnyConstructor, name: string | symbol, prefix?: string): boolean;
}

declare namespace ES2015 {
	type PropertyKey = ESPropertyKey;

	// Re-export types from previous versions
	// - ES5:
	type GenericDescriptor = ES5.GenericDescriptor;
	type AccessorDescriptor = ES5.AccessorDescriptor;
	type DataDescriptor = ES5.DataDescriptor;
	type PropertyDescriptor = ES5.PropertyDescriptor;
}

declare const ES2015: ES2015;
export = ES2015;
