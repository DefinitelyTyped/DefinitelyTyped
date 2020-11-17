// Type definitions for non-npm package Node.js 14.14
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Benjamin Toueg <https://github.com/btoueg>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 David Junger <https://github.com/touffy>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Eugene Y. Q. Shen <https://github.com/eyqs>
//                 Flarna <https://github.com/Flarna>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Huw <https://github.com/hoo29>
//                 Kelvin Jin <https://github.com/kjin>
//                 Klaus Meinhardt <https://github.com/ajafff>
//                 Lishude <https://github.com/islishude>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Nicolas Even <https://github.com/n-e>
//                 Nikita Galkin <https://github.com/galkin>
//                 Parambir Singh <https://github.com/parambirs>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Thomas den Hollander <https://github.com/ThomasdenH>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Marcin Kopacz <https://github.com/chyzwar>
//                 Trivikram Kamat <https://github.com/trivikr>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 Junxiao Shi <https://github.com/yoursunny>
//                 Ilia Baryshnikov <https://github.com/qwelias>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Surasak Chaisurin <https://github.com/Ryan-Willpower>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Anna Henningsen <https://github.com/addaleax>
//                 Jason Kwok <https://github.com/JasonHK>
//                 Victor Perin <https://github.com/victorperin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference lib="es2015.symbol.wellknown" />
/// <reference lib="esnext.bigint" />

import * as buffer from 'buffer';
import { ErrnoException as ErrnoException_ } from 'node';

export {};

export interface InspectOptions extends NodeJS.InspectOptions {}

export type Style = 'special' | 'number' | 'bigint' | 'boolean' | 'undefined' | 'null' | 'string' | 'symbol' | 'date' | 'regexp' | 'module';
export type CustomInspectFunction = (depth: number, options: InspectOptionsStylized) => string;
export interface InspectOptionsStylized extends InspectOptions {
    stylize(text: string, styleType: Style): string;
}
export function format(format: any, ...param: any[]): string;
export function formatWithOptions(inspectOptions: InspectOptions, format: string, ...param: any[]): string;
/** @deprecated since v0.11.3 - use a third party module instead. */
export function log(string: string): void;
export function inspect(object: any, showHidden?: boolean, depth?: number | null, color?: boolean): string;
export function inspect(object: any, options: InspectOptions): string;
export namespace inspect {
    let colors: { [key: string]: [number, number] | undefined };
    let styles: {
        [K in Style]: string
    };
    let defaultOptions: InspectOptions;
    /**
     * Allows changing inspect settings from the repl.
     */
    let replDefaults: InspectOptions;
    const custom: unique symbol;
}
/** @deprecated since v4.0.0 - use `Array.isArray()` instead. */
export function isArray(object: any): object is any[];
/** @deprecated since v4.0.0 - use `util.types.isRegExp()` instead. */
export function isRegExp(object: any): object is RegExp;
/** @deprecated since v4.0.0 - use `util.types.isDate()` instead. */
export function isDate(object: any): object is Date;
/** @deprecated since v4.0.0 - use `util.types.isNativeError()` instead. */
export function isError(object: any): object is Error;
export function inherits(constructor: any, superConstructor: any): void;
export function debuglog(key: string): (msg: string, ...param: any[]) => void;
/** @deprecated since v4.0.0 - use `typeof value === 'boolean'` instead. */
export function isBoolean(object: any): object is boolean;
/** @deprecated since v4.0.0 - use `Buffer.isBuffer()` instead. */
export function isBuffer(object: any): object is buffer.Buffer;
/** @deprecated since v4.0.0 - use `typeof value === 'function'` instead. */
export function isFunction(object: any): boolean;
/** @deprecated since v4.0.0 - use `value === null` instead. */
export function isNull(object: any): object is null;
/** @deprecated since v4.0.0 - use `value === null || value === undefined` instead. */
export function isNullOrUndefined(object: any): object is null | undefined;
/** @deprecated since v4.0.0 - use `typeof value === 'number'` instead. */
export function isNumber(object: any): object is number;
/** @deprecated since v4.0.0 - use `value !== null && typeof value === 'object'` instead. */
export function isObject(object: any): boolean;
/** @deprecated since v4.0.0 - use `(typeof value !== 'object' && typeof value !== 'function') || value === null` instead. */
export function isPrimitive(object: any): boolean;
/** @deprecated since v4.0.0 - use `typeof value === 'string'` instead. */
export function isString(object: any): object is string;
/** @deprecated since v4.0.0 - use `typeof value === 'symbol'` instead. */
export function isSymbol(object: any): object is symbol;
/** @deprecated since v4.0.0 - use `value === undefined` instead. */
export function isUndefined(object: any): object is undefined;
export function deprecate<T extends Function>(fn: T, message: string, code?: string): T;
export function isDeepStrictEqual(val1: any, val2: any): boolean;

export function callbackify(fn: () => Promise<void>): (callback: (err: ErrnoException_) => void) => void;
export function callbackify<TResult>(fn: () => Promise<TResult>): (callback: (err: ErrnoException_, result: TResult) => void) => void;
export function callbackify<T1>(fn: (arg1: T1) => Promise<void>): (arg1: T1, callback: (err: ErrnoException_) => void) => void;
export function callbackify<T1, TResult>(fn: (arg1: T1) => Promise<TResult>): (arg1: T1, callback: (err: ErrnoException_, result: TResult) => void) => void;
export function callbackify<T1, T2>(fn: (arg1: T1, arg2: T2) => Promise<void>): (arg1: T1, arg2: T2, callback: (err: ErrnoException_) => void) => void;
export function callbackify<T1, T2, TResult>(fn: (arg1: T1, arg2: T2) => Promise<TResult>): (arg1: T1, arg2: T2, callback: (err: ErrnoException_ | null, result: TResult) => void) => void;
export function callbackify<T1, T2, T3>(fn: (arg1: T1, arg2: T2, arg3: T3) => Promise<void>): (arg1: T1, arg2: T2, arg3: T3, callback: (err: ErrnoException_) => void) => void;
export function callbackify<T1, T2, T3, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3) => Promise<TResult>): (arg1: T1, arg2: T2, arg3: T3, callback: (err: ErrnoException_ | null, result: TResult) => void) => void;
export function callbackify<T1, T2, T3, T4>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<void>): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: ErrnoException_) => void) => void;
export function callbackify<T1, T2, T3, T4, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<TResult>): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: ErrnoException_ | null, result: TResult) => void) => void;
export function callbackify<T1, T2, T3, T4, T5>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<void>): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: ErrnoException_) => void) => void;
export function callbackify<T1, T2, T3, T4, T5, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<TResult>,
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: ErrnoException_ | null, result: TResult) => void) => void;
export function callbackify<T1, T2, T3, T4, T5, T6>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<void>,
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callback: (err: ErrnoException_) => void) => void;
export function callbackify<T1, T2, T3, T4, T5, T6, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<TResult>
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callback: (err: ErrnoException_ | null, result: TResult) => void) => void;

export interface CustomPromisifyLegacy<TCustom extends Function> extends Function {
    __promisify__: TCustom;
}

export interface CustomPromisifySymbol<TCustom extends Function> extends Function {
    [promisify.custom]: TCustom;
}

export type CustomPromisify<TCustom extends Function> = CustomPromisifySymbol<TCustom> | CustomPromisifyLegacy<TCustom>;

export function promisify<TCustom extends Function>(fn: CustomPromisify<TCustom>): TCustom;
export function promisify<TResult>(fn: (callback: (err: any, result: TResult) => void) => void): () => Promise<TResult>;
export function promisify(fn: (callback: (err?: any) => void) => void): () => Promise<void>;
export function promisify<T1, TResult>(fn: (arg1: T1, callback: (err: any, result: TResult) => void) => void): (arg1: T1) => Promise<TResult>;
export function promisify<T1>(fn: (arg1: T1, callback: (err?: any) => void) => void): (arg1: T1) => Promise<void>;
export function promisify<T1, T2, TResult>(fn: (arg1: T1, arg2: T2, callback: (err: any, result: TResult) => void) => void): (arg1: T1, arg2: T2) => Promise<TResult>;
export function promisify<T1, T2>(fn: (arg1: T1, arg2: T2, callback: (err?: any) => void) => void): (arg1: T1, arg2: T2) => Promise<void>;
export function promisify<T1, T2, T3, TResult>(fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err: any, result: TResult) => void) => void):
    (arg1: T1, arg2: T2, arg3: T3) => Promise<TResult>;
export function promisify<T1, T2, T3>(fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err?: any) => void) => void): (arg1: T1, arg2: T2, arg3: T3) => Promise<void>;
export function promisify<T1, T2, T3, T4, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: any, result: TResult) => void) => void,
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<TResult>;
export function promisify<T1, T2, T3, T4>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err?: any) => void) => void):
    (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<void>;
export function promisify<T1, T2, T3, T4, T5, TResult>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: any, result: TResult) => void) => void,
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<TResult>;
export function promisify<T1, T2, T3, T4, T5>(
    fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err?: any) => void) => void,
): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<void>;
export function promisify(fn: Function): Function;
export namespace promisify {
    const custom: unique symbol;
}

export namespace types {
    function isAnyArrayBuffer(object: any): boolean;
    function isArgumentsObject(object: any): object is IArguments;
    function isArrayBuffer(object: any): object is ArrayBuffer;
    function isArrayBufferView(object: any): object is ArrayBufferView;
    function isAsyncFunction(object: any): boolean;
    function isBigInt64Array(value: any): value is BigInt64Array;
    function isBigUint64Array(value: any): value is BigUint64Array;
    function isBooleanObject(object: any): object is Boolean;
    function isBoxedPrimitive(object: any): object is (Number | Boolean | String | Symbol /* | Object(BigInt) | Object(Symbol) */);
    function isDataView(object: any): object is DataView;
    function isDate(object: any): object is Date;
    function isExternal(object: any): boolean;
    function isFloat32Array(object: any): object is Float32Array;
    function isFloat64Array(object: any): object is Float64Array;
    function isGeneratorFunction(object: any): boolean;
    function isGeneratorObject(object: any): boolean;
    function isInt8Array(object: any): object is Int8Array;
    function isInt16Array(object: any): object is Int16Array;
    function isInt32Array(object: any): object is Int32Array;
    function isMap(object: any): boolean;
    function isMapIterator(object: any): boolean;
    function isModuleNamespaceObject(value: any): boolean;
    function isNativeError(object: any): object is Error;
    function isNumberObject(object: any): object is Number;
    function isPromise(object: any): boolean;
    function isProxy(object: any): boolean;
    function isRegExp(object: any): object is RegExp;
    function isSet(object: any): boolean;
    function isSetIterator(object: any): boolean;
    function isSharedArrayBuffer(object: any): boolean;
    function isStringObject(object: any): boolean;
    function isSymbolObject(object: any): boolean;
    function isTypedArray(object: any): object is NodeJS.TypedArray;
    function isUint8Array(object: any): object is Uint8Array;
    function isUint8ClampedArray(object: any): object is Uint8ClampedArray;
    function isUint16Array(object: any): object is Uint16Array;
    function isUint32Array(object: any): object is Uint32Array;
    function isWeakMap(object: any): boolean;
    function isWeakSet(object: any): boolean;
    function isWebAssemblyCompiledModule(object: any): boolean;
}

export class TextDecoder {
    readonly encoding: string;
    readonly fatal: boolean;
    readonly ignoreBOM: boolean;
    constructor(
      encoding?: string,
      options?: { fatal?: boolean; ignoreBOM?: boolean }
    );
    decode(
      input?: ArrayBufferView | ArrayBuffer | null,
      options?: { stream?: boolean }
    ): string;
}

export interface EncodeIntoResult {
    /**
     * The read Unicode code units of input.
     */

    read: number;
    /**
     * The written UTF-8 bytes of output.
     */
    written: number;
}

export class TextEncoder {
    readonly encoding: string;
    encode(input?: string): Uint8Array;
    encodeInto(input: string, output: Uint8Array): EncodeIntoResult;
}

declare global {
    namespace NodeJS {
        interface InspectOptions {
            /**
             * If set to `true`, getters are going to be
             * inspected as well. If set to `'get'` only getters without setter are going
             * to be inspected. If set to `'set'` only getters having a corresponding
             * setter are going to be inspected. This might cause side effects depending on
             * the getter function.
             * @default `false`
             */
            getters?: 'get' | 'set' | boolean;
            showHidden?: boolean;
            /**
             * @default 2
             */
            depth?: number | null;
            colors?: boolean;
            customInspect?: boolean;
            showProxy?: boolean;
            maxArrayLength?: number | null;
            /**
             * Specifies the maximum number of characters to
             * include when formatting. Set to `null` or `Infinity` to show all elements.
             * Set to `0` or negative to show no characters.
             * @default Infinity
             */
            maxStringLength?: number | null;
            breakLength?: number;
            /**
             * Setting this to `false` causes each object key
             * to be displayed on a new line. It will also add new lines to text that is
             * longer than `breakLength`. If set to a number, the most `n` inner elements
             * are united on a single line as long as all properties fit into
             * `breakLength`. Short array elements are also grouped together. Note that no
             * text will be reduced below 16 characters, no matter the `breakLength` size.
             * For more information, see the example below.
             * @default `true`
             */
            compact?: boolean | number;
            sorted?: boolean | ((a: string, b: string) => number);
        }

        type TypedArray = Uint8Array | Uint8ClampedArray | Uint16Array | Uint32Array | Int8Array | Int16Array | Int32Array | Float32Array | Float64Array;
        type ArrayBufferView = TypedArray | DataView;
    }
}
