import conversions = require('webidl-conversions');

declare const any: any;
declare const unknown: unknown;

declare const options: conversions.Options;
declare const stringOptions: conversions.StringOptions;
declare const integerOptions: conversions.IntegerOptions;
declare const bufferSourceOptions: conversions.BufferSourceOptions;

options.context; // $ExpectType string | undefined

const {
    globals, // $ExpectType Globals | undefined
} = options;

if (globals) {
    globals; // $ExpectType Globals
    globals.Number; // $ExpectType (value?: any) => number
    globals.String; // $ExpectType (value?: any) => string
    globals.TypeError; // $ExpectType new (message?: string | undefined) => TypeError
}

/**
 * The `expectType` function from https://www.npmjs.com/package/tsd,
 * except instead of returning `void`, it returns `T`.
 */
declare function expectType<T>(value: T): T;

conversions.any(any); // $ExpectType any
conversions.any(unknown); // $ExpectType unknown
conversions.any(options); // $ExpectType Options
conversions.any(RegExp); // $ExpectType RegExpConstructor
conversions.any(Symbol.toStringTag); // $ExpectType symbol

conversions.void(); // $ExpectType void
conversions.boolean(any, integerOptions); // $ExpectType boolean

conversions.byte(any, integerOptions); // $ExpectType number
conversions.octet(any, integerOptions); // $ExpectType number

conversions.short(any, integerOptions); // $ExpectType number
conversions['unsigned short'](any, integerOptions); // $ExpectType number

conversions.long(any, integerOptions); // $ExpectType number
conversions['unsigned long'](any, integerOptions); // $ExpectType number

conversions['long long'](any, integerOptions); // $ExpectType number
conversions['unsigned long long'](any, integerOptions); // $ExpectType number

conversions.double(any, integerOptions); // $ExpectType number
conversions['unrestricted double'](any, integerOptions); // $ExpectType number

conversions.float(any, integerOptions); // $ExpectType number
conversions['unrestricted float'](any, integerOptions); // $ExpectType number

conversions.DOMString(any, stringOptions); // $ExpectType string
conversions.ByteString(any, stringOptions); // $ExpectType string
conversions.USVString(any, stringOptions); // $ExpectType string

conversions.object(any, options); // $ExpectType any
conversions.object(unknown, options); // $ExpectType object
expectType<null & object>(conversions.object(null, options));
expectType<string & object>(conversions.object('string', options));
expectType<number & object>(conversions.object(123, options));
conversions.object({}, options); // $ExpectType {}

conversions.ArrayBuffer(any, options); // $ExpectType ArrayBuffer
expectType<ArrayBufferLike>(conversions.ArrayBuffer(any, { allowShared: true }));
expectType<ArrayBufferLike>(conversions.ArrayBuffer(any, bufferSourceOptions));

conversions.DataView(any, bufferSourceOptions); // $ExpectType DataView

conversions.Int8Array(any, bufferSourceOptions); // $ExpectType Int8Array
conversions.Int16Array(any, bufferSourceOptions); // $ExpectType Int16Array
conversions.Int32Array(any, bufferSourceOptions); // $ExpectType Int32Array

conversions.Uint8Array(any, bufferSourceOptions); // $ExpectType Uint8Array
conversions.Uint16Array(any, bufferSourceOptions); // $ExpectType Uint16Array
conversions.Uint32Array(any, bufferSourceOptions); // $ExpectType Uint32Array
conversions.Uint8ClampedArray(any, bufferSourceOptions); // $ExpectType Uint8ClampedArray

conversions.Float32Array(any, bufferSourceOptions); // $ExpectType Float32Array
conversions.Float64Array(any, bufferSourceOptions); // $ExpectType Float64Array

conversions.ArrayBufferView(any, bufferSourceOptions); // $ExpectType ArrayBufferView
conversions.BufferSource(any, options); // $ExpectType ArrayBuffer | ArrayBufferView
expectType<ArrayBufferLike | ArrayBufferView>(conversions.BufferSource(any, { allowShared: true }));
expectType<ArrayBufferLike | ArrayBufferView>(conversions.BufferSource(any, bufferSourceOptions));

conversions.DOMTimeStamp(any, options); // $ExpectType number

conversions.Function(any, options); // $ExpectType any
conversions.Function(unknown, options); // $ExpectType Function
conversions.Function((arg: any) => true, options); // $ExpectType (arg: any) => true

conversions.VoidFunction(any, options); // $ExpectType Function | ((...args: unknown[]) => void)
conversions.VoidFunction(unknown, options); // $ExpectType Function
conversions.VoidFunction((arg: any) => true, options); // $ExpectType (arg: any) => void
