import toPrimitive = require('es-to-primitive/es2015');

import ES5 = require('./es5');
import { Intrinsics } from './GetIntrinsic';
import { PropertyKey as ESPropertyKey } from './index';

interface ES2015 extends Omit<typeof ES5, 'CheckObjectCoercible' | 'ToPrimitive' | 'Type'> {
    Call<T, R>(F: (this: T) => R, thisArg: T): R;
    Call<T, A extends readonly unknown[], R>(F: (this: T, ...args: A) => R, thisArg: T, args: Readonly<A>): R;

    Invoke<O extends {}, P extends ESPropertyKey>(
        O: O,
        P: P,
        args?: P extends keyof O
            ? O[P] extends (...args: infer A) => any ? Readonly<A> : ArrayLike<unknown>
            : ArrayLike<unknown>,
    ): P extends keyof O ? (O[P] extends (...args: any) => infer R ? R : never) : unknown;

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
    IsConstructor(arg: unknown): arg is new (...args: any) => any;
    readonly IsExtensible: typeof Object.isExtensible;
    IsInteger(arg: unknown): arg is number;
    IsPropertyKey(arg: unknown): arg is ESPropertyKey;
    IsRegExp(arg: unknown): arg is RegExp;
    SameValueZero(x: unknown, y: unknown): boolean;

    GetV<O, P extends ESPropertyKey>(O: O, P: P): P extends keyof O ? O[P] : any;
    GetMethod<O, P extends ESPropertyKey>(
        O: O,
        P: P,
    ): P extends keyof O // tslint:disable-next-line: ban-types
        ? NonNullable<O[P]> extends Function
            ? O[P]
            : never
        : ((...args: any) => any) | undefined;
    Get<O extends object, P extends ESPropertyKey>(O: O, P: P): P extends keyof O ? O[P] : any;

    // prettier-ignore
    Type<T>(x: T)
        : T extends string ? 'String'
        : T extends number ? 'Number'
        : T extends boolean ? 'Boolean'
        : T extends symbol ? 'Symbol'
        : T extends null ? 'Null'
        : T extends undefined ? 'Undefined'
        : T extends object ? 'Object'
        : 'String' | 'Number' | 'Boolean' | 'Symbol' | 'Null' | 'Undefined' | 'Object' | undefined;

    // tslint:disable-next-line: ban-types
    SpeciesConstructor<C extends Function = new (...args: any) => any>(
        O: object,
        defaultConstructor?: C,
    ): C | (new (...args: any) => any);

    CompletePropertyDescriptor<D extends ES5.PropertyDescriptor>(
        Desc: D & ThisType<any>,
    ): Required<
        D extends { '[[Value]]': infer T }
            ? ES5.GenericDescriptor & {
                '[[Value]]': T;
                '[[Writable]]': boolean;
            }
            : D extends { '[[Value]]'?: infer T } | { '[[Writable]]'?: boolean }
            ? ES5.GenericDescriptor & {
                '[[Value]]': T | undefined;
                '[[Writable]]': boolean;
            }
            : D extends { '[[Get]]'?: () => infer T } | { '[[Set]]'?: (value: infer T) => void }
            ? ES5.GenericDescriptor & {
                '[[Get]]': (() => T) | undefined;
                '[[Set]]': ((value: T) => void) | undefined;
            }
            : D & ES5.PropertyDescriptor
    >;
    CompletePropertyDescriptor(Desc: ES5.PropertyDescriptor & ThisType<any>): Required<ES5.PropertyDescriptor>;

    Set<O extends object, P extends ESPropertyKey>(
        O: O,
        P: P,
        V: P extends keyof O ? O[P] : unknown,
        Throw: true,
    ): true | never;
    Set<O extends object, P extends ESPropertyKey>(
        O: O,
        P: P,
        V: P extends keyof O ? O[P] : unknown,
        Throw: boolean,
    ): boolean;

    HasOwnProperty(O: object, P: ESPropertyKey): boolean;
    HasProperty(O: object, P: ESPropertyKey): boolean;

    IsConcatSpreadable(O: object): boolean;

    /**
     * @param obj The iterable
     * @param method The method to use to get the `Iterator`
     */
    GetIterator<I extends Iterator<any, any, any>>(obj: { [Symbol.iterator](): I }): I;
    GetIterator<O, I extends Iterator<any, any, any>>(obj: O, method: (this: O) => I): I;

    IteratorNext<T, TReturn = any, TNext = undefined>(
        iterator: Iterator<T, TReturn, TNext>,
        value?: TNext,
    ): IteratorResult<T, TReturn>;
    IteratorNext<T, TReturn = any, TNext = undefined>(
        iterator: AsyncIterator<T, TReturn, TNext>,
        value?: TNext,
    ): Promise<IteratorResult<T, TReturn>>;
    IteratorNext<T, TReturn = any, TNext = undefined>(
        iterator: Iterator<T, TReturn, TNext> | AsyncIterator<T, TReturn, TNext>,
        value?: TNext,
    ): IteratorResult<T, TReturn> | Promise<IteratorResult<T, TReturn>>;
    IteratorComplete(iterResult: IteratorResult<unknown, unknown>): iterResult is IteratorReturnResult<unknown>;
    IteratorValue<T = never, TReturn = never>(iterResult: IteratorResult<T, TReturn>): T | TReturn;
    IteratorStep<T>(iterator: Iterator<T>): IteratorYieldResult<T> | false;
    IteratorClose<T>(iterator: Iterator<unknown, unknown, unknown>, completion: () => T): T;
    CreateIterResultObject<T>(value: T, done: boolean): IteratorResult<T, T>;

    RegExpExec(R: RegExp | { exec(string: string): RegExpExecArray | null }, S: string): RegExpExecArray | null;
    ArraySpeciesCreate<T>(originalArray: readonly T[], length: number): T[];

    CreateDataProperty(O: object, P: ESPropertyKey, V: unknown): boolean;
    CreateDataPropertyOrThrow(O: object, P: ESPropertyKey, V: unknown): boolean;

    ObjectCreate(proto: object | null, internalSlotsList?: readonly []): any;
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
    OrdinaryGetOwnProperty<O extends object, P extends ESPropertyKey>(
        O: O,
        P: P,
    ):
        | {
            '[[Configurable]]': boolean;
            '[[Enumerable]]': boolean;
            '[[Writable]]': boolean;
            '[[Value]]': P extends keyof O ? O[P] : unknown;
        }
        | {
            '[[Configurable]]': boolean;
            '[[Enumerable]]': boolean;
            '[[Get]]': (() => P extends keyof O ? O[P] : unknown) | undefined;
            '[[Set]]': ((value: P extends keyof O ? O[P] : unknown) => void) | undefined;
        }
        | undefined;

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
        constructor: new (...args: any) => any,
        intrinsicDefaultProto: K,
    ): {} | Intrinsics[K];
    GetPrototypeFromConstructor(constructor: new (...args: any) => any, intrinsicDefaultProto: string): any;

    // tslint:disable-next-line: ban-types
    SetFunctionName(F: Function, name: string | symbol, prefix?: string): boolean;
}

declare namespace ES2015 {
    type PropertyKey = ESPropertyKey;

    // Re-export types from previous versions
    // - ES5:
    type GenericDescriptor = ES5.GenericDescriptor;
    type AccessorDescriptor<T = unknown> = ES5.AccessorDescriptor<T>;
    type DataDescriptor<T = unknown> = ES5.DataDescriptor<T>;
    type PropertyDescriptor<T = unknown> = ES5.PropertyDescriptor<T>;
}

declare const ES2015: ES2015;
export = ES2015;
