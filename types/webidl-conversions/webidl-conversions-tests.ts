import conversions = require("webidl-conversions");

// test type exports
type Globals = conversions.Globals;
type Options = conversions.Options;
type IntegerOptions = conversions.IntegerOptions;
type StringOptions = conversions.StringOptions;
type BufferSourceOptions = conversions.BufferSourceOptions;
type IntegerConversion = conversions.IntegerConversion;
type StringConversion = conversions.StringConversion;
type NumberConversion = conversions.NumberConversion;

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
    globals.Number; // $ExpectType (value?: unknown) => number
    globals.String; // $ExpectType (value?: unknown) => string
    globals.TypeError; // $ExpectType new (message?: string | undefined) => TypeError
}

const globalObject = {
    String,
    Number,
    TypeError,
};
options.globals = globalObject;

/**
 * The `expectType` function from https://www.npmjs.com/package/tsd,
 * except instead of returning `void`, it returns `T`.
 */
declare function expectType<T>(value: T): T;

conversions.any(any); // $ExpectType any
conversions.any(unknown); // $ExpectType unknown
conversions.any(options); // $ExpectType Options
conversions.any(RegExp); // $ExpectType RegExpConstructor
conversions.any(Symbol.toStringTag); // $ExpectType symbol || typeof toStringTag

conversions.undefined(); // $ExpectType void
conversions.boolean(unknown, integerOptions); // $ExpectType boolean

conversions.byte(unknown, integerOptions); // $ExpectType number
conversions.octet(unknown, integerOptions); // $ExpectType number

conversions.short(unknown, integerOptions); // $ExpectType number
conversions["unsigned short"](unknown, integerOptions); // $ExpectType number

conversions.long(unknown, integerOptions); // $ExpectType number
conversions["unsigned long"](unknown, integerOptions); // $ExpectType number

conversions["long long"](unknown, integerOptions); // $ExpectType number
conversions["unsigned long long"](unknown, integerOptions); // $ExpectType number

conversions.double(unknown, integerOptions); // $ExpectType number
conversions["unrestricted double"](unknown, integerOptions); // $ExpectType number

conversions.float(unknown, integerOptions); // $ExpectType number
conversions["unrestricted float"](unknown, integerOptions); // $ExpectType number

conversions.DOMString(unknown, stringOptions); // $ExpectType string
conversions.ByteString(unknown, stringOptions); // $ExpectType string
conversions.USVString(unknown, stringOptions); // $ExpectType string

conversions.object(any, options); // $ExpectType any
conversions.object(unknown, options); // $ExpectType object
expectType<null & object>(conversions.object(null, options));
expectType<string & object>(conversions.object("string", options));
expectType<number & object>(conversions.object(123, options));
conversions.object({}, options); // $ExpectType {}

conversions.ArrayBuffer(unknown, options); // $ExpectType ArrayBuffer
expectType<ArrayBufferLike>(conversions.ArrayBuffer(unknown, { allowShared: true }));
expectType<ArrayBufferLike>(conversions.ArrayBuffer(unknown, bufferSourceOptions));

conversions.DataView(unknown, bufferSourceOptions); // $ExpectType DataView || DataView<ArrayBufferLike>

conversions.Int8Array(unknown, bufferSourceOptions); // $ExpectType Int8Array || Int8Array<ArrayBufferLike>
conversions.Int16Array(unknown, bufferSourceOptions); // $ExpectType Int16Array || Int16Array<ArrayBufferLike>
conversions.Int32Array(unknown, bufferSourceOptions); // $ExpectType Int32Array || Int32Array<ArrayBufferLike>

conversions.Uint8Array(unknown, bufferSourceOptions); // $ExpectType Uint8Array || Uint8Array<ArrayBufferLike>
conversions.Uint16Array(unknown, bufferSourceOptions); // $ExpectType Uint16Array || Uint16Array<ArrayBufferLike>
conversions.Uint32Array(unknown, bufferSourceOptions); // $ExpectType Uint32Array || Uint32Array<ArrayBufferLike>
conversions.Uint8ClampedArray(unknown, bufferSourceOptions); // $ExpectType Uint8ClampedArray || Uint8ClampedArray<ArrayBufferLike>

conversions.Float32Array(unknown, bufferSourceOptions); // $ExpectType Float32Array || Float32Array<ArrayBufferLike>
conversions.Float64Array(unknown, bufferSourceOptions); // $ExpectType Float64Array || Float64Array<ArrayBufferLike>

conversions.ArrayBufferView(unknown, bufferSourceOptions); // $ExpectType ArrayBufferView || ArrayBufferView<ArrayBufferLike>
conversions.BufferSource(unknown, options); // $ExpectType ArrayBuffer | ArrayBufferView || ArrayBuffer | ArrayBufferView<ArrayBufferLike>
expectType<ArrayBufferLike | ArrayBufferView>(conversions.BufferSource(unknown, { allowShared: true }));
expectType<ArrayBufferLike | ArrayBufferView>(conversions.BufferSource(unknown, bufferSourceOptions));

conversions.DOMTimeStamp(unknown, options); // $ExpectType number
