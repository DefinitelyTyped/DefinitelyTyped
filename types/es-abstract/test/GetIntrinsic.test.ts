import GetIntrinsic = require('es-abstract/GetIntrinsic');
import { expectType } from './index.test';

declare const boolean: boolean;

// allowMissing = undefined
{
    GetIntrinsic('%Array%'); // $ExpectType ArrayConstructor
    GetIntrinsic('%Array.prototype%'); // $ExpectType any[]
    expectType<typeof Array.prototype.entries>(GetIntrinsic('%Array.prototype.entries%'));
    expectType<typeof Array.prototype.forEach>(GetIntrinsic('%Array.prototype.forEach%'));
    expectType<typeof Array.prototype.keys>(GetIntrinsic('%Array.prototype.keys%'));
    expectType<typeof Array.prototype.values>(GetIntrinsic('%Array.prototype.values%'));

    GetIntrinsic('%ArrayPrototype%'); // $ExpectType any[]
    expectType<typeof Array.prototype.entries>(GetIntrinsic('%ArrayProto_entries%'));
    expectType<typeof Array.prototype.forEach>(GetIntrinsic('%ArrayProto_forEach%'));
    expectType<typeof Array.prototype.keys>(GetIntrinsic('%ArrayProto_keys%'));
    expectType<typeof Array.prototype.values>(GetIntrinsic('%ArrayProto_values%'));

    GetIntrinsic('%ArrayBuffer%'); // $ExpectType ArrayBufferConstructor
    GetIntrinsic('%ArrayBuffer.prototype%'); // $ExpectType ArrayBuffer
    GetIntrinsic('%ArrayBufferPrototype%'); // $ExpectType ArrayBuffer

    GetIntrinsic('%ArrayIteratorPrototype%'); // $ExpectType IterableIterator<any>
    GetIntrinsic('%AsyncFromSyncIteratorPrototype%'); // $ExpectType AsyncGenerator<any, any, unknown>

    GetIntrinsic('%AsyncFunction%'); // $ExpectType FunctionConstructor
    GetIntrinsic('%AsyncFunction.prototype%'); // $ExpectType Function
    GetIntrinsic('%AsyncFunctionPrototype%'); // $ExpectType Function

    GetIntrinsic('%AsyncGenerator%'); // $ExpectType AsyncGeneratorFunction
    GetIntrinsic('%AsyncGeneratorFunction%'); // $ExpectType AsyncGeneratorFunctionConstructor
    GetIntrinsic('%AsyncGeneratorPrototype%'); // $ExpectType AsyncGenerator<any, any, unknown>
    GetIntrinsic('%AsyncIteratorPrototype%'); // $ExpectType AsyncIterable<any>

    GetIntrinsic('%Atomics%'); // $ExpectType Atomics

    GetIntrinsic('%Boolean%'); // $ExpectType BooleanConstructor
    GetIntrinsic('%Boolean.prototype%'); // $ExpectType Boolean
    GetIntrinsic('%BooleanPrototype%'); // $ExpectType Boolean

    GetIntrinsic('%DataView%'); // $ExpectType DataViewConstructor
    GetIntrinsic('%DataView.prototype%'); // $ExpectType DataView
    GetIntrinsic('%DataViewPrototype%'); // $ExpectType DataView

    GetIntrinsic('%Date%'); // $ExpectType DateConstructor
    GetIntrinsic('%Date.prototype%'); // $ExpectType Date
    GetIntrinsic('%DatePrototype%'); // $ExpectType Date

    expectType<typeof decodeURI>(GetIntrinsic('%decodeURI%'));
    expectType<typeof decodeURIComponent>(GetIntrinsic('%decodeURIComponent%'));

    expectType<typeof encodeURI>(GetIntrinsic('%encodeURI%'));
    expectType<typeof encodeURIComponent>(GetIntrinsic('%encodeURIComponent%'));

    GetIntrinsic('%Error%'); // $ExpectType ErrorConstructor
    GetIntrinsic('%Error.prototype%'); // $ExpectType Error
    GetIntrinsic('%ErrorPrototype%'); // $ExpectType Error

    expectType<typeof eval>(GetIntrinsic('%eval%'));

    GetIntrinsic('%EvalError%'); // $ExpectType EvalErrorConstructor
    GetIntrinsic('%EvalError.prototype%'); // $ExpectType EvalError
    GetIntrinsic('%EvalErrorPrototype%'); // $ExpectType EvalError

    GetIntrinsic('%Float32Array%'); // $ExpectType Float32ArrayConstructor
    GetIntrinsic('%Float32Array.prototype%'); // $ExpectType Float32Array
    GetIntrinsic('%Float32ArrayPrototype%'); // $ExpectType Float32Array

    GetIntrinsic('%Float64Array%'); // $ExpectType Float64ArrayConstructor
    GetIntrinsic('%Float64Array.prototype%'); // $ExpectType Float64Array
    GetIntrinsic('%Float64ArrayPrototype%'); // $ExpectType Float64Array

    GetIntrinsic('%Function%'); // $ExpectType FunctionConstructor
    GetIntrinsic('%Function.prototype%'); // $ExpectType Function
    GetIntrinsic('%FunctionPrototype%'); // $ExpectType Function

    GetIntrinsic('%Generator%'); // $ExpectType GeneratorFunction
    GetIntrinsic('%GeneratorFunction%'); // $ExpectType GeneratorFunctionConstructor
    GetIntrinsic('%GeneratorPrototype%'); // $ExpectType Generator<any, any, unknown>
    GetIntrinsic('%IteratorPrototype%'); // $ExpectType Iterable<any>

    GetIntrinsic('%Int8Array%'); // $ExpectType Int8ArrayConstructor
    GetIntrinsic('%Int8Array.prototype%'); // $ExpectType Int8Array
    GetIntrinsic('%Int8ArrayPrototype%'); // $ExpectType Int8Array

    GetIntrinsic('%Int16Array%'); // $ExpectType Int16ArrayConstructor
    GetIntrinsic('%Int16Array.prototype%'); // $ExpectType Int16Array
    GetIntrinsic('%Int16ArrayPrototype%'); // $ExpectType Int16Array

    GetIntrinsic('%Int32Array%'); // $ExpectType Int32ArrayConstructor
    GetIntrinsic('%Int32Array.prototype%'); // $ExpectType Int32Array
    GetIntrinsic('%Int32ArrayPrototype%'); // $ExpectType Int32Array

    expectType<typeof isFinite>(GetIntrinsic('%isFinite%'));
    expectType<typeof isNaN>(GetIntrinsic('%isNaN%'));

    GetIntrinsic('%JSON%'); // $ExpectType JSON
    expectType<typeof JSON.parse>(GetIntrinsic('%JSON.parse%'));
    expectType<typeof JSON.parse>(GetIntrinsic('%JSONParse%'));
    expectType<typeof JSON.stringify>(GetIntrinsic('%JSON.stringify%'));

    GetIntrinsic('%Map%'); // $ExpectType MapConstructor
    GetIntrinsic('%Map.prototype%'); // $ExpectType Map<any, any>
    GetIntrinsic('%MapPrototype%'); // $ExpectType Map<any, any>
    GetIntrinsic('%MapIteratorPrototype%'); // $ExpectType IterableIterator<any>

    GetIntrinsic('%Math%'); // $ExpectType Math

    GetIntrinsic('%Number%'); // $ExpectType NumberConstructor
    GetIntrinsic('%Number.prototype%'); // $ExpectType Number
    GetIntrinsic('%NumberPrototype%'); // $ExpectType Number

    GetIntrinsic('%Object%'); // $ExpectType ObjectConstructor
    GetIntrinsic('%Object.prototype%'); // $ExpectType Object
    expectType<typeof Object.prototype.toString>(GetIntrinsic('%Object.prototype.toString%'));
    expectType<typeof Object.prototype.valueOf>(GetIntrinsic('%Object.prototype.valueOf%'));

    GetIntrinsic('%ObjectPrototype%'); // $ExpectType Object
    expectType<typeof Object.prototype.toString>(GetIntrinsic('%ObjProto_toString%'));
    expectType<typeof Object.prototype.valueOf>(GetIntrinsic('%ObjProto_valueOf%'));

    expectType<typeof parseFloat>(GetIntrinsic('%parseFloat%'));
    expectType<typeof parseInt>(GetIntrinsic('%parseInt%'));

    GetIntrinsic('%Promise%'); // $ExpectType PromiseConstructor
    GetIntrinsic('%Promise.prototype%'); // $ExpectType Promise<any>
    expectType<typeof Promise.reject>(GetIntrinsic('%Promise.reject%'));
    expectType<typeof Promise.resolve>(GetIntrinsic('%Promise.resolve%'));

    GetIntrinsic('%PromisePrototype%'); // $ExpectType Promise<any>
    expectType<typeof Promise.reject>(GetIntrinsic('%Promise_reject%'));
    expectType<typeof Promise.resolve>(GetIntrinsic('%Promise_resolve%'));

    GetIntrinsic('%Proxy%'); // $ExpectType ProxyConstructor

    GetIntrinsic('%RangeError%'); // $ExpectType RangeErrorConstructor
    GetIntrinsic('%RangeError.prototype%'); // $ExpectType RangeError
    GetIntrinsic('%RangeErrorPrototype%'); // $ExpectType RangeError

    GetIntrinsic('%ReferenceError%'); // $ExpectType ReferenceErrorConstructor
    GetIntrinsic('%ReferenceError.prototype%'); // $ExpectType ReferenceError
    GetIntrinsic('%ReferenceErrorPrototype%'); // $ExpectType ReferenceError

    GetIntrinsic('%Reflect%'); // $ExpectType typeof Reflect

    GetIntrinsic('%RegExp%'); // $ExpectType RegExpConstructor
    GetIntrinsic('%RegExp.prototype%'); // $ExpectType RegExp
    GetIntrinsic('%RegExpPrototype%'); // $ExpectType RegExp

    GetIntrinsic('%Set%'); // $ExpectType SetConstructor
    GetIntrinsic('%Set.prototype%'); // $ExpectType Set<any>
    GetIntrinsic('%SetPrototype%'); // $ExpectType Set<any>
    GetIntrinsic('%SetIteratorPrototype%'); // $ExpectType IterableIterator<any>

    GetIntrinsic('%SharedArrayBuffer%'); // $ExpectType SharedArrayBufferConstructor
    GetIntrinsic('%SharedArrayBuffer.prototype%'); // $ExpectType SharedArrayBuffer
    GetIntrinsic('%SharedArrayBufferPrototype%'); // $ExpectType SharedArrayBuffer

    GetIntrinsic('%String%'); // $ExpectType StringConstructor
    GetIntrinsic('%String.prototype%'); // $ExpectType String
    GetIntrinsic('%StringPrototype%'); // $ExpectType String
    GetIntrinsic('%StringIteratorPrototype%'); // $ExpectType IterableIterator<string>

    GetIntrinsic('%Symbol%'); // $ExpectType SymbolConstructor
    GetIntrinsic('%Symbol.prototype%'); // $ExpectType Symbol
    GetIntrinsic('%SymbolPrototype%'); // $ExpectType Symbol

    GetIntrinsic('%SyntaxError%'); // $ExpectType SyntaxErrorConstructor
    GetIntrinsic('%SyntaxError.prototype%'); // $ExpectType SyntaxError
    GetIntrinsic('%SyntaxErrorPrototype%'); // $ExpectType SyntaxError

    GetIntrinsic('%ThrowTypeError%'); // $ExpectType () => never

    GetIntrinsic('%TypedArray%'); // $ExpectType TypedArrayConstructor
    GetIntrinsic('%TypedArray.prototype%'); // $ExpectType TypedArrayPrototype
    GetIntrinsic('%TypedArrayPrototype%'); // $ExpectType TypedArrayPrototype

    GetIntrinsic('%TypeError%'); // $ExpectType TypeErrorConstructor
    GetIntrinsic('%TypeError.prototype%'); // $ExpectType TypeError
    GetIntrinsic('%TypeErrorPrototype%'); // $ExpectType TypeError

    GetIntrinsic('%Uint8Array%'); // $ExpectType Uint8ArrayConstructor
    GetIntrinsic('%Uint8Array.prototype%'); // $ExpectType Uint8Array
    GetIntrinsic('%Uint8ArrayPrototype%'); // $ExpectType Uint8Array

    GetIntrinsic('%Uint8ClampedArray%'); // $ExpectType Uint8ClampedArrayConstructor
    GetIntrinsic('%Uint8ClampedArray.prototype%'); // $ExpectType Uint8ClampedArray
    GetIntrinsic('%Uint8ClampedArrayPrototype%'); // $ExpectType Uint8ClampedArray

    GetIntrinsic('%Uint16Array%'); // $ExpectType Uint16ArrayConstructor
    GetIntrinsic('%Uint16Array.prototype%'); // $ExpectType Uint16Array
    GetIntrinsic('%Uint16ArrayPrototype%'); // $ExpectType Uint16Array

    GetIntrinsic('%Uint32Array%'); // $ExpectType Uint32ArrayConstructor
    GetIntrinsic('%Uint32Array.prototype%'); // $ExpectType Uint32Array
    GetIntrinsic('%Uint32ArrayPrototype%'); // $ExpectType Uint32Array

    GetIntrinsic('%URIError%'); // $ExpectType URIErrorConstructor
    GetIntrinsic('%URIError.prototype%'); // $ExpectType URIError
    GetIntrinsic('%URIErrorPrototype%'); // $ExpectType URIError

    GetIntrinsic('%WeakMap%'); // $ExpectType WeakMapConstructor
    GetIntrinsic('%WeakMap.prototype%'); // $ExpectType WeakMap<object, any>
    GetIntrinsic('%WeakMapPrototype%'); // $ExpectType WeakMap<object, any>

    GetIntrinsic('%WeakSet%'); // $ExpectType WeakSetConstructor
    GetIntrinsic('%WeakSet.prototype%'); // $ExpectType WeakSet<object>
    GetIntrinsic('%WeakSetPrototype%'); // $ExpectType WeakSet<object>

    GetIntrinsic('unknown'); // $ExpectType unknown
}

// allowMissing = false
{
    GetIntrinsic('%Array%', false); // $ExpectType ArrayConstructor
    GetIntrinsic('%Array.prototype%', false); // $ExpectType any[]
    expectType<typeof Array.prototype.entries>(GetIntrinsic('%Array.prototype.entries%', false));
    expectType<typeof Array.prototype.forEach>(GetIntrinsic('%Array.prototype.forEach%', false));
    expectType<typeof Array.prototype.keys>(GetIntrinsic('%Array.prototype.keys%', false));
    expectType<typeof Array.prototype.values>(GetIntrinsic('%Array.prototype.values%', false));

    GetIntrinsic('%ArrayPrototype%', false); // $ExpectType any[]
    expectType<typeof Array.prototype.entries>(GetIntrinsic('%ArrayProto_entries%', false));
    expectType<typeof Array.prototype.forEach>(GetIntrinsic('%ArrayProto_forEach%', false));
    expectType<typeof Array.prototype.keys>(GetIntrinsic('%ArrayProto_keys%', false));
    expectType<typeof Array.prototype.values>(GetIntrinsic('%ArrayProto_values%', false));

    GetIntrinsic('%ArrayBuffer%', false); // $ExpectType ArrayBufferConstructor
    GetIntrinsic('%ArrayBuffer.prototype%', false); // $ExpectType ArrayBuffer
    GetIntrinsic('%ArrayBufferPrototype%', false); // $ExpectType ArrayBuffer

    GetIntrinsic('%ArrayIteratorPrototype%', false); // $ExpectType IterableIterator<any>
    GetIntrinsic('%AsyncFromSyncIteratorPrototype%', false); // $ExpectType AsyncGenerator<any, any, unknown>

    GetIntrinsic('%AsyncFunction%', false); // $ExpectType FunctionConstructor
    GetIntrinsic('%AsyncFunction.prototype%', false); // $ExpectType Function
    GetIntrinsic('%AsyncFunctionPrototype%', false); // $ExpectType Function

    GetIntrinsic('%AsyncGenerator%', false); // $ExpectType AsyncGeneratorFunction
    GetIntrinsic('%AsyncGeneratorFunction%', false); // $ExpectType AsyncGeneratorFunctionConstructor
    GetIntrinsic('%AsyncGeneratorPrototype%', false); // $ExpectType AsyncGenerator<any, any, unknown>
    GetIntrinsic('%AsyncIteratorPrototype%', false); // $ExpectType AsyncIterable<any>

    GetIntrinsic('%Atomics%', false); // $ExpectType Atomics

    GetIntrinsic('%Boolean%', false); // $ExpectType BooleanConstructor
    GetIntrinsic('%Boolean.prototype%', false); // $ExpectType Boolean
    GetIntrinsic('%BooleanPrototype%', false); // $ExpectType Boolean

    GetIntrinsic('%DataView%', false); // $ExpectType DataViewConstructor
    GetIntrinsic('%DataView.prototype%', false); // $ExpectType DataView
    GetIntrinsic('%DataViewPrototype%', false); // $ExpectType DataView

    GetIntrinsic('%Date%', false); // $ExpectType DateConstructor
    GetIntrinsic('%Date.prototype%', false); // $ExpectType Date
    GetIntrinsic('%DatePrototype%', false); // $ExpectType Date

    expectType<typeof decodeURI>(GetIntrinsic('%decodeURI%', false));
    expectType<typeof decodeURIComponent>(GetIntrinsic('%decodeURIComponent%', false));

    expectType<typeof encodeURI>(GetIntrinsic('%encodeURI%', false));
    expectType<typeof encodeURIComponent>(GetIntrinsic('%encodeURIComponent%', false));

    GetIntrinsic('%Error%', false); // $ExpectType ErrorConstructor
    GetIntrinsic('%Error.prototype%', false); // $ExpectType Error
    GetIntrinsic('%ErrorPrototype%', false); // $ExpectType Error

    expectType<typeof eval>(GetIntrinsic('%eval%', false));

    GetIntrinsic('%EvalError%', false); // $ExpectType EvalErrorConstructor
    GetIntrinsic('%EvalError.prototype%', false); // $ExpectType EvalError
    GetIntrinsic('%EvalErrorPrototype%', false); // $ExpectType EvalError

    GetIntrinsic('%Float32Array%', false); // $ExpectType Float32ArrayConstructor
    GetIntrinsic('%Float32Array.prototype%', false); // $ExpectType Float32Array
    GetIntrinsic('%Float32ArrayPrototype%', false); // $ExpectType Float32Array

    GetIntrinsic('%Float64Array%', false); // $ExpectType Float64ArrayConstructor
    GetIntrinsic('%Float64Array.prototype%', false); // $ExpectType Float64Array
    GetIntrinsic('%Float64ArrayPrototype%', false); // $ExpectType Float64Array

    GetIntrinsic('%Function%', false); // $ExpectType FunctionConstructor
    GetIntrinsic('%Function.prototype%', false); // $ExpectType Function
    GetIntrinsic('%FunctionPrototype%', false); // $ExpectType Function

    GetIntrinsic('%Generator%', false); // $ExpectType GeneratorFunction
    GetIntrinsic('%GeneratorFunction%', false); // $ExpectType GeneratorFunctionConstructor
    GetIntrinsic('%GeneratorPrototype%', false); // $ExpectType Generator<any, any, unknown>
    GetIntrinsic('%IteratorPrototype%', false); // $ExpectType Iterable<any>

    GetIntrinsic('%Int8Array%', false); // $ExpectType Int8ArrayConstructor
    GetIntrinsic('%Int8Array.prototype%', false); // $ExpectType Int8Array
    GetIntrinsic('%Int8ArrayPrototype%', false); // $ExpectType Int8Array

    GetIntrinsic('%Int16Array%', false); // $ExpectType Int16ArrayConstructor
    GetIntrinsic('%Int16Array.prototype%', false); // $ExpectType Int16Array
    GetIntrinsic('%Int16ArrayPrototype%', false); // $ExpectType Int16Array

    GetIntrinsic('%Int32Array%', false); // $ExpectType Int32ArrayConstructor
    GetIntrinsic('%Int32Array.prototype%', false); // $ExpectType Int32Array
    GetIntrinsic('%Int32ArrayPrototype%', false); // $ExpectType Int32Array

    expectType<typeof isFinite>(GetIntrinsic('%isFinite%', false));
    expectType<typeof isNaN>(GetIntrinsic('%isNaN%', false));

    GetIntrinsic('%JSON%', false); // $ExpectType JSON
    expectType<typeof JSON.parse>(GetIntrinsic('%JSON.parse%', false));
    expectType<typeof JSON.parse>(GetIntrinsic('%JSONParse%', false));
    expectType<typeof JSON.stringify>(GetIntrinsic('%JSON.stringify%', false));

    GetIntrinsic('%Map%', false); // $ExpectType MapConstructor
    GetIntrinsic('%Map.prototype%', false); // $ExpectType Map<any, any>
    GetIntrinsic('%MapPrototype%', false); // $ExpectType Map<any, any>
    GetIntrinsic('%MapIteratorPrototype%', false); // $ExpectType IterableIterator<any>

    GetIntrinsic('%Math%', false); // $ExpectType Math

    GetIntrinsic('%Number%', false); // $ExpectType NumberConstructor
    GetIntrinsic('%Number.prototype%', false); // $ExpectType Number
    GetIntrinsic('%NumberPrototype%', false); // $ExpectType Number

    GetIntrinsic('%Object%', false); // $ExpectType ObjectConstructor
    GetIntrinsic('%Object.prototype%', false); // $ExpectType Object
    expectType<typeof Object.prototype.toString>(GetIntrinsic('%Object.prototype.toString%', false));
    expectType<typeof Object.prototype.valueOf>(GetIntrinsic('%Object.prototype.valueOf%', false));

    GetIntrinsic('%ObjectPrototype%', false); // $ExpectType Object
    expectType<typeof Object.prototype.toString>(GetIntrinsic('%ObjProto_toString%', false));
    expectType<typeof Object.prototype.valueOf>(GetIntrinsic('%ObjProto_valueOf%', false));

    expectType<typeof parseFloat>(GetIntrinsic('%parseFloat%', false));
    expectType<typeof parseInt>(GetIntrinsic('%parseInt%', false));

    GetIntrinsic('%Promise%', false); // $ExpectType PromiseConstructor
    GetIntrinsic('%Promise.prototype%', false); // $ExpectType Promise<any>
    expectType<typeof Promise.reject>(GetIntrinsic('%Promise.reject%', false));
    expectType<typeof Promise.resolve>(GetIntrinsic('%Promise.resolve%', false));

    GetIntrinsic('%PromisePrototype%', false); // $ExpectType Promise<any>
    expectType<typeof Promise.reject>(GetIntrinsic('%Promise_reject%', false));
    expectType<typeof Promise.resolve>(GetIntrinsic('%Promise_resolve%', false));

    GetIntrinsic('%Proxy%', false); // $ExpectType ProxyConstructor

    GetIntrinsic('%RangeError%', false); // $ExpectType RangeErrorConstructor
    GetIntrinsic('%RangeError.prototype%', false); // $ExpectType RangeError
    GetIntrinsic('%RangeErrorPrototype%', false); // $ExpectType RangeError

    GetIntrinsic('%ReferenceError%', false); // $ExpectType ReferenceErrorConstructor
    GetIntrinsic('%ReferenceError.prototype%', false); // $ExpectType ReferenceError
    GetIntrinsic('%ReferenceErrorPrototype%', false); // $ExpectType ReferenceError

    GetIntrinsic('%Reflect%', false); // $ExpectType typeof Reflect

    GetIntrinsic('%RegExp%', false); // $ExpectType RegExpConstructor
    GetIntrinsic('%RegExp.prototype%', false); // $ExpectType RegExp
    GetIntrinsic('%RegExpPrototype%', false); // $ExpectType RegExp

    GetIntrinsic('%Set%', false); // $ExpectType SetConstructor
    GetIntrinsic('%Set.prototype%', false); // $ExpectType Set<any>
    GetIntrinsic('%SetPrototype%', false); // $ExpectType Set<any>
    GetIntrinsic('%SetIteratorPrototype%', false); // $ExpectType IterableIterator<any>

    GetIntrinsic('%SharedArrayBuffer%', false); // $ExpectType SharedArrayBufferConstructor
    GetIntrinsic('%SharedArrayBuffer.prototype%', false); // $ExpectType SharedArrayBuffer
    GetIntrinsic('%SharedArrayBufferPrototype%', false); // $ExpectType SharedArrayBuffer

    GetIntrinsic('%String%', false); // $ExpectType StringConstructor
    GetIntrinsic('%String.prototype%', false); // $ExpectType String
    GetIntrinsic('%StringPrototype%', false); // $ExpectType String
    GetIntrinsic('%StringIteratorPrototype%', false); // $ExpectType IterableIterator<string>

    GetIntrinsic('%Symbol%', false); // $ExpectType SymbolConstructor
    GetIntrinsic('%Symbol.prototype%', false); // $ExpectType Symbol
    GetIntrinsic('%SymbolPrototype%', false); // $ExpectType Symbol

    GetIntrinsic('%SyntaxError%', false); // $ExpectType SyntaxErrorConstructor
    GetIntrinsic('%SyntaxError.prototype%', false); // $ExpectType SyntaxError
    GetIntrinsic('%SyntaxErrorPrototype%', false); // $ExpectType SyntaxError

    GetIntrinsic('%ThrowTypeError%', false); // $ExpectType () => never

    GetIntrinsic('%TypedArray%', false); // $ExpectType TypedArrayConstructor
    GetIntrinsic('%TypedArray.prototype%', false); // $ExpectType TypedArrayPrototype
    GetIntrinsic('%TypedArrayPrototype%', false); // $ExpectType TypedArrayPrototype

    GetIntrinsic('%TypeError%', false); // $ExpectType TypeErrorConstructor
    GetIntrinsic('%TypeError.prototype%', false); // $ExpectType TypeError
    GetIntrinsic('%TypeErrorPrototype%', false); // $ExpectType TypeError

    GetIntrinsic('%Uint8Array%', false); // $ExpectType Uint8ArrayConstructor
    GetIntrinsic('%Uint8Array.prototype%', false); // $ExpectType Uint8Array
    GetIntrinsic('%Uint8ArrayPrototype%', false); // $ExpectType Uint8Array

    GetIntrinsic('%Uint8ClampedArray%', false); // $ExpectType Uint8ClampedArrayConstructor
    GetIntrinsic('%Uint8ClampedArray.prototype%', false); // $ExpectType Uint8ClampedArray
    GetIntrinsic('%Uint8ClampedArrayPrototype%', false); // $ExpectType Uint8ClampedArray

    GetIntrinsic('%Uint16Array%', false); // $ExpectType Uint16ArrayConstructor
    GetIntrinsic('%Uint16Array.prototype%', false); // $ExpectType Uint16Array
    GetIntrinsic('%Uint16ArrayPrototype%', false); // $ExpectType Uint16Array

    GetIntrinsic('%Uint32Array%', false); // $ExpectType Uint32ArrayConstructor
    GetIntrinsic('%Uint32Array.prototype%', false); // $ExpectType Uint32Array
    GetIntrinsic('%Uint32ArrayPrototype%', false); // $ExpectType Uint32Array

    GetIntrinsic('%URIError%', false); // $ExpectType URIErrorConstructor
    GetIntrinsic('%URIError.prototype%', false); // $ExpectType URIError
    GetIntrinsic('%URIErrorPrototype%', false); // $ExpectType URIError

    GetIntrinsic('%WeakMap%', false); // $ExpectType WeakMapConstructor
    GetIntrinsic('%WeakMap.prototype%', false); // $ExpectType WeakMap<object, any>
    GetIntrinsic('%WeakMapPrototype%', false); // $ExpectType WeakMap<object, any>

    GetIntrinsic('%WeakSet%', false); // $ExpectType WeakSetConstructor
    GetIntrinsic('%WeakSet.prototype%', false); // $ExpectType WeakSet<object>
    GetIntrinsic('%WeakSetPrototype%', false); // $ExpectType WeakSet<object>

    GetIntrinsic('unknown', false); // $ExpectType unknown
}

// allowMissing = true
{
    GetIntrinsic('%Array%', true); // $ExpectType ArrayConstructor | undefined
    GetIntrinsic('%Array.prototype%', true); // $ExpectType any[] | undefined
    expectType<typeof Array.prototype.entries | undefined>(GetIntrinsic('%Array.prototype.entries%', true));
    expectType<typeof Array.prototype.forEach | undefined>(GetIntrinsic('%Array.prototype.forEach%', true));
    expectType<typeof Array.prototype.keys | undefined>(GetIntrinsic('%Array.prototype.keys%', true));
    expectType<typeof Array.prototype.values | undefined>(GetIntrinsic('%Array.prototype.values%', true));

    GetIntrinsic('%ArrayPrototype%', true); // $ExpectType any[] | undefined
    expectType<typeof Array.prototype.entries | undefined>(GetIntrinsic('%ArrayProto_entries%', true));
    expectType<typeof Array.prototype.forEach | undefined>(GetIntrinsic('%ArrayProto_forEach%', true));
    expectType<typeof Array.prototype.keys | undefined>(GetIntrinsic('%ArrayProto_keys%', true));
    expectType<typeof Array.prototype.values | undefined>(GetIntrinsic('%ArrayProto_values%', true));

    GetIntrinsic('%ArrayBuffer%', true); // $ExpectType ArrayBufferConstructor | undefined
    GetIntrinsic('%ArrayBuffer.prototype%', true); // $ExpectType ArrayBuffer | undefined
    GetIntrinsic('%ArrayBufferPrototype%', true); // $ExpectType ArrayBuffer | undefined

    GetIntrinsic('%ArrayIteratorPrototype%', true); // $ExpectType IterableIterator<any> | undefined
    GetIntrinsic('%AsyncFromSyncIteratorPrototype%', true); // $ExpectType AsyncGenerator<any, any, unknown> | undefined

    GetIntrinsic('%AsyncFunction%', true); // $ExpectType FunctionConstructor | undefined
    GetIntrinsic('%AsyncFunction.prototype%', true); // $ExpectType Function | undefined
    GetIntrinsic('%AsyncFunctionPrototype%', true); // $ExpectType Function | undefined

    GetIntrinsic('%AsyncGenerator%', true); // $ExpectType AsyncGeneratorFunction | undefined
    GetIntrinsic('%AsyncGeneratorFunction%', true); // $ExpectType AsyncGeneratorFunctionConstructor | undefined
    GetIntrinsic('%AsyncGeneratorPrototype%', true); // $ExpectType AsyncGenerator<any, any, unknown> | undefined
    GetIntrinsic('%AsyncIteratorPrototype%', true); // $ExpectType AsyncIterable<any> | undefined

    GetIntrinsic('%Atomics%', true); // $ExpectType Atomics | undefined

    GetIntrinsic('%Boolean%', true); // $ExpectType BooleanConstructor | undefined
    GetIntrinsic('%Boolean.prototype%', true); // $ExpectType Boolean | undefined
    GetIntrinsic('%BooleanPrototype%', true); // $ExpectType Boolean | undefined

    GetIntrinsic('%DataView%', true); // $ExpectType DataViewConstructor | undefined
    GetIntrinsic('%DataView.prototype%', true); // $ExpectType DataView | undefined
    GetIntrinsic('%DataViewPrototype%', true); // $ExpectType DataView | undefined

    GetIntrinsic('%Date%', true); // $ExpectType DateConstructor | undefined
    GetIntrinsic('%Date.prototype%', true); // $ExpectType Date | undefined
    GetIntrinsic('%DatePrototype%', true); // $ExpectType Date | undefined

    expectType<typeof decodeURI | undefined>(GetIntrinsic('%decodeURI%', true));
    expectType<typeof decodeURIComponent | undefined>(GetIntrinsic('%decodeURIComponent%', true));

    expectType<typeof encodeURI | undefined>(GetIntrinsic('%encodeURI%', true));
    expectType<typeof encodeURIComponent | undefined>(GetIntrinsic('%encodeURIComponent%', true));

    GetIntrinsic('%Error%', true); // $ExpectType ErrorConstructor | undefined
    GetIntrinsic('%Error.prototype%', true); // $ExpectType Error | undefined
    GetIntrinsic('%ErrorPrototype%', true); // $ExpectType Error | undefined

    expectType<typeof eval | undefined>(GetIntrinsic('%eval%', true));

    GetIntrinsic('%EvalError%', true); // $ExpectType EvalErrorConstructor | undefined
    GetIntrinsic('%EvalError.prototype%', true); // $ExpectType EvalError | undefined
    GetIntrinsic('%EvalErrorPrototype%', true); // $ExpectType EvalError | undefined

    GetIntrinsic('%Float32Array%', true); // $ExpectType Float32ArrayConstructor | undefined
    GetIntrinsic('%Float32Array.prototype%', true); // $ExpectType Float32Array | undefined
    GetIntrinsic('%Float32ArrayPrototype%', true); // $ExpectType Float32Array | undefined

    GetIntrinsic('%Float64Array%', true); // $ExpectType Float64ArrayConstructor | undefined
    GetIntrinsic('%Float64Array.prototype%', true); // $ExpectType Float64Array | undefined
    GetIntrinsic('%Float64ArrayPrototype%', true); // $ExpectType Float64Array | undefined

    GetIntrinsic('%Function%', true); // $ExpectType FunctionConstructor | undefined
    GetIntrinsic('%Function.prototype%', true); // $ExpectType Function | undefined
    GetIntrinsic('%FunctionPrototype%', true); // $ExpectType Function | undefined

    GetIntrinsic('%Generator%', true); // $ExpectType GeneratorFunction | undefined
    GetIntrinsic('%GeneratorFunction%', true); // $ExpectType GeneratorFunctionConstructor | undefined
    GetIntrinsic('%GeneratorPrototype%', true); // $ExpectType Generator<any, any, unknown> | undefined
    GetIntrinsic('%IteratorPrototype%', true); // $ExpectType Iterable<any> | undefined

    GetIntrinsic('%Int8Array%', true); // $ExpectType Int8ArrayConstructor | undefined
    GetIntrinsic('%Int8Array.prototype%', true); // $ExpectType Int8Array | undefined
    GetIntrinsic('%Int8ArrayPrototype%', true); // $ExpectType Int8Array | undefined

    GetIntrinsic('%Int16Array%', true); // $ExpectType Int16ArrayConstructor | undefined
    GetIntrinsic('%Int16Array.prototype%', true); // $ExpectType Int16Array | undefined
    GetIntrinsic('%Int16ArrayPrototype%', true); // $ExpectType Int16Array | undefined

    GetIntrinsic('%Int32Array%', true); // $ExpectType Int32ArrayConstructor | undefined
    GetIntrinsic('%Int32Array.prototype%', true); // $ExpectType Int32Array | undefined
    GetIntrinsic('%Int32ArrayPrototype%', true); // $ExpectType Int32Array | undefined

    expectType<typeof isFinite | undefined>(GetIntrinsic('%isFinite%', true));
    expectType<typeof isNaN | undefined>(GetIntrinsic('%isNaN%', true));

    GetIntrinsic('%JSON%', true); // $ExpectType JSON | undefined
    expectType<typeof JSON.parse | undefined>(GetIntrinsic('%JSON.parse%', true));
    expectType<typeof JSON.parse | undefined>(GetIntrinsic('%JSONParse%', true));
    expectType<typeof JSON.stringify | undefined>(GetIntrinsic('%JSON.stringify%', true));

    GetIntrinsic('%Map%', true); // $ExpectType MapConstructor | undefined
    GetIntrinsic('%Map.prototype%', true); // $ExpectType Map<any, any> | undefined
    GetIntrinsic('%MapPrototype%', true); // $ExpectType Map<any, any> | undefined
    GetIntrinsic('%MapIteratorPrototype%', true); // $ExpectType IterableIterator<any> | undefined

    GetIntrinsic('%Math%', true); // $ExpectType Math | undefined

    GetIntrinsic('%Number%', true); // $ExpectType NumberConstructor | undefined
    GetIntrinsic('%Number.prototype%', true); // $ExpectType Number | undefined
    GetIntrinsic('%NumberPrototype%', true); // $ExpectType Number | undefined

    GetIntrinsic('%Object%', true); // $ExpectType ObjectConstructor | undefined
    GetIntrinsic('%Object.prototype%', true); // $ExpectType Object | undefined
    expectType<typeof Object.prototype.toString | undefined>(GetIntrinsic('%Object.prototype.toString%', true));
    expectType<typeof Object.prototype.valueOf | undefined>(GetIntrinsic('%Object.prototype.valueOf%', true));

    GetIntrinsic('%ObjectPrototype%', true); // $ExpectType Object | undefined
    expectType<typeof Object.prototype.toString | undefined>(GetIntrinsic('%ObjProto_toString%', true));
    expectType<typeof Object.prototype.valueOf | undefined>(GetIntrinsic('%ObjProto_valueOf%', true));

    expectType<typeof parseFloat | undefined>(GetIntrinsic('%parseFloat%', true));
    expectType<typeof parseInt | undefined>(GetIntrinsic('%parseInt%', true));

    GetIntrinsic('%Promise%', true); // $ExpectType PromiseConstructor | undefined
    GetIntrinsic('%Promise.prototype%', true); // $ExpectType Promise<any> | undefined
    expectType<typeof Promise.reject | undefined>(GetIntrinsic('%Promise.reject%', true));
    expectType<typeof Promise.resolve | undefined>(GetIntrinsic('%Promise.resolve%', true));

    GetIntrinsic('%PromisePrototype%', true); // $ExpectType Promise<any> | undefined
    expectType<typeof Promise.reject | undefined>(GetIntrinsic('%Promise_reject%', true));
    expectType<typeof Promise.resolve | undefined>(GetIntrinsic('%Promise_resolve%', true));

    GetIntrinsic('%Proxy%', true); // $ExpectType ProxyConstructor | undefined

    GetIntrinsic('%RangeError%', true); // $ExpectType RangeErrorConstructor | undefined
    GetIntrinsic('%RangeError.prototype%', true); // $ExpectType RangeError | undefined
    GetIntrinsic('%RangeErrorPrototype%', true); // $ExpectType RangeError | undefined

    GetIntrinsic('%ReferenceError%', true); // $ExpectType ReferenceErrorConstructor | undefined
    GetIntrinsic('%ReferenceError.prototype%', true); // $ExpectType ReferenceError | undefined
    GetIntrinsic('%ReferenceErrorPrototype%', true); // $ExpectType ReferenceError | undefined

    GetIntrinsic('%Reflect%', true); // $ExpectType typeof Reflect | undefined

    GetIntrinsic('%RegExp%', true); // $ExpectType RegExpConstructor | undefined
    GetIntrinsic('%RegExp.prototype%', true); // $ExpectType RegExp | undefined
    GetIntrinsic('%RegExpPrototype%', true); // $ExpectType RegExp | undefined

    GetIntrinsic('%Set%', true); // $ExpectType SetConstructor | undefined
    GetIntrinsic('%Set.prototype%', true); // $ExpectType Set<any> | undefined
    GetIntrinsic('%SetPrototype%', true); // $ExpectType Set<any> | undefined
    GetIntrinsic('%SetIteratorPrototype%', true); // $ExpectType IterableIterator<any> | undefined

    GetIntrinsic('%SharedArrayBuffer%', true); // $ExpectType SharedArrayBufferConstructor | undefined
    GetIntrinsic('%SharedArrayBuffer.prototype%', true); // $ExpectType SharedArrayBuffer | undefined
    GetIntrinsic('%SharedArrayBufferPrototype%', true); // $ExpectType SharedArrayBuffer | undefined

    GetIntrinsic('%String%', true); // $ExpectType StringConstructor | undefined
    GetIntrinsic('%String.prototype%', true); // $ExpectType String | undefined
    GetIntrinsic('%StringPrototype%', true); // $ExpectType String | undefined
    GetIntrinsic('%StringIteratorPrototype%', true); // $ExpectType IterableIterator<string> | undefined

    GetIntrinsic('%Symbol%', true); // $ExpectType SymbolConstructor | undefined
    GetIntrinsic('%Symbol.prototype%', true); // $ExpectType Symbol | undefined
    GetIntrinsic('%SymbolPrototype%', true); // $ExpectType Symbol | undefined

    GetIntrinsic('%SyntaxError%', true); // $ExpectType SyntaxErrorConstructor | undefined
    GetIntrinsic('%SyntaxError.prototype%', true); // $ExpectType SyntaxError | undefined
    GetIntrinsic('%SyntaxErrorPrototype%', true); // $ExpectType SyntaxError | undefined

    GetIntrinsic('%ThrowTypeError%', true); // $ExpectType (() => never) | undefined

    GetIntrinsic('%TypedArray%', true); // $ExpectType TypedArrayConstructor | undefined
    GetIntrinsic('%TypedArray.prototype%', true); // $ExpectType TypedArrayPrototype | undefined
    GetIntrinsic('%TypedArrayPrototype%', true); // $ExpectType TypedArrayPrototype | undefined

    GetIntrinsic('%TypeError%', true); // $ExpectType TypeErrorConstructor | undefined
    GetIntrinsic('%TypeError.prototype%', true); // $ExpectType TypeError | undefined
    GetIntrinsic('%TypeErrorPrototype%', true); // $ExpectType TypeError | undefined

    GetIntrinsic('%Uint8Array%', true); // $ExpectType Uint8ArrayConstructor | undefined
    GetIntrinsic('%Uint8Array.prototype%', true); // $ExpectType Uint8Array | undefined
    GetIntrinsic('%Uint8ArrayPrototype%', true); // $ExpectType Uint8Array | undefined

    GetIntrinsic('%Uint8ClampedArray%', true); // $ExpectType Uint8ClampedArrayConstructor | undefined
    GetIntrinsic('%Uint8ClampedArray.prototype%', true); // $ExpectType Uint8ClampedArray | undefined
    GetIntrinsic('%Uint8ClampedArrayPrototype%', true); // $ExpectType Uint8ClampedArray | undefined

    GetIntrinsic('%Uint16Array%', true); // $ExpectType Uint16ArrayConstructor | undefined
    GetIntrinsic('%Uint16Array.prototype%', true); // $ExpectType Uint16Array | undefined
    GetIntrinsic('%Uint16ArrayPrototype%', true); // $ExpectType Uint16Array | undefined

    GetIntrinsic('%Uint32Array%', true); // $ExpectType Uint32ArrayConstructor | undefined
    GetIntrinsic('%Uint32Array.prototype%', true); // $ExpectType Uint32Array | undefined
    GetIntrinsic('%Uint32ArrayPrototype%', true); // $ExpectType Uint32Array | undefined

    GetIntrinsic('%URIError%', true); // $ExpectType URIErrorConstructor | undefined
    GetIntrinsic('%URIError.prototype%', true); // $ExpectType URIError | undefined
    GetIntrinsic('%URIErrorPrototype%', true); // $ExpectType URIError | undefined

    GetIntrinsic('%WeakMap%', true); // $ExpectType WeakMapConstructor | undefined
    GetIntrinsic('%WeakMap.prototype%', true); // $ExpectType WeakMap<object, any> | undefined
    GetIntrinsic('%WeakMapPrototype%', true); // $ExpectType WeakMap<object, any> | undefined

    GetIntrinsic('%WeakSet%', true); // $ExpectType WeakSetConstructor | undefined
    GetIntrinsic('%WeakSet.prototype%', true); // $ExpectType WeakSet<object> | undefined
    GetIntrinsic('%WeakSetPrototype%', true); // $ExpectType WeakSet<object> | undefined

    GetIntrinsic('unknown', true); // $ExpectType unknown
}

// allowMissing = boolean
{
    GetIntrinsic('%Array%', boolean); // $ExpectType ArrayConstructor | undefined
    GetIntrinsic('%Array.prototype%', boolean); // $ExpectType any[] | undefined
    expectType<typeof Array.prototype.entries | undefined>(GetIntrinsic('%Array.prototype.entries%', boolean));
    expectType<typeof Array.prototype.forEach | undefined>(GetIntrinsic('%Array.prototype.forEach%', boolean));
    expectType<typeof Array.prototype.keys | undefined>(GetIntrinsic('%Array.prototype.keys%', boolean));
    expectType<typeof Array.prototype.values | undefined>(GetIntrinsic('%Array.prototype.values%', boolean));

    GetIntrinsic('%ArrayPrototype%', boolean); // $ExpectType any[] | undefined
    expectType<typeof Array.prototype.entries | undefined>(GetIntrinsic('%ArrayProto_entries%', boolean));
    expectType<typeof Array.prototype.forEach | undefined>(GetIntrinsic('%ArrayProto_forEach%', boolean));
    expectType<typeof Array.prototype.keys | undefined>(GetIntrinsic('%ArrayProto_keys%', boolean));
    expectType<typeof Array.prototype.values | undefined>(GetIntrinsic('%ArrayProto_values%', boolean));

    GetIntrinsic('%ArrayBuffer%', boolean); // $ExpectType ArrayBufferConstructor | undefined
    GetIntrinsic('%ArrayBuffer.prototype%', boolean); // $ExpectType ArrayBuffer | undefined
    GetIntrinsic('%ArrayBufferPrototype%', boolean); // $ExpectType ArrayBuffer | undefined

    GetIntrinsic('%ArrayIteratorPrototype%', boolean); // $ExpectType IterableIterator<any> | undefined
    GetIntrinsic('%AsyncFromSyncIteratorPrototype%', boolean); // $ExpectType AsyncGenerator<any, any, unknown> | undefined

    GetIntrinsic('%AsyncFunction%', boolean); // $ExpectType FunctionConstructor | undefined
    GetIntrinsic('%AsyncFunction.prototype%', boolean); // $ExpectType Function | undefined
    GetIntrinsic('%AsyncFunctionPrototype%', boolean); // $ExpectType Function | undefined

    GetIntrinsic('%AsyncGenerator%', boolean); // $ExpectType AsyncGeneratorFunction | undefined
    GetIntrinsic('%AsyncGeneratorFunction%', boolean); // $ExpectType AsyncGeneratorFunctionConstructor | undefined
    GetIntrinsic('%AsyncGeneratorPrototype%', boolean); // $ExpectType AsyncGenerator<any, any, unknown> | undefined
    GetIntrinsic('%AsyncIteratorPrototype%', boolean); // $ExpectType AsyncIterable<any> | undefined

    GetIntrinsic('%Atomics%', boolean); // $ExpectType Atomics | undefined

    GetIntrinsic('%Boolean%', boolean); // $ExpectType BooleanConstructor | undefined
    GetIntrinsic('%Boolean.prototype%', boolean); // $ExpectType Boolean | undefined
    GetIntrinsic('%BooleanPrototype%', boolean); // $ExpectType Boolean | undefined

    GetIntrinsic('%DataView%', boolean); // $ExpectType DataViewConstructor | undefined
    GetIntrinsic('%DataView.prototype%', boolean); // $ExpectType DataView | undefined
    GetIntrinsic('%DataViewPrototype%', boolean); // $ExpectType DataView | undefined

    GetIntrinsic('%Date%', boolean); // $ExpectType DateConstructor | undefined
    GetIntrinsic('%Date.prototype%', boolean); // $ExpectType Date | undefined
    GetIntrinsic('%DatePrototype%', boolean); // $ExpectType Date | undefined

    expectType<typeof decodeURI | undefined>(GetIntrinsic('%decodeURI%', boolean));
    expectType<typeof decodeURIComponent | undefined>(GetIntrinsic('%decodeURIComponent%', boolean));

    expectType<typeof encodeURI | undefined>(GetIntrinsic('%encodeURI%', boolean));
    expectType<typeof encodeURIComponent | undefined>(GetIntrinsic('%encodeURIComponent%', boolean));

    GetIntrinsic('%Error%', boolean); // $ExpectType ErrorConstructor | undefined
    GetIntrinsic('%Error.prototype%', boolean); // $ExpectType Error | undefined
    GetIntrinsic('%ErrorPrototype%', boolean); // $ExpectType Error | undefined

    expectType<typeof eval | undefined>(GetIntrinsic('%eval%', boolean));

    GetIntrinsic('%EvalError%', boolean); // $ExpectType EvalErrorConstructor | undefined
    GetIntrinsic('%EvalError.prototype%', boolean); // $ExpectType EvalError | undefined
    GetIntrinsic('%EvalErrorPrototype%', boolean); // $ExpectType EvalError | undefined

    GetIntrinsic('%Float32Array%', boolean); // $ExpectType Float32ArrayConstructor | undefined
    GetIntrinsic('%Float32Array.prototype%', boolean); // $ExpectType Float32Array | undefined
    GetIntrinsic('%Float32ArrayPrototype%', boolean); // $ExpectType Float32Array | undefined

    GetIntrinsic('%Float64Array%', boolean); // $ExpectType Float64ArrayConstructor | undefined
    GetIntrinsic('%Float64Array.prototype%', boolean); // $ExpectType Float64Array | undefined
    GetIntrinsic('%Float64ArrayPrototype%', boolean); // $ExpectType Float64Array | undefined

    GetIntrinsic('%Function%', boolean); // $ExpectType FunctionConstructor | undefined
    GetIntrinsic('%Function.prototype%', boolean); // $ExpectType Function | undefined
    GetIntrinsic('%FunctionPrototype%', boolean); // $ExpectType Function | undefined

    GetIntrinsic('%Generator%', boolean); // $ExpectType GeneratorFunction | undefined
    GetIntrinsic('%GeneratorFunction%', boolean); // $ExpectType GeneratorFunctionConstructor | undefined
    GetIntrinsic('%GeneratorPrototype%', boolean); // $ExpectType Generator<any, any, unknown> | undefined
    GetIntrinsic('%IteratorPrototype%', boolean); // $ExpectType Iterable<any> | undefined

    GetIntrinsic('%Int8Array%', boolean); // $ExpectType Int8ArrayConstructor | undefined
    GetIntrinsic('%Int8Array.prototype%', boolean); // $ExpectType Int8Array | undefined
    GetIntrinsic('%Int8ArrayPrototype%', boolean); // $ExpectType Int8Array | undefined

    GetIntrinsic('%Int16Array%', boolean); // $ExpectType Int16ArrayConstructor | undefined
    GetIntrinsic('%Int16Array.prototype%', boolean); // $ExpectType Int16Array | undefined
    GetIntrinsic('%Int16ArrayPrototype%', boolean); // $ExpectType Int16Array | undefined

    GetIntrinsic('%Int32Array%', boolean); // $ExpectType Int32ArrayConstructor | undefined
    GetIntrinsic('%Int32Array.prototype%', boolean); // $ExpectType Int32Array | undefined
    GetIntrinsic('%Int32ArrayPrototype%', boolean); // $ExpectType Int32Array | undefined

    expectType<typeof isFinite | undefined>(GetIntrinsic('%isFinite%', boolean));
    expectType<typeof isNaN | undefined>(GetIntrinsic('%isNaN%', boolean));

    GetIntrinsic('%JSON%', boolean); // $ExpectType JSON | undefined
    expectType<typeof JSON.parse | undefined>(GetIntrinsic('%JSON.parse%', boolean));
    expectType<typeof JSON.parse | undefined>(GetIntrinsic('%JSONParse%', boolean));
    expectType<typeof JSON.stringify | undefined>(GetIntrinsic('%JSON.stringify%', boolean));

    GetIntrinsic('%Map%', boolean); // $ExpectType MapConstructor | undefined
    GetIntrinsic('%Map.prototype%', boolean); // $ExpectType Map<any, any> | undefined
    GetIntrinsic('%MapPrototype%', boolean); // $ExpectType Map<any, any> | undefined
    GetIntrinsic('%MapIteratorPrototype%', boolean); // $ExpectType IterableIterator<any> | undefined

    GetIntrinsic('%Math%', boolean); // $ExpectType Math | undefined

    GetIntrinsic('%Number%', boolean); // $ExpectType NumberConstructor | undefined
    GetIntrinsic('%Number.prototype%', boolean); // $ExpectType Number | undefined
    GetIntrinsic('%NumberPrototype%', boolean); // $ExpectType Number | undefined

    GetIntrinsic('%Object%', boolean); // $ExpectType ObjectConstructor | undefined
    GetIntrinsic('%Object.prototype%', boolean); // $ExpectType Object | undefined
    expectType<typeof Object.prototype.toString | undefined>(GetIntrinsic('%Object.prototype.toString%', boolean));
    expectType<typeof Object.prototype.valueOf | undefined>(GetIntrinsic('%Object.prototype.valueOf%', boolean));

    GetIntrinsic('%ObjectPrototype%', boolean); // $ExpectType Object | undefined
    expectType<typeof Object.prototype.toString | undefined>(GetIntrinsic('%ObjProto_toString%', boolean));
    expectType<typeof Object.prototype.valueOf | undefined>(GetIntrinsic('%ObjProto_valueOf%', boolean));

    expectType<typeof parseFloat | undefined>(GetIntrinsic('%parseFloat%', boolean));
    expectType<typeof parseInt | undefined>(GetIntrinsic('%parseInt%', boolean));

    GetIntrinsic('%Promise%', boolean); // $ExpectType PromiseConstructor | undefined
    GetIntrinsic('%Promise.prototype%', boolean); // $ExpectType Promise<any> | undefined
    expectType<typeof Promise.reject | undefined>(GetIntrinsic('%Promise.reject%', boolean));
    expectType<typeof Promise.resolve | undefined>(GetIntrinsic('%Promise.resolve%', boolean));

    GetIntrinsic('%PromisePrototype%', boolean); // $ExpectType Promise<any> | undefined
    expectType<typeof Promise.reject | undefined>(GetIntrinsic('%Promise_reject%', boolean));
    expectType<typeof Promise.resolve | undefined>(GetIntrinsic('%Promise_resolve%', boolean));

    GetIntrinsic('%Proxy%', boolean); // $ExpectType ProxyConstructor | undefined

    GetIntrinsic('%RangeError%', boolean); // $ExpectType RangeErrorConstructor | undefined
    GetIntrinsic('%RangeError.prototype%', boolean); // $ExpectType RangeError | undefined
    GetIntrinsic('%RangeErrorPrototype%', boolean); // $ExpectType RangeError | undefined

    GetIntrinsic('%ReferenceError%', boolean); // $ExpectType ReferenceErrorConstructor | undefined
    GetIntrinsic('%ReferenceError.prototype%', boolean); // $ExpectType ReferenceError | undefined
    GetIntrinsic('%ReferenceErrorPrototype%', boolean); // $ExpectType ReferenceError | undefined

    GetIntrinsic('%Reflect%', boolean); // $ExpectType typeof Reflect | undefined

    GetIntrinsic('%RegExp%', boolean); // $ExpectType RegExpConstructor | undefined
    GetIntrinsic('%RegExp.prototype%', boolean); // $ExpectType RegExp | undefined
    GetIntrinsic('%RegExpPrototype%', boolean); // $ExpectType RegExp | undefined

    GetIntrinsic('%Set%', boolean); // $ExpectType SetConstructor | undefined
    GetIntrinsic('%Set.prototype%', boolean); // $ExpectType Set<any> | undefined
    GetIntrinsic('%SetPrototype%', boolean); // $ExpectType Set<any> | undefined
    GetIntrinsic('%SetIteratorPrototype%', boolean); // $ExpectType IterableIterator<any> | undefined

    GetIntrinsic('%SharedArrayBuffer%', boolean); // $ExpectType SharedArrayBufferConstructor | undefined
    GetIntrinsic('%SharedArrayBuffer.prototype%', boolean); // $ExpectType SharedArrayBuffer | undefined
    GetIntrinsic('%SharedArrayBufferPrototype%', boolean); // $ExpectType SharedArrayBuffer | undefined

    GetIntrinsic('%String%', boolean); // $ExpectType StringConstructor | undefined
    GetIntrinsic('%String.prototype%', boolean); // $ExpectType String | undefined
    GetIntrinsic('%StringPrototype%', boolean); // $ExpectType String | undefined
    GetIntrinsic('%StringIteratorPrototype%', boolean); // $ExpectType IterableIterator<string> | undefined

    GetIntrinsic('%Symbol%', boolean); // $ExpectType SymbolConstructor | undefined
    GetIntrinsic('%Symbol.prototype%', boolean); // $ExpectType Symbol | undefined
    GetIntrinsic('%SymbolPrototype%', boolean); // $ExpectType Symbol | undefined

    GetIntrinsic('%SyntaxError%', boolean); // $ExpectType SyntaxErrorConstructor | undefined
    GetIntrinsic('%SyntaxError.prototype%', boolean); // $ExpectType SyntaxError | undefined
    GetIntrinsic('%SyntaxErrorPrototype%', boolean); // $ExpectType SyntaxError | undefined

    GetIntrinsic('%ThrowTypeError%', boolean); // $ExpectType (() => never) | undefined

    GetIntrinsic('%TypedArray%', boolean); // $ExpectType TypedArrayConstructor | undefined
    GetIntrinsic('%TypedArray.prototype%', boolean); // $ExpectType TypedArrayPrototype | undefined
    GetIntrinsic('%TypedArrayPrototype%', boolean); // $ExpectType TypedArrayPrototype | undefined

    GetIntrinsic('%TypeError%', boolean); // $ExpectType TypeErrorConstructor | undefined
    GetIntrinsic('%TypeError.prototype%', boolean); // $ExpectType TypeError | undefined
    GetIntrinsic('%TypeErrorPrototype%', boolean); // $ExpectType TypeError | undefined

    GetIntrinsic('%Uint8Array%', boolean); // $ExpectType Uint8ArrayConstructor | undefined
    GetIntrinsic('%Uint8Array.prototype%', boolean); // $ExpectType Uint8Array | undefined
    GetIntrinsic('%Uint8ArrayPrototype%', boolean); // $ExpectType Uint8Array | undefined

    GetIntrinsic('%Uint8ClampedArray%', boolean); // $ExpectType Uint8ClampedArrayConstructor | undefined
    GetIntrinsic('%Uint8ClampedArray.prototype%', boolean); // $ExpectType Uint8ClampedArray | undefined
    GetIntrinsic('%Uint8ClampedArrayPrototype%', boolean); // $ExpectType Uint8ClampedArray | undefined

    GetIntrinsic('%Uint16Array%', boolean); // $ExpectType Uint16ArrayConstructor | undefined
    GetIntrinsic('%Uint16Array.prototype%', boolean); // $ExpectType Uint16Array | undefined
    GetIntrinsic('%Uint16ArrayPrototype%', boolean); // $ExpectType Uint16Array | undefined

    GetIntrinsic('%Uint32Array%', boolean); // $ExpectType Uint32ArrayConstructor | undefined
    GetIntrinsic('%Uint32Array.prototype%', boolean); // $ExpectType Uint32Array | undefined
    GetIntrinsic('%Uint32ArrayPrototype%', boolean); // $ExpectType Uint32Array | undefined

    GetIntrinsic('%URIError%', boolean); // $ExpectType URIErrorConstructor | undefined
    GetIntrinsic('%URIError.prototype%', boolean); // $ExpectType URIError | undefined
    GetIntrinsic('%URIErrorPrototype%', boolean); // $ExpectType URIError | undefined

    GetIntrinsic('%WeakMap%', boolean); // $ExpectType WeakMapConstructor | undefined
    GetIntrinsic('%WeakMap.prototype%', boolean); // $ExpectType WeakMap<object, any> | undefined
    GetIntrinsic('%WeakMapPrototype%', boolean); // $ExpectType WeakMap<object, any> | undefined

    GetIntrinsic('%WeakSet%', boolean); // $ExpectType WeakSetConstructor | undefined
    GetIntrinsic('%WeakSet.prototype%', boolean); // $ExpectType WeakSet<object> | undefined
    GetIntrinsic('%WeakSetPrototype%', boolean); // $ExpectType WeakSet<object> | undefined

    GetIntrinsic('unknown', boolean); // $ExpectType unknown
}
