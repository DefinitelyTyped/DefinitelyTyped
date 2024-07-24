import callBound = require("es-abstract/helpers/callBound");

callBound("%ArrayProto_keys%"); // $ExpectType (thisArg: unknown) => IterableIterator<number> || (thisArg: unknown) => BuiltinIterator<number, any, any>
callBound("%ArrayProto_values%"); // $ExpectType (thisArg: unknown) => IterableIterator<any> || (thisArg: unknown) => BuiltinIterator<any, any, any>
callBound("%ArrayProto_entries%"); // $ExpectType (thisArg: unknown) => IterableIterator<[number, any]> || (thisArg: unknown) => BuiltinIterator<[number, any], any, any>
callBound("%ArrayProto_forEach%"); // $ExpectType (thisArg: unknown, callbackfn: (value: any, index: number, array: any[]) => void, thisArg?: any) => void

callBound("%ObjProto_toString%"); // $ExpectType (thisArg: unknown) => string
callBound("%ObjProto_valueOf%"); // $ExpectType (thisArg: unknown) => Object

// $ExpectType (thisArg: unknown, onfulfilled?: ((value: any) => unknown) | null | undefined, onrejected?: ((reason: any) => unknown) | null | undefined) => Promise<unknown>
callBound("%PromiseProto_then%");

// Dotted intrinsic:
// $ExpectType (thisArg: unknown, v: string | number | symbol) => boolean || (thisArg: unknown, v: PropertyKey) => boolean
callBound("%Object.prototype.hasOwnProperty%");
