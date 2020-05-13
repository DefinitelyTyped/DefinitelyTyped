/**
 * Returns the ECMAScript intrinsic for the name.
 *
 * @param name The ECMAScript intrinsic name
 * @param allowMissing Whether the intrinsic can be missing in this environment
 *
 * @throws {SyntaxError} If the ECMAScript intrinsic doesn't exist
 * @throws {TypeError} If the ECMAScript intrinsic exists, but not in this environment and `allowMissing` is `false`.
 */
declare function GetIntrinsic<K extends keyof GetIntrinsic.Intrinsics>(
	name: K,
	allowMissing?: false,
): GetIntrinsic.Intrinsics[K];
declare function GetIntrinsic<K extends keyof GetIntrinsic.Intrinsics>(
	name: K,
	allowMissing: true,
): GetIntrinsic.Intrinsics[K] | undefined;
declare function GetIntrinsic<K extends keyof GetIntrinsic.Intrinsics>(
	name: K,
	allowMissing?: boolean,
): GetIntrinsic.Intrinsics[K] | undefined;
declare function GetIntrinsic(name: string, allowMissing?: boolean): unknown;

declare namespace GetIntrinsic {
	interface Intrinsics {
		'%Array%': ArrayConstructor;
		'%ArrayBuffer%': ArrayBufferConstructor;
		'%ArrayBufferPrototype%': ArrayBuffer;
		'%ArrayIteratorPrototype%': IterableIterator<unknown>;
		'%ArrayPrototype%': typeof Array.prototype;
		'%ArrayProto_entries%': typeof Array.prototype.entries;
		'%ArrayProto_forEach%': typeof Array.prototype.forEach;
		'%ArrayProto_keys%': typeof Array.prototype.keys;
		'%ArrayProto_values%': typeof Array.prototype.values;
		'%AsyncFromSyncIteratorPrototype%': undefined;
		'%AsyncFunction%': FunctionConstructor;
		'%AsyncFunctionPrototype%': typeof Function.prototype;
		'%AsyncGenerator%': AsyncGenerator;
		'%AsyncGeneratorFunction%': AsyncGeneratorFunctionConstructor;
		'%AsyncGeneratorPrototype%': AsyncGeneratorFunction;
		'%AsyncIteratorPrototype%': AsyncIterable<any>;
		'%Atomics%': Atomics;
		'%Boolean%': BooleanConstructor;
		'%BooleanPrototype%': typeof Boolean.prototype;
		'%DataView%': DataViewConstructor;
		'%DataViewPrototype%': DataView;
		'%Date%': DateConstructor;
		'%DatePrototype%': Date;
		'%decodeURI%': typeof decodeURI;
		'%decodeURIComponent%': typeof decodeURIComponent;
		'%encodeURI%': typeof encodeURI;
		'%encodeURIComponent%': typeof encodeURIComponent;
		'%Error%': ErrorConstructor;
		'%ErrorPrototype%': Error;
		'%eval%': typeof eval;
		'%EvalError%': EvalErrorConstructor;
		'%EvalErrorPrototype%': EvalError;
		'%Float32Array%': Float32ArrayConstructor;
		'%Float32ArrayPrototype%': Float32Array;
		'%Float64Array%': Float64ArrayConstructor;
		'%Float64ArrayPrototype%': Float64Array;
		'%Function%': FunctionConstructor;
		'%FunctionPrototype%': typeof Function.prototype;
		'%Generator%': Generator;
		'%GeneratorFunction%': GeneratorFunctionConstructor;
		'%GeneratorPrototype%': GeneratorFunction;
		'%Int8Array%': Int8ArrayConstructor;
		'%Int8ArrayPrototype%': Int8Array;
		'%Int16Array%': Int16ArrayConstructor;
		'%Int16ArrayPrototype%': Int16Array;
		'%Int32Array%': Int32ArrayConstructor;
		'%Int32ArrayPrototype%': Int32Array;
		'%isFinite%': typeof isFinite;
		'%isNaN%': typeof isNaN;
		'%IteratorPrototype%': Iterable<any>;
		'%JSON%': JSON;
		'%JSONParse%': typeof JSON.parse;
		'%Map%': MapConstructor;
		'%MapIteratorPrototype%': IterableIterator<[unknown, unknown]>;
		'%MapPrototype%': typeof Map.prototype;
		'%Math%': Math;
		'%Number%': NumberConstructor;
		'%NumberPrototype%': typeof Number.prototype;
		'%Object%': ObjectConstructor;
		'%ObjectPrototype%': typeof Object.prototype;
		'%ObjProto_toString%': typeof Object.prototype.toString;
		'%ObjProto_valueOf%': typeof Object.prototype.valueOf;
		'%parseFloat%': typeof parseFloat;
		'%parseInt%': typeof parseInt;
		'%Promise%': PromiseConstructor;
		'%PromisePrototype%': typeof Promise.prototype;
		'%PromiseProto_then%': typeof Promise.prototype.then;
		'%Promise_all%': typeof Promise.all;
		'%Promise_reject%': typeof Promise.reject;
		'%Promise_resolve%': typeof Promise.resolve;
		'%Proxy%': ProxyConstructor;
		'%RangeError%': RangeErrorConstructor;
		'%RangeErrorPrototype%': RangeError;
		'%ReferenceError%': ReferenceErrorConstructor;
		'%ReferenceErrorPrototype%': ReferenceError;
		'%Reflect%': typeof Reflect;
		'%RegExp%': RegExpConstructor;
		'%RegExpPrototype%': RegExp;
		'%Set%': SetConstructor;
		'%SetIteratorPrototype%': IterableIterator<unknown>;
		'%SetPrototype%': typeof Set.prototype;
		'%SharedArrayBuffer%': SharedArrayBufferConstructor;
		'%SharedArrayBufferPrototype%': SharedArrayBuffer;
		'%String%': StringConstructor;
		'%StringIteratorPrototype%': IterableIterator<string>;
		'%StringPrototype%': typeof String.prototype;
		'%Symbol%': SymbolConstructor;
		'%SymbolPrototype%': typeof Symbol.prototype;
		'%SyntaxError%': SyntaxErrorConstructor;
		'%SyntaxErrorPrototype%': SyntaxError;
		'%ThrowTypeError%': () => never;
		'%TypedArray%': unknown;
		'%TypedArrayPrototype%': unknown;
		'%TypeError%': TypeErrorConstructor;
		'%TypeErrorPrototype%': TypeError;
		'%Uint8Array%': Uint8ArrayConstructor;
		'%Uint8ArrayPrototype%': Uint8Array;
		'%Uint8ClampedArray%': Uint8ClampedArrayConstructor;
		'%Uint8ClampedArrayPrototype%': Uint8ClampedArray;
		'%Uint16Array%': Uint16ArrayConstructor;
		'%Uint16ArrayPrototype%': Uint16Array;
		'%Uint32Array%': Uint32ArrayConstructor;
		'%Uint32ArrayPrototype%': Uint32Array;
		'%URIError%': URIErrorConstructor;
		'%URIErrorPrototype%': URIError;
		'%WeakMap%': WeakMapConstructor;
		'%WeakMapPrototype%': typeof WeakMap.prototype;
		'%WeakSet%': WeakSetConstructor;
		'%WeakSetPrototype%': typeof WeakSet.prototype;
	}
}

export = GetIntrinsic;
