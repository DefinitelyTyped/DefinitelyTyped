import callBound = require('es-abstract/helpers/callBound');

callBound('%ArrayProto_keys%'); // $ExpectType (thisArg: unknown) => IterableIterator<number>
callBound('%ArrayProto_values%'); // $ExpectType (thisArg: unknown) => IterableIterator<any>
callBound('%ArrayProto_entries%'); // $ExpectType (thisArg: unknown) => IterableIterator<[number, any]>
callBound('%ArrayProto_forEach%'); // $ExpectType (thisArg: unknown, callbackfn: (value: any, index: number, array: any[]) => void, thisArg?: any) => void

callBound('%ObjProto_toString%'); // $ExpectType (thisArg: unknown) => string
callBound('%ObjProto_valueOf%'); // $ExpectType (thisArg: unknown) => Object

// tslint:disable-next-line: max-line-length
callBound('%PromiseProto_then%'); // $ExpectType (thisArg: unknown, onfulfilled?: ((value: any) => unknown) | null | undefined, onrejected?: ((reason: any) => unknown) | null | undefined) => Promise<unknown>

// Dotted intrinsic:
callBound('%Object.prototype.hasOwnProperty%'); // $ExpectType (thisArg: unknown, v: string | number | symbol) => boolean
