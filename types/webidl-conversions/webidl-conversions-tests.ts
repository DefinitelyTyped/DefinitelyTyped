import conversions = require('webidl-conversions');

const any: any = void 0;
const unknown: unknown = void 0;
// $ExpectType Options
const options: conversions.Options = ((): conversions.Options => {
	return {};
})();

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
conversions.boolean(any); // $ExpectType boolean

conversions.byte(any); // $ExpectType number
conversions.octet(any); // $ExpectType number

conversions.short(any); // $ExpectType number
conversions['unsigned short'](any); // $ExpectType number

conversions.long(any); // $ExpectType number
conversions['unsigned long'](any); // $ExpectType number

conversions['long long'](any); // $ExpectType number
conversions['unsigned long long'](any); // $ExpectType number

conversions.double(any); // $ExpectType number
conversions['unrestricted double'](any); // $ExpectType number

conversions.float(any); // $ExpectType number
conversions['unrestricted float'](any); // $ExpectType number

conversions.DOMString(any, options); // $ExpectType string
conversions.ByteString(any, options); // $ExpectType string
conversions.USVString(any, options); // $ExpectType string

conversions.object(any, options); // $ExpectType any
conversions.object(unknown, options); // $ExpectType object
expectType<null & object>(conversions.object(null, options));
expectType<string & object>(conversions.object('string', options));
expectType<number & object>(conversions.object(123, options));
conversions.object({}, options); // $ExpectType {}

conversions.ArrayBuffer(any, options); // $ExpectType ArrayBuffer
conversions.DataView(any, options); // $ExpectType DataView

conversions.Int8Array(any, options); // $ExpectType Int8Array
conversions.Int16Array(any, options); // $ExpectType Int16Array
conversions.Int32Array(any, options); // $ExpectType Int32Array

conversions.Uint8Array(any, options); // $ExpectType Uint8Array
conversions.Uint16Array(any, options); // $ExpectType Uint16Array
conversions.Uint32Array(any, options); // $ExpectType Uint32Array
conversions.Uint8ClampedArray(any, options); // $ExpectType Uint8ClampedArray

conversions.Float32Array(any, options); // $ExpectType Float32Array
conversions.Float64Array(any, options); // $ExpectType Float64Array

conversions.ArrayBufferView(any, options); // $ExpectType ArrayBufferView
conversions.BufferSource(any, options); // $ExpectType ArrayBuffer | ArrayBufferView

conversions.DOMTimeStamp(any, options); // $ExpectType number

conversions.Function(any, options); // $ExpectType any
conversions.Function(unknown, options); // $ExpectType Function
conversions.Function((arg: any) => true, options); // $ExpectType (arg: any) => true

conversions.VoidFunction(any, options); // $ExpectType Function | ((...args: unknown[]) => void)
conversions.VoidFunction(unknown, options); // $ExpectType Function
conversions.VoidFunction((arg: any) => true, options); // $ExpectType (arg: any) => void
