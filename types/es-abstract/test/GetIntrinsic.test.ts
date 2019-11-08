import GetIntrinsic = require('es-abstract/GetIntrinsic');

const boolean = Math.random() >= 0.5;

// allowMissing = undefined
{
	GetIntrinsic('%Array%'); // $ExpectType ArrayConstructor
	GetIntrinsic('%ArrayBuffer%'); // $ExpectType ArrayBufferConstructor
	GetIntrinsic('%ArrayBufferPrototype%'); // $ExpectType ArrayBuffer
	GetIntrinsic('%ArrayIteratorPrototype%'); // $ExpectType IterableIterator<unknown>
	GetIntrinsic('%ArrayPrototype%'); // $ExpectType any[]
	GetIntrinsic('%ArrayProto_entries%'); // $ExpectType () => IterableIterator<[number, any]>
	GetIntrinsic('%ArrayProto_forEach%'); // $ExpectType (callbackfn: (value: any, index: number, array: any[]) => void, thisArg?: any) => void
	GetIntrinsic('%ArrayProto_keys%'); // $ExpectType () => IterableIterator<number>
	GetIntrinsic('%ArrayProto_values%'); // $ExpectType () => IterableIterator<any>
	GetIntrinsic('%AsyncFromSyncIteratorPrototype%'); // $ExpectType undefined
	GetIntrinsic('%AsyncFunction%'); // $ExpectType FunctionConstructor
	GetIntrinsic('%AsyncFunctionPrototype%'); // $ExpectType Function
	GetIntrinsic('%AsyncGenerator%'); // $ExpectType AsyncGenerator<unknown, any, unknown>
	GetIntrinsic('%AsyncGeneratorFunction%'); // $ExpectType AsyncGeneratorFunctionConstructor
	GetIntrinsic('%AsyncGeneratorPrototype%'); // $ExpectType AsyncGeneratorFunction
	GetIntrinsic('%AsyncIteratorPrototype%'); // $ExpectType AsyncIterable<any>
	GetIntrinsic('%Atomics%'); // $ExpectType Atomics
	GetIntrinsic('%Boolean%'); // $ExpectType BooleanConstructor
	GetIntrinsic('%BooleanPrototype%'); // $ExpectType Boolean
	GetIntrinsic('%DataView%'); // $ExpectType DataViewConstructor
	GetIntrinsic('%DataViewPrototype%'); // $ExpectType DataView
	GetIntrinsic('%Date%'); // $ExpectType DateConstructor
	GetIntrinsic('%DatePrototype%'); // $ExpectType Date
	GetIntrinsic('%decodeURI%'); // $ExpectType (encodedURI: string) => string
	GetIntrinsic('%decodeURIComponent%'); // $ExpectType (encodedURIComponent: string) => string
	GetIntrinsic('%encodeURI%'); // $ExpectType (uri: string) => string
	GetIntrinsic('%encodeURIComponent%'); // $ExpectType (uriComponent: string | number | boolean) => string
	GetIntrinsic('%Error%'); // $ExpectType ErrorConstructor
	GetIntrinsic('%ErrorPrototype%'); // $ExpectType Error
	GetIntrinsic('%eval%'); // $ExpectType (x: string) => any
	GetIntrinsic('%EvalError%'); // $ExpectType EvalErrorConstructor
	GetIntrinsic('%EvalErrorPrototype%'); // $ExpectType EvalError
	GetIntrinsic('%Float32Array%'); // $ExpectType Float32ArrayConstructor
	GetIntrinsic('%Float32ArrayPrototype%'); // $ExpectType Float32Array
	GetIntrinsic('%Float64Array%'); // $ExpectType Float64ArrayConstructor
	GetIntrinsic('%Float64ArrayPrototype%'); // $ExpectType Float64Array
	GetIntrinsic('%Function%'); // $ExpectType FunctionConstructor
	GetIntrinsic('%FunctionPrototype%'); // $ExpectType Function
	GetIntrinsic('%Generator%'); // $ExpectType Generator<unknown, any, unknown>
	GetIntrinsic('%GeneratorFunction%'); // $ExpectType GeneratorFunctionConstructor
	GetIntrinsic('%GeneratorPrototype%'); // $ExpectType GeneratorFunction
	GetIntrinsic('%Int8Array%'); // $ExpectType Int8ArrayConstructor
	GetIntrinsic('%Int8ArrayPrototype%'); // $ExpectType Int8Array
	GetIntrinsic('%Int16Array%'); // $ExpectType Int16ArrayConstructor
	GetIntrinsic('%Int16ArrayPrototype%'); // $ExpectType Int16Array
	GetIntrinsic('%Int32Array%'); // $ExpectType Int32ArrayConstructor
	GetIntrinsic('%Int32ArrayPrototype%'); // $ExpectType Int32Array
	GetIntrinsic('%isFinite%'); // $ExpectType (number: number) => boolean
	GetIntrinsic('%isNaN%'); // $ExpectType (number: number) => boolean
	GetIntrinsic('%IteratorPrototype%'); // $ExpectType Iterable<any>
	GetIntrinsic('%JSON%'); // $ExpectType JSON
	GetIntrinsic('%JSONParse%'); // $ExpectType (text: string, reviver?: ((this: any, key: string, value: any) => any) | undefined) => any
	GetIntrinsic('%Map%'); // $ExpectType MapConstructor
	GetIntrinsic('%MapIteratorPrototype%'); // $ExpectType IterableIterator<[unknown, unknown]>
	GetIntrinsic('%MapPrototype%'); // $ExpectType Map<any, any>
	GetIntrinsic('%Math%'); // $ExpectType Math
	GetIntrinsic('%Number%'); // $ExpectType NumberConstructor
	GetIntrinsic('%NumberPrototype%'); // $ExpectType Number
	GetIntrinsic('%Object%'); // $ExpectType ObjectConstructor
	GetIntrinsic('%ObjectPrototype%'); // $ExpectType Object
	GetIntrinsic('%ObjProto_toString%'); // $ExpectType () => string
	GetIntrinsic('%ObjProto_valueOf%'); // $ExpectType () => Object
	GetIntrinsic('%parseFloat%'); // $ExpectType (string: string) => number
	GetIntrinsic('%parseInt%'); // $ExpectType (s: string, radix?: number | undefined) => number
	GetIntrinsic('%Promise%'); // $ExpectType PromiseConstructor
	GetIntrinsic('%PromisePrototype%'); // $ExpectType Promise<any>
	GetIntrinsic('%Promise_reject%'); // $ExpectType <T = never>(reason?: any) => Promise<T>
	GetIntrinsic('%Promise_resolve%'); // $ExpectType { <T>(value: T | PromiseLike<T>): Promise<T>; (): Promise<void>; }
	GetIntrinsic('%Proxy%'); // $ExpectType ProxyConstructor
	GetIntrinsic('%RangeError%'); // $ExpectType RangeErrorConstructor
	GetIntrinsic('%RangeErrorPrototype%'); // $ExpectType RangeError
	GetIntrinsic('%ReferenceError%'); // $ExpectType ReferenceErrorConstructor
	GetIntrinsic('%ReferenceErrorPrototype%'); // $ExpectType ReferenceError
	GetIntrinsic('%Reflect%'); // $ExpectType typeof Reflect
	GetIntrinsic('%RegExp%'); // $ExpectType RegExpConstructor
	GetIntrinsic('%RegExpPrototype%'); // $ExpectType RegExp
	GetIntrinsic('%Set%'); // $ExpectType SetConstructor
	GetIntrinsic('%SetIteratorPrototype%'); // $ExpectType IterableIterator<unknown>
	GetIntrinsic('%SetPrototype%'); // $ExpectType Set<any>
	GetIntrinsic('%SharedArrayBuffer%'); // $ExpectType SharedArrayBufferConstructor
	GetIntrinsic('%SharedArrayBufferPrototype%'); // $ExpectType SharedArrayBuffer
	GetIntrinsic('%String%'); // $ExpectType StringConstructor
	GetIntrinsic('%StringIteratorPrototype%'); // $ExpectType IterableIterator<string>
	GetIntrinsic('%StringPrototype%'); // $ExpectType String
	GetIntrinsic('%Symbol%'); // $ExpectType SymbolConstructor
	GetIntrinsic('%SymbolPrototype%'); // $ExpectType Symbol
	GetIntrinsic('%SyntaxError%'); // $ExpectType SyntaxErrorConstructor
	GetIntrinsic('%SyntaxErrorPrototype%'); // $ExpectType SyntaxError
	GetIntrinsic('%ThrowTypeError%'); // $ExpectType () => never
	GetIntrinsic('%TypedArray%'); // $ExpectType unknown
	GetIntrinsic('%TypedArrayPrototype%'); // $ExpectType unknown
	GetIntrinsic('%TypeError%'); // $ExpectType TypeErrorConstructor
	GetIntrinsic('%TypeErrorPrototype%'); // $ExpectType TypeError
	GetIntrinsic('%Uint8Array%'); // $ExpectType Uint8ArrayConstructor
	GetIntrinsic('%Uint8ArrayPrototype%'); // $ExpectType Uint8Array
	GetIntrinsic('%Uint8ClampedArray%'); // $ExpectType Uint8ClampedArrayConstructor
	GetIntrinsic('%Uint8ClampedArrayPrototype%'); // $ExpectType Uint8ClampedArray
	GetIntrinsic('%Uint16Array%'); // $ExpectType Uint16ArrayConstructor
	GetIntrinsic('%Uint16ArrayPrototype%'); // $ExpectType Uint16Array
	GetIntrinsic('%Uint32Array%'); // $ExpectType Uint32ArrayConstructor
	GetIntrinsic('%Uint32ArrayPrototype%'); // $ExpectType Uint32Array
	GetIntrinsic('%URIError%'); // $ExpectType URIErrorConstructor
	GetIntrinsic('%URIErrorPrototype%'); // $ExpectType URIError
	GetIntrinsic('%WeakMap%'); // $ExpectType WeakMapConstructor
	GetIntrinsic('%WeakMapPrototype%'); // $ExpectType WeakMap<object, any>
	GetIntrinsic('%WeakSet%'); // $ExpectType WeakSetConstructor
	GetIntrinsic('%WeakSetPrototype%'); // $ExpectType WeakSet<object>
	GetIntrinsic('unknown'); // $ExpectType unknown
}

// allowMissing = false
{
	GetIntrinsic('%Array%', false); // $ExpectType ArrayConstructor
	GetIntrinsic('%ArrayBuffer%', false); // $ExpectType ArrayBufferConstructor
	GetIntrinsic('%ArrayBufferPrototype%', false); // $ExpectType ArrayBuffer
	GetIntrinsic('%ArrayIteratorPrototype%', false); // $ExpectType IterableIterator<unknown>
	GetIntrinsic('%ArrayPrototype%', false); // $ExpectType any[]
	GetIntrinsic('%ArrayProto_entries%', false); // $ExpectType () => IterableIterator<[number, any]>
	GetIntrinsic('%ArrayProto_forEach%', false); // $ExpectType (callbackfn: (value: any, index: number, array: any[]) => void, thisArg?: any) => void
	GetIntrinsic('%ArrayProto_keys%', false); // $ExpectType () => IterableIterator<number>
	GetIntrinsic('%ArrayProto_values%', false); // $ExpectType () => IterableIterator<any>
	GetIntrinsic('%AsyncFromSyncIteratorPrototype%', false); // $ExpectType undefined
	GetIntrinsic('%AsyncFunction%', false); // $ExpectType FunctionConstructor
	GetIntrinsic('%AsyncFunctionPrototype%', false); // $ExpectType Function
	GetIntrinsic('%AsyncGenerator%', false); // $ExpectType AsyncGenerator<unknown, any, unknown>
	GetIntrinsic('%AsyncGeneratorFunction%', false); // $ExpectType AsyncGeneratorFunctionConstructor
	GetIntrinsic('%AsyncGeneratorPrototype%', false); // $ExpectType AsyncGeneratorFunction
	GetIntrinsic('%AsyncIteratorPrototype%', false); // $ExpectType AsyncIterable<any>
	GetIntrinsic('%Atomics%', false); // $ExpectType Atomics
	GetIntrinsic('%Boolean%', false); // $ExpectType BooleanConstructor
	GetIntrinsic('%BooleanPrototype%', false); // $ExpectType Boolean
	GetIntrinsic('%DataView%', false); // $ExpectType DataViewConstructor
	GetIntrinsic('%DataViewPrototype%', false); // $ExpectType DataView
	GetIntrinsic('%Date%', false); // $ExpectType DateConstructor
	GetIntrinsic('%DatePrototype%', false); // $ExpectType Date
	GetIntrinsic('%decodeURI%', false); // $ExpectType (encodedURI: string) => string
	GetIntrinsic('%decodeURIComponent%', false); // $ExpectType (encodedURIComponent: string) => string
	GetIntrinsic('%encodeURI%', false); // $ExpectType (uri: string) => string
	GetIntrinsic('%encodeURIComponent%', false); // $ExpectType (uriComponent: string | number | boolean) => string
	GetIntrinsic('%Error%', false); // $ExpectType ErrorConstructor
	GetIntrinsic('%ErrorPrototype%', false); // $ExpectType Error
	GetIntrinsic('%eval%', false); // $ExpectType (x: string) => any
	GetIntrinsic('%EvalError%', false); // $ExpectType EvalErrorConstructor
	GetIntrinsic('%EvalErrorPrototype%', false); // $ExpectType EvalError
	GetIntrinsic('%Float32Array%', false); // $ExpectType Float32ArrayConstructor
	GetIntrinsic('%Float32ArrayPrototype%', false); // $ExpectType Float32Array
	GetIntrinsic('%Float64Array%', false); // $ExpectType Float64ArrayConstructor
	GetIntrinsic('%Float64ArrayPrototype%', false); // $ExpectType Float64Array
	GetIntrinsic('%Function%', false); // $ExpectType FunctionConstructor
	GetIntrinsic('%FunctionPrototype%', false); // $ExpectType Function
	GetIntrinsic('%Generator%', false); // $ExpectType Generator<unknown, any, unknown>
	GetIntrinsic('%GeneratorFunction%', false); // $ExpectType GeneratorFunctionConstructor
	GetIntrinsic('%GeneratorPrototype%', false); // $ExpectType GeneratorFunction
	GetIntrinsic('%Int8Array%', false); // $ExpectType Int8ArrayConstructor
	GetIntrinsic('%Int8ArrayPrototype%', false); // $ExpectType Int8Array
	GetIntrinsic('%Int16Array%', false); // $ExpectType Int16ArrayConstructor
	GetIntrinsic('%Int16ArrayPrototype%', false); // $ExpectType Int16Array
	GetIntrinsic('%Int32Array%', false); // $ExpectType Int32ArrayConstructor
	GetIntrinsic('%Int32ArrayPrototype%', false); // $ExpectType Int32Array
	GetIntrinsic('%isFinite%', false); // $ExpectType (number: number) => boolean
	GetIntrinsic('%isNaN%', false); // $ExpectType (number: number) => boolean
	GetIntrinsic('%IteratorPrototype%', false); // $ExpectType Iterable<any>
	GetIntrinsic('%JSON%', false); // $ExpectType JSON
	GetIntrinsic('%JSONParse%', false); // $ExpectType (text: string, reviver?: ((this: any, key: string, value: any) => any) | undefined) => any
	GetIntrinsic('%Map%', false); // $ExpectType MapConstructor
	GetIntrinsic('%MapIteratorPrototype%', false); // $ExpectType IterableIterator<[unknown, unknown]>
	GetIntrinsic('%MapPrototype%', false); // $ExpectType Map<any, any>
	GetIntrinsic('%Math%', false); // $ExpectType Math
	GetIntrinsic('%Number%', false); // $ExpectType NumberConstructor
	GetIntrinsic('%NumberPrototype%', false); // $ExpectType Number
	GetIntrinsic('%Object%', false); // $ExpectType ObjectConstructor
	GetIntrinsic('%ObjectPrototype%', false); // $ExpectType Object
	GetIntrinsic('%ObjProto_toString%', false); // $ExpectType () => string
	GetIntrinsic('%ObjProto_valueOf%', false); // $ExpectType () => Object
	GetIntrinsic('%parseFloat%', false); // $ExpectType (string: string) => number
	GetIntrinsic('%parseInt%', false); // $ExpectType (s: string, radix?: number | undefined) => number
	GetIntrinsic('%Promise%', false); // $ExpectType PromiseConstructor
	GetIntrinsic('%PromisePrototype%', false); // $ExpectType Promise<any>
	GetIntrinsic('%Promise_reject%', false); // $ExpectType <T = never>(reason?: any) => Promise<T>
	GetIntrinsic('%Promise_resolve%', false); // $ExpectType { <T>(value: T | PromiseLike<T>): Promise<T>; (): Promise<void>; }
	GetIntrinsic('%Proxy%', false); // $ExpectType ProxyConstructor
	GetIntrinsic('%RangeError%', false); // $ExpectType RangeErrorConstructor
	GetIntrinsic('%RangeErrorPrototype%', false); // $ExpectType RangeError
	GetIntrinsic('%ReferenceError%', false); // $ExpectType ReferenceErrorConstructor
	GetIntrinsic('%ReferenceErrorPrototype%', false); // $ExpectType ReferenceError
	GetIntrinsic('%Reflect%', false); // $ExpectType typeof Reflect
	GetIntrinsic('%RegExp%', false); // $ExpectType RegExpConstructor
	GetIntrinsic('%RegExpPrototype%', false); // $ExpectType RegExp
	GetIntrinsic('%Set%', false); // $ExpectType SetConstructor
	GetIntrinsic('%SetIteratorPrototype%', false); // $ExpectType IterableIterator<unknown>
	GetIntrinsic('%SetPrototype%', false); // $ExpectType Set<any>
	GetIntrinsic('%SharedArrayBuffer%', false); // $ExpectType SharedArrayBufferConstructor
	GetIntrinsic('%SharedArrayBufferPrototype%', false); // $ExpectType SharedArrayBuffer
	GetIntrinsic('%String%', false); // $ExpectType StringConstructor
	GetIntrinsic('%StringIteratorPrototype%', false); // $ExpectType IterableIterator<string>
	GetIntrinsic('%StringPrototype%', false); // $ExpectType String
	GetIntrinsic('%Symbol%', false); // $ExpectType SymbolConstructor
	GetIntrinsic('%SymbolPrototype%', false); // $ExpectType Symbol
	GetIntrinsic('%SyntaxError%', false); // $ExpectType SyntaxErrorConstructor
	GetIntrinsic('%SyntaxErrorPrototype%', false); // $ExpectType SyntaxError
	GetIntrinsic('%ThrowTypeError%', false); // $ExpectType () => never
	GetIntrinsic('%TypedArray%', false); // $ExpectType unknown
	GetIntrinsic('%TypedArrayPrototype%', false); // $ExpectType unknown
	GetIntrinsic('%TypeError%', false); // $ExpectType TypeErrorConstructor
	GetIntrinsic('%TypeErrorPrototype%', false); // $ExpectType TypeError
	GetIntrinsic('%Uint8Array%', false); // $ExpectType Uint8ArrayConstructor
	GetIntrinsic('%Uint8ArrayPrototype%', false); // $ExpectType Uint8Array
	GetIntrinsic('%Uint8ClampedArray%', false); // $ExpectType Uint8ClampedArrayConstructor
	GetIntrinsic('%Uint8ClampedArrayPrototype%', false); // $ExpectType Uint8ClampedArray
	GetIntrinsic('%Uint16Array%', false); // $ExpectType Uint16ArrayConstructor
	GetIntrinsic('%Uint16ArrayPrototype%', false); // $ExpectType Uint16Array
	GetIntrinsic('%Uint32Array%', false); // $ExpectType Uint32ArrayConstructor
	GetIntrinsic('%Uint32ArrayPrototype%', false); // $ExpectType Uint32Array
	GetIntrinsic('%URIError%', false); // $ExpectType URIErrorConstructor
	GetIntrinsic('%URIErrorPrototype%', false); // $ExpectType URIError
	GetIntrinsic('%WeakMap%', false); // $ExpectType WeakMapConstructor
	GetIntrinsic('%WeakMapPrototype%', false); // $ExpectType WeakMap<object, any>
	GetIntrinsic('%WeakSet%', false); // $ExpectType WeakSetConstructor
	GetIntrinsic('%WeakSetPrototype%', false); // $ExpectType WeakSet<object>
	GetIntrinsic('unknown', false); // $ExpectType unknown
}

// allowMissing = true
{
	GetIntrinsic('%Array%', true); // $ExpectType ArrayConstructor | undefined
	GetIntrinsic('%ArrayBuffer%', true); // $ExpectType ArrayBufferConstructor | undefined
	GetIntrinsic('%ArrayBufferPrototype%', true); // $ExpectType ArrayBuffer | undefined
	GetIntrinsic('%ArrayIteratorPrototype%', true); // $ExpectType IterableIterator<unknown> | undefined
	GetIntrinsic('%ArrayPrototype%', true); // $ExpectType any[] | undefined
	GetIntrinsic('%ArrayProto_entries%', true); // $ExpectType (() => IterableIterator<[number, any]>) | undefined
	GetIntrinsic('%ArrayProto_forEach%', true); // $ExpectType ((callbackfn: (value: any, index: number, array: any[]) => void, thisArg?: any) => void) | undefined
	GetIntrinsic('%ArrayProto_keys%', true); // $ExpectType (() => IterableIterator<number>) | undefined
	GetIntrinsic('%ArrayProto_values%', true); // $ExpectType (() => IterableIterator<any>) | undefined
	GetIntrinsic('%AsyncFromSyncIteratorPrototype%', true); // $ExpectType undefined
	GetIntrinsic('%AsyncFunction%', true); // $ExpectType FunctionConstructor | undefined
	GetIntrinsic('%AsyncFunctionPrototype%', true); // $ExpectType Function | undefined
	GetIntrinsic('%AsyncGenerator%', true); // $ExpectType AsyncGenerator<unknown, any, unknown> | undefined
	GetIntrinsic('%AsyncGeneratorFunction%', true); // $ExpectType AsyncGeneratorFunctionConstructor | undefined
	GetIntrinsic('%AsyncGeneratorPrototype%', true); // $ExpectType AsyncGeneratorFunction | undefined
	GetIntrinsic('%AsyncIteratorPrototype%', true); // $ExpectType AsyncIterable<any> | undefined
	GetIntrinsic('%Atomics%', true); // $ExpectType Atomics | undefined
	GetIntrinsic('%Boolean%', true); // $ExpectType BooleanConstructor | undefined
	GetIntrinsic('%BooleanPrototype%', true); // $ExpectType Boolean | undefined
	GetIntrinsic('%DataView%', true); // $ExpectType DataViewConstructor | undefined
	GetIntrinsic('%DataViewPrototype%', true); // $ExpectType DataView | undefined
	GetIntrinsic('%Date%', true); // $ExpectType DateConstructor | undefined
	GetIntrinsic('%DatePrototype%', true); // $ExpectType Date | undefined
	GetIntrinsic('%decodeURI%', true); // $ExpectType ((encodedURI: string) => string) | undefined
	GetIntrinsic('%decodeURIComponent%', true); // $ExpectType ((encodedURIComponent: string) => string) | undefined
	GetIntrinsic('%encodeURI%', true); // $ExpectType ((uri: string) => string) | undefined
	GetIntrinsic('%encodeURIComponent%', true); // $ExpectType ((uriComponent: string | number | boolean) => string) | undefined
	GetIntrinsic('%Error%', true); // $ExpectType ErrorConstructor | undefined
	GetIntrinsic('%ErrorPrototype%', true); // $ExpectType Error | undefined
	GetIntrinsic('%eval%', true); // $ExpectType ((x: string) => any) | undefined
	GetIntrinsic('%EvalError%', true); // $ExpectType EvalErrorConstructor | undefined
	GetIntrinsic('%EvalErrorPrototype%', true); // $ExpectType EvalError | undefined
	GetIntrinsic('%Float32Array%', true); // $ExpectType Float32ArrayConstructor | undefined
	GetIntrinsic('%Float32ArrayPrototype%', true); // $ExpectType Float32Array | undefined
	GetIntrinsic('%Float64Array%', true); // $ExpectType Float64ArrayConstructor | undefined
	GetIntrinsic('%Float64ArrayPrototype%', true); // $ExpectType Float64Array | undefined
	GetIntrinsic('%Function%', true); // $ExpectType FunctionConstructor | undefined
	GetIntrinsic('%FunctionPrototype%', true); // $ExpectType Function | undefined
	GetIntrinsic('%Generator%', true); // $ExpectType Generator<unknown, any, unknown> | undefined
	GetIntrinsic('%GeneratorFunction%', true); // $ExpectType GeneratorFunctionConstructor | undefined
	GetIntrinsic('%GeneratorPrototype%', true); // $ExpectType GeneratorFunction | undefined
	GetIntrinsic('%Int8Array%', true); // $ExpectType Int8ArrayConstructor | undefined
	GetIntrinsic('%Int8ArrayPrototype%', true); // $ExpectType Int8Array | undefined
	GetIntrinsic('%Int16Array%', true); // $ExpectType Int16ArrayConstructor | undefined
	GetIntrinsic('%Int16ArrayPrototype%', true); // $ExpectType Int16Array | undefined
	GetIntrinsic('%Int32Array%', true); // $ExpectType Int32ArrayConstructor | undefined
	GetIntrinsic('%Int32ArrayPrototype%', true); // $ExpectType Int32Array | undefined
	GetIntrinsic('%isFinite%', true); // $ExpectType ((number: number) => boolean) | undefined
	GetIntrinsic('%isNaN%', true); // $ExpectType ((number: number) => boolean) | undefined
	GetIntrinsic('%IteratorPrototype%', true); // $ExpectType Iterable<any> | undefined
	GetIntrinsic('%JSON%', true); // $ExpectType JSON | undefined
	GetIntrinsic('%JSONParse%', true); // $ExpectType ((text: string, reviver?: ((this: any, key: string, value: any) => any) | undefined) => any) | undefined
	GetIntrinsic('%Map%', true); // $ExpectType MapConstructor | undefined
	GetIntrinsic('%MapIteratorPrototype%', true); // $ExpectType IterableIterator<[unknown, unknown]> | undefined
	GetIntrinsic('%MapPrototype%', true); // $ExpectType Map<any, any> | undefined
	GetIntrinsic('%Math%', true); // $ExpectType Math | undefined
	GetIntrinsic('%Number%', true); // $ExpectType NumberConstructor | undefined
	GetIntrinsic('%NumberPrototype%', true); // $ExpectType Number | undefined
	GetIntrinsic('%Object%', true); // $ExpectType ObjectConstructor | undefined
	GetIntrinsic('%ObjectPrototype%', true); // $ExpectType Object | undefined
	GetIntrinsic('%ObjProto_toString%', true); // $ExpectType (() => string) | undefined
	GetIntrinsic('%ObjProto_valueOf%', true); // $ExpectType (() => Object) | undefined
	GetIntrinsic('%parseFloat%', true); // $ExpectType ((string: string) => number) | undefined
	GetIntrinsic('%parseInt%', true); // $ExpectType ((s: string, radix?: number | undefined) => number) | undefined
	GetIntrinsic('%Promise%', true); // $ExpectType PromiseConstructor | undefined
	GetIntrinsic('%PromisePrototype%', true); // $ExpectType Promise<any> | undefined
	GetIntrinsic('%Promise_reject%', true); // $ExpectType (<T = never>(reason?: any) => Promise<T>) | undefined
	GetIntrinsic('%Promise_resolve%', true); // $ExpectType { <T>(value: T | PromiseLike<T>): Promise<T>; (): Promise<void>; } | undefined
	GetIntrinsic('%Proxy%', true); // $ExpectType ProxyConstructor | undefined
	GetIntrinsic('%RangeError%', true); // $ExpectType RangeErrorConstructor | undefined
	GetIntrinsic('%RangeErrorPrototype%', true); // $ExpectType RangeError | undefined
	GetIntrinsic('%ReferenceError%', true); // $ExpectType ReferenceErrorConstructor | undefined
	GetIntrinsic('%ReferenceErrorPrototype%', true); // $ExpectType ReferenceError | undefined
	GetIntrinsic('%Reflect%', true); // $ExpectType typeof Reflect | undefined
	GetIntrinsic('%RegExp%', true); // $ExpectType RegExpConstructor | undefined
	GetIntrinsic('%RegExpPrototype%', true); // $ExpectType RegExp | undefined
	GetIntrinsic('%Set%', true); // $ExpectType SetConstructor | undefined
	GetIntrinsic('%SetIteratorPrototype%', true); // $ExpectType IterableIterator<unknown> | undefined
	GetIntrinsic('%SetPrototype%', true); // $ExpectType Set<any> | undefined
	GetIntrinsic('%SharedArrayBuffer%', true); // $ExpectType SharedArrayBufferConstructor | undefined
	GetIntrinsic('%SharedArrayBufferPrototype%', true); // $ExpectType SharedArrayBuffer | undefined
	GetIntrinsic('%String%', true); // $ExpectType StringConstructor | undefined
	GetIntrinsic('%StringIteratorPrototype%', true); // $ExpectType IterableIterator<string> | undefined
	GetIntrinsic('%StringPrototype%', true); // $ExpectType String | undefined
	GetIntrinsic('%Symbol%', true); // $ExpectType SymbolConstructor | undefined
	GetIntrinsic('%SymbolPrototype%', true); // $ExpectType Symbol | undefined
	GetIntrinsic('%SyntaxError%', true); // $ExpectType SyntaxErrorConstructor | undefined
	GetIntrinsic('%SyntaxErrorPrototype%', true); // $ExpectType SyntaxError | undefined
	GetIntrinsic('%ThrowTypeError%', true); // $ExpectType (() => never) | undefined
	GetIntrinsic('%TypedArray%', true); // $ExpectType unknown
	GetIntrinsic('%TypedArrayPrototype%', true); // $ExpectType unknown
	GetIntrinsic('%TypeError%', true); // $ExpectType TypeErrorConstructor | undefined
	GetIntrinsic('%TypeErrorPrototype%', true); // $ExpectType TypeError | undefined
	GetIntrinsic('%Uint8Array%', true); // $ExpectType Uint8ArrayConstructor | undefined
	GetIntrinsic('%Uint8ArrayPrototype%', true); // $ExpectType Uint8Array | undefined
	GetIntrinsic('%Uint8ClampedArray%', true); // $ExpectType Uint8ClampedArrayConstructor | undefined
	GetIntrinsic('%Uint8ClampedArrayPrototype%', true); // $ExpectType Uint8ClampedArray | undefined
	GetIntrinsic('%Uint16Array%', true); // $ExpectType Uint16ArrayConstructor | undefined
	GetIntrinsic('%Uint16ArrayPrototype%', true); // $ExpectType Uint16Array | undefined
	GetIntrinsic('%Uint32Array%', true); // $ExpectType Uint32ArrayConstructor | undefined
	GetIntrinsic('%Uint32ArrayPrototype%', true); // $ExpectType Uint32Array | undefined
	GetIntrinsic('%URIError%', true); // $ExpectType URIErrorConstructor | undefined
	GetIntrinsic('%URIErrorPrototype%', true); // $ExpectType URIError | undefined
	GetIntrinsic('%WeakMap%', true); // $ExpectType WeakMapConstructor | undefined
	GetIntrinsic('%WeakMapPrototype%', true); // $ExpectType WeakMap<object, any> | undefined
	GetIntrinsic('%WeakSet%', true); // $ExpectType WeakSetConstructor | undefined
	GetIntrinsic('%WeakSetPrototype%', true); // $ExpectType WeakSet<object> | undefined
	GetIntrinsic('unknown', true); // $ExpectType unknown
}

// allowMissing = boolean
{
	GetIntrinsic('%Array%', boolean); // $ExpectType ArrayConstructor | undefined
	GetIntrinsic('%ArrayBuffer%', boolean); // $ExpectType ArrayBufferConstructor | undefined
	GetIntrinsic('%ArrayBufferPrototype%', boolean); // $ExpectType ArrayBuffer | undefined
	GetIntrinsic('%ArrayIteratorPrototype%', boolean); // $ExpectType IterableIterator<unknown> | undefined
	GetIntrinsic('%ArrayPrototype%', boolean); // $ExpectType any[] | undefined
	GetIntrinsic('%ArrayProto_entries%', boolean); // $ExpectType (() => IterableIterator<[number, any]>) | undefined
	GetIntrinsic('%ArrayProto_forEach%', boolean); // $ExpectType ((callbackfn: (value: any, index: number, array: any[]) => void, thisArg?: any) => void) | undefined
	GetIntrinsic('%ArrayProto_keys%', boolean); // $ExpectType (() => IterableIterator<number>) | undefined
	GetIntrinsic('%ArrayProto_values%', boolean); // $ExpectType (() => IterableIterator<any>) | undefined
	GetIntrinsic('%AsyncFromSyncIteratorPrototype%', boolean); // $ExpectType undefined
	GetIntrinsic('%AsyncFunction%', boolean); // $ExpectType FunctionConstructor | undefined
	GetIntrinsic('%AsyncFunctionPrototype%', boolean); // $ExpectType Function | undefined
	GetIntrinsic('%AsyncGenerator%', boolean); // $ExpectType AsyncGenerator<unknown, any, unknown> | undefined
	GetIntrinsic('%AsyncGeneratorFunction%', boolean); // $ExpectType AsyncGeneratorFunctionConstructor | undefined
	GetIntrinsic('%AsyncGeneratorPrototype%', boolean); // $ExpectType AsyncGeneratorFunction | undefined
	GetIntrinsic('%AsyncIteratorPrototype%', boolean); // $ExpectType AsyncIterable<any> | undefined
	GetIntrinsic('%Atomics%', boolean); // $ExpectType Atomics | undefined
	GetIntrinsic('%Boolean%', boolean); // $ExpectType BooleanConstructor | undefined
	GetIntrinsic('%BooleanPrototype%', boolean); // $ExpectType Boolean | undefined
	GetIntrinsic('%DataView%', boolean); // $ExpectType DataViewConstructor | undefined
	GetIntrinsic('%DataViewPrototype%', boolean); // $ExpectType DataView | undefined
	GetIntrinsic('%Date%', boolean); // $ExpectType DateConstructor | undefined
	GetIntrinsic('%DatePrototype%', boolean); // $ExpectType Date | undefined
	GetIntrinsic('%decodeURI%', boolean); // $ExpectType ((encodedURI: string) => string) | undefined
	GetIntrinsic('%decodeURIComponent%', boolean); // $ExpectType ((encodedURIComponent: string) => string) | undefined
	GetIntrinsic('%encodeURI%', boolean); // $ExpectType ((uri: string) => string) | undefined
	GetIntrinsic('%encodeURIComponent%', boolean); // $ExpectType ((uriComponent: string | number | boolean) => string) | undefined
	GetIntrinsic('%Error%', boolean); // $ExpectType ErrorConstructor | undefined
	GetIntrinsic('%ErrorPrototype%', boolean); // $ExpectType Error | undefined
	GetIntrinsic('%eval%', boolean); // $ExpectType ((x: string) => any) | undefined
	GetIntrinsic('%EvalError%', boolean); // $ExpectType EvalErrorConstructor | undefined
	GetIntrinsic('%EvalErrorPrototype%', boolean); // $ExpectType EvalError | undefined
	GetIntrinsic('%Float32Array%', boolean); // $ExpectType Float32ArrayConstructor | undefined
	GetIntrinsic('%Float32ArrayPrototype%', boolean); // $ExpectType Float32Array | undefined
	GetIntrinsic('%Float64Array%', boolean); // $ExpectType Float64ArrayConstructor | undefined
	GetIntrinsic('%Float64ArrayPrototype%', boolean); // $ExpectType Float64Array | undefined
	GetIntrinsic('%Function%', boolean); // $ExpectType FunctionConstructor | undefined
	GetIntrinsic('%FunctionPrototype%', boolean); // $ExpectType Function | undefined
	GetIntrinsic('%Generator%', boolean); // $ExpectType Generator<unknown, any, unknown> | undefined
	GetIntrinsic('%GeneratorFunction%', boolean); // $ExpectType GeneratorFunctionConstructor | undefined
	GetIntrinsic('%GeneratorPrototype%', boolean); // $ExpectType GeneratorFunction | undefined
	GetIntrinsic('%Int8Array%', boolean); // $ExpectType Int8ArrayConstructor | undefined
	GetIntrinsic('%Int8ArrayPrototype%', boolean); // $ExpectType Int8Array | undefined
	GetIntrinsic('%Int16Array%', boolean); // $ExpectType Int16ArrayConstructor | undefined
	GetIntrinsic('%Int16ArrayPrototype%', boolean); // $ExpectType Int16Array | undefined
	GetIntrinsic('%Int32Array%', boolean); // $ExpectType Int32ArrayConstructor | undefined
	GetIntrinsic('%Int32ArrayPrototype%', boolean); // $ExpectType Int32Array | undefined
	GetIntrinsic('%isFinite%', boolean); // $ExpectType ((number: number) => boolean) | undefined
	GetIntrinsic('%isNaN%', boolean); // $ExpectType ((number: number) => boolean) | undefined
	GetIntrinsic('%IteratorPrototype%', boolean); // $ExpectType Iterable<any> | undefined
	GetIntrinsic('%JSON%', boolean); // $ExpectType JSON | undefined
	GetIntrinsic('%JSONParse%', boolean); // $ExpectType ((text: string, reviver?: ((this: any, key: string, value: any) => any) | undefined) => any) | undefined
	GetIntrinsic('%Map%', boolean); // $ExpectType MapConstructor | undefined
	GetIntrinsic('%MapIteratorPrototype%', boolean); // $ExpectType IterableIterator<[unknown, unknown]> | undefined
	GetIntrinsic('%MapPrototype%', boolean); // $ExpectType Map<any, any> | undefined
	GetIntrinsic('%Math%', boolean); // $ExpectType Math | undefined
	GetIntrinsic('%Number%', boolean); // $ExpectType NumberConstructor | undefined
	GetIntrinsic('%NumberPrototype%', boolean); // $ExpectType Number | undefined
	GetIntrinsic('%Object%', boolean); // $ExpectType ObjectConstructor | undefined
	GetIntrinsic('%ObjectPrototype%', boolean); // $ExpectType Object | undefined
	GetIntrinsic('%ObjProto_toString%', boolean); // $ExpectType (() => string) | undefined
	GetIntrinsic('%ObjProto_valueOf%', boolean); // $ExpectType (() => Object) | undefined
	GetIntrinsic('%parseFloat%', boolean); // $ExpectType ((string: string) => number) | undefined
	GetIntrinsic('%parseInt%', boolean); // $ExpectType ((s: string, radix?: number | undefined) => number) | undefined
	GetIntrinsic('%Promise%', boolean); // $ExpectType PromiseConstructor | undefined
	GetIntrinsic('%PromisePrototype%', boolean); // $ExpectType Promise<any> | undefined
	GetIntrinsic('%Promise_reject%', boolean); // $ExpectType (<T = never>(reason?: any) => Promise<T>) | undefined
	GetIntrinsic('%Promise_resolve%', boolean); // $ExpectType { <T>(value: T | PromiseLike<T>): Promise<T>; (): Promise<void>; } | undefined
	GetIntrinsic('%Proxy%', boolean); // $ExpectType ProxyConstructor | undefined
	GetIntrinsic('%RangeError%', boolean); // $ExpectType RangeErrorConstructor | undefined
	GetIntrinsic('%RangeErrorPrototype%', boolean); // $ExpectType RangeError | undefined
	GetIntrinsic('%ReferenceError%', boolean); // $ExpectType ReferenceErrorConstructor | undefined
	GetIntrinsic('%ReferenceErrorPrototype%', boolean); // $ExpectType ReferenceError | undefined
	GetIntrinsic('%Reflect%', boolean); // $ExpectType typeof Reflect | undefined
	GetIntrinsic('%RegExp%', boolean); // $ExpectType RegExpConstructor | undefined
	GetIntrinsic('%RegExpPrototype%', boolean); // $ExpectType RegExp | undefined
	GetIntrinsic('%Set%', boolean); // $ExpectType SetConstructor | undefined
	GetIntrinsic('%SetIteratorPrototype%', boolean); // $ExpectType IterableIterator<unknown> | undefined
	GetIntrinsic('%SetPrototype%', boolean); // $ExpectType Set<any> | undefined
	GetIntrinsic('%SharedArrayBuffer%', boolean); // $ExpectType SharedArrayBufferConstructor | undefined
	GetIntrinsic('%SharedArrayBufferPrototype%', boolean); // $ExpectType SharedArrayBuffer | undefined
	GetIntrinsic('%String%', boolean); // $ExpectType StringConstructor | undefined
	GetIntrinsic('%StringIteratorPrototype%', boolean); // $ExpectType IterableIterator<string> | undefined
	GetIntrinsic('%StringPrototype%', boolean); // $ExpectType String | undefined
	GetIntrinsic('%Symbol%', boolean); // $ExpectType SymbolConstructor | undefined
	GetIntrinsic('%SymbolPrototype%', boolean); // $ExpectType Symbol | undefined
	GetIntrinsic('%SyntaxError%', boolean); // $ExpectType SyntaxErrorConstructor | undefined
	GetIntrinsic('%SyntaxErrorPrototype%', boolean); // $ExpectType SyntaxError | undefined
	GetIntrinsic('%ThrowTypeError%', boolean); // $ExpectType (() => never) | undefined
	GetIntrinsic('%TypedArray%', boolean); // $ExpectType unknown
	GetIntrinsic('%TypedArrayPrototype%', boolean); // $ExpectType unknown
	GetIntrinsic('%TypeError%', boolean); // $ExpectType TypeErrorConstructor | undefined
	GetIntrinsic('%TypeErrorPrototype%', boolean); // $ExpectType TypeError | undefined
	GetIntrinsic('%Uint8Array%', boolean); // $ExpectType Uint8ArrayConstructor | undefined
	GetIntrinsic('%Uint8ArrayPrototype%', boolean); // $ExpectType Uint8Array | undefined
	GetIntrinsic('%Uint8ClampedArray%', boolean); // $ExpectType Uint8ClampedArrayConstructor | undefined
	GetIntrinsic('%Uint8ClampedArrayPrototype%', boolean); // $ExpectType Uint8ClampedArray | undefined
	GetIntrinsic('%Uint16Array%', boolean); // $ExpectType Uint16ArrayConstructor | undefined
	GetIntrinsic('%Uint16ArrayPrototype%', boolean); // $ExpectType Uint16Array | undefined
	GetIntrinsic('%Uint32Array%', boolean); // $ExpectType Uint32ArrayConstructor | undefined
	GetIntrinsic('%Uint32ArrayPrototype%', boolean); // $ExpectType Uint32Array | undefined
	GetIntrinsic('%URIError%', boolean); // $ExpectType URIErrorConstructor | undefined
	GetIntrinsic('%URIErrorPrototype%', boolean); // $ExpectType URIError | undefined
	GetIntrinsic('%WeakMap%', boolean); // $ExpectType WeakMapConstructor | undefined
	GetIntrinsic('%WeakMapPrototype%', boolean); // $ExpectType WeakMap<object, any> | undefined
	GetIntrinsic('%WeakSet%', boolean); // $ExpectType WeakSetConstructor | undefined
	GetIntrinsic('%WeakSetPrototype%', boolean); // $ExpectType WeakSet<object> | undefined
	GetIntrinsic('unknown', boolean); // $ExpectType unknown
}
