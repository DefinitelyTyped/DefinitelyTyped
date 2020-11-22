const hasSymbols = true;
const { getPrototypeOf: getProto, getOwnPropertyDescriptor: $gOPD, setPrototypeOf: setProto } = Reflect as {
    getPrototypeOf(target: object): object | null;
    getOwnPropertyDescriptor<T extends object, P extends PropertyKey>(
        target: T,
        propertyKey: P,
    ): (P extends keyof T ? TypedPropertyDescriptor<T[P]> : PropertyDescriptor) | undefined;
    setPrototypeOf(target: object, proto: object | null): boolean;
};

const ThrowTypeError = (function () {
    return $gOPD(arguments, 'callee')!.get;
})();

const generator = function* () {};
const asyncFn = async function () {};
const asyncGen = async function* () {};

const generatorFunction = generator ? /** @type {GeneratorFunctionConstructor} */ generator.constructor : undefined;
const generatorFunctionPrototype = generatorFunction ? generatorFunction.prototype : undefined;
const generatorPrototype = generatorFunctionPrototype ? generatorFunctionPrototype.prototype : undefined;

const asyncFunction = asyncFn ? /** @type {FunctionConstructor} */ asyncFn.constructor : undefined;

const asyncGenFunction = asyncGen ? /** @type {AsyncGeneratorFunctionConstructor} */ asyncGen.constructor : undefined;
const asyncGenFunctionPrototype = asyncGenFunction ? asyncGenFunction.prototype : undefined;
const asyncGenPrototype = asyncGenFunctionPrototype ? asyncGenFunctionPrototype.prototype : undefined;

const TypedArray = typeof Uint8Array === 'undefined' ? undefined : (getProto(Uint8Array) as Function);

const $ObjectPrototype = Object.prototype;
const $ArrayIteratorPrototype = hasSymbols ? (getProto([][Symbol.iterator]()) as IterableIterator<any>) : undefined;

export interface BaseIntrinsic {
    getterType?: string;
    get?: string;
    overrides?: { [property: string]: string | Override | null };
}

export interface Override extends BaseIntrinsic {
    type?: string;
}

export interface Intrinsic extends Override {
    type: string;
}

// prettier-ignore
export const BASE_INTRINSICS: { [intrinsic: string]: unknown } = {
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
    '%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
    '%ArrayIteratorPrototype%': $ArrayIteratorPrototype,
    '%ArrayPrototype%': Array.prototype,
    '%ArrayProto_entries%': Array.prototype.entries,
    '%ArrayProto_forEach%': Array.prototype.forEach,
    '%ArrayProto_keys%': Array.prototype.keys,
    '%ArrayProto_values%': Array.prototype.values,
    '%AsyncFromSyncIteratorPrototype%': undefined,
    '%AsyncFunction%': asyncFunction,
    '%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
    '%AsyncGenerator%': asyncGenFunctionPrototype,
    '%AsyncGeneratorFunction%': asyncGenFunction,
    '%AsyncGeneratorPrototype%': asyncGenPrototype,
    '%AsyncIteratorPrototype%': asyncGenPrototype ? getProto(asyncGenPrototype) : undefined,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
    '%Boolean%': Boolean,
    '%BooleanPrototype%': Boolean.prototype,
    '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
    '%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
    '%Date%': Date,
    '%DatePrototype%': Date.prototype,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': Error,
    '%ErrorPrototype%': Error.prototype,
    '%eval%': eval, // eslint-disable-line no-eval
    '%EvalError%': EvalError,
    '%EvalErrorPrototype%': EvalError.prototype,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
    '%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
    '%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
    '%Function%': Function,
    '%FunctionPrototype%': Function.prototype,
    '%Generator%': generatorFunctionPrototype,
    '%GeneratorFunction%': generatorFunction,
    '%GeneratorPrototype%': generatorPrototype,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
    '%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
    '%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
    '%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols ? getProto($ArrayIteratorPrototype!) : undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined,
    '%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,
    '%Map%': typeof Map === 'undefined' ? undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]())!,
    '%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
    '%Math%': Math,
    '%Number%': Number,
    '%NumberPrototype%': Number.prototype,
    '%Object%': Object,
    '%ObjectPrototype%': $ObjectPrototype,
    '%ObjProto_toString%': $ObjectPrototype.toString,
    '%ObjProto_valueOf%': $ObjectPrototype.valueOf,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
    '%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
    '%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
    '%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
    '%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
    '%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
    '%RangeError%': RangeError,
    '%RangeErrorPrototype%': RangeError.prototype,
    '%ReferenceError%': ReferenceError,
    '%ReferenceErrorPrototype%': ReferenceError.prototype,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
    '%RegExp%': RegExp,
    '%RegExpPrototype%': RegExp.prototype,
    '%Set%': typeof Set === 'undefined' ? undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
    '%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
    '%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
    '%StringPrototype%': String.prototype,
    '%Symbol%': hasSymbols ? Symbol : undefined,
    '%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
    '%SyntaxError%': SyntaxError,
    '%SyntaxErrorPrototype%': SyntaxError.prototype,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
    '%TypeError%': TypeError,
    '%TypeErrorPrototype%': TypeError.prototype,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
    '%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
    '%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
    '%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
    '%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
    '%URIError%': URIError,
    '%URIErrorPrototype%': URIError.prototype,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
    '%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
    '%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype,
};
setProto(BASE_INTRINSICS, null);

// prettier-ignore
export const LEGACY_ALIASES: { [intrinsic: string]: string[] } = {
    '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
    '%ArrayPrototype%': ['Array', 'prototype'],
    '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
    '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
    '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
    '%ArrayProto_values%': ['Array', 'prototype', 'values'],
    '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
    '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
    '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
    '%BooleanPrototype%': ['Boolean', 'prototype'],
    '%DataViewPrototype%': ['DataView', 'prototype'],
    '%DatePrototype%': ['Date', 'prototype'],
    '%ErrorPrototype%': ['Error', 'prototype'],
    '%EvalErrorPrototype%': ['EvalError', 'prototype'],
    '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
    '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
    '%FunctionPrototype%': ['Function', 'prototype'],
    '%Generator%': ['GeneratorFunction', 'prototype'],
    '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
    '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
    '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
    '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
    '%JSONParse%': ['JSON', 'parse'],
    '%JSONStringify%': ['JSON', 'stringify'],
    '%MapPrototype%': ['Map', 'prototype'],
    '%NumberPrototype%': ['Number', 'prototype'],
    '%ObjectPrototype%': ['Object', 'prototype'],
    '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
    '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
    '%PromisePrototype%': ['Promise', 'prototype'],
    '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
    '%Promise_all%': ['Promise', 'all'],
    '%Promise_reject%': ['Promise', 'reject'],
    '%Promise_resolve%': ['Promise', 'resolve'],
    '%RangeErrorPrototype%': ['RangeError', 'prototype'],
    '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
    '%RegExpPrototype%': ['RegExp', 'prototype'],
    '%SetPrototype%': ['Set', 'prototype'],
    '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
    '%StringPrototype%': ['String', 'prototype'],
    '%SymbolPrototype%': ['Symbol', 'prototype'],
    '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
    '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
    '%TypeErrorPrototype%': ['TypeError', 'prototype'],
    '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
    '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
    '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
    '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
    '%URIErrorPrototype%': ['URIError', 'prototype'],
    '%WeakMapPrototype%': ['WeakMap', 'prototype'],
    '%WeakSetPrototype%': ['WeakSet', 'prototype']
};
setProto(LEGACY_ALIASES, null);

export const BASE_INTRINSIC_DATA: { [intrinsic: string]: string | Intrinsic } = {
    Array: { type: 'ArrayConstructor', get: 'typeof Array' },
    ArrayBuffer: {
        type: 'ArrayBufferConstructor',
        get: 'typeof ArrayBuffer',
        overrides: {
            prototype: { type: 'ArrayBuffer', get: 'typeof ArrayBuffer.prototype' },
        },
    },
    ArrayIteratorPrototype: 'IterableIterator<any>',
    AsyncFromSyncIteratorPrototype: {
        type: 'AsyncGenerator<any>',
        overrides: {
            next: "AsyncGenerator<any>['next']",
            return: "AsyncGenerator<any>['return']",
            throw: "AsyncGenerator<any>['throw']",
        },
    },
    AsyncFunction: { type: 'FunctionConstructor', get: 'typeof Function' },
    AsyncGeneratorFunction: {
        type: 'AsyncGeneratorFunctionConstructor',
        overrides: {
            prototype: {
                type: 'AsyncGeneratorFunction',
                overrides: {
                    prototype: 'AsyncGenerator<any>',
                },
            },
        },
    },
    AsyncIteratorPrototype: 'AsyncIterable<any>',
    Atomics: { type: 'Atomics', get: 'typeof Atomics' },
    BigInt: { type: 'BigIntConstructor', get: 'typeof BigInt' },
    BigInt64Array: {
        type: 'BigInt64ArrayConstructor',
        get: 'typeof BigInt64Array',
        overrides: { prototype: { type: 'BigInt64Array', get: 'typeof BigInt64Array.prototype' } },
    },
    BigUint64Array: {
        type: 'BigUint64ArrayConstructor',
        get: 'typeof BigUint64Array',
        overrides: { prototype: { type: 'BigUint64Array', get: 'typeof BigUint64Array.prototype' } },
    },
    Boolean: { type: 'BooleanConstructor', get: 'typeof Boolean' },
    DataView: {
        type: 'DataViewConstructor',
        get: 'typeof DataView',
        overrides: {
            prototype: { type: 'DataView', get: 'typeof DataView.prototype' },
        },
    },
    Date: {
        type: 'DateConstructor',
        get: 'typeof Date',
        overrides: {
            prototype: {
                type: 'Date',
                get: 'typeof Date.prototype',
                overrides: {
                    getYear: null,
                    setYear: null,
                    toGMTString: null,
                },
            },
        },
    },
    decodeURI: 'typeof decodeURI',
    decodeURIComponent: 'typeof decodeURIComponent',
    encodeURI: 'typeof encodeURI',
    encodeURIComponent: 'typeof encodeURIComponent',
    Error: {
        type: 'ErrorConstructor',
        get: 'typeof Error',
        overrides: {
            captureStackTrace: null,
            prepareStackTrace: null,
            stackTraceLimit: null,
            prototype: { type: 'Error', get: 'typeof Error.prototype' },
        },
    },
    eval: 'typeof eval',
    EvalError: {
        type: 'EvalErrorConstructor',
        get: 'typeof EvalError',
        overrides: {
            prototype: { type: 'EvalError', get: 'typeof EvalError.prototype' },
        },
    },
    Float32Array: {
        type: 'Float32ArrayConstructor',
        get: 'typeof Float32Array',
        overrides: {
            prototype: { type: 'Float32Array', get: 'typeof Float32Array.prototype' },
        },
    },
    Float64Array: {
        type: 'Float64ArrayConstructor',
        get: 'typeof Float64Array',
        overrides: {
            prototype: { type: 'Float64Array', get: 'typeof Float64Array.prototype' },
        },
    },
    Function: {
        type: 'FunctionConstructor',
        get: 'typeof Function',
        overrides: {
            prototype: {
                type: 'typeof Function.prototype',
                overrides: {
                    arguments: null,
                    callee: null,
                    caller: null,
                },
            },
        },
    },
    GeneratorFunction: {
        type: 'GeneratorFunctionConstructor',
        overrides: {
            prototype: {
                type: 'GeneratorFunction',
                overrides: {
                    prototype: 'Generator<any>',
                },
            },
        },
    },
    Int8Array: {
        type: 'Int8ArrayConstructor',
        get: 'typeof Int8Array',
        overrides: {
            prototype: { type: 'Int8Array', get: 'typeof Int8Array.prototype' },
        },
    },
    Int16Array: {
        type: 'Int16ArrayConstructor',
        get: 'typeof Int16Array',
        overrides: {
            prototype: { type: 'Int16Array', get: 'typeof Int16Array.prototype' },
        },
    },
    Int32Array: {
        type: 'Int32ArrayConstructor',
        get: 'typeof Int32Array',
        overrides: {
            prototype: { type: 'Int32Array', get: 'typeof Int32Array.prototype' },
        },
    },
    isFinite: 'typeof isFinite',
    isNaN: 'typeof isNaN',
    IteratorPrototype: 'Iterable<any>',
    JSON: { type: 'JSON', get: 'typeof JSON' },
    Map: {
        type: 'MapConstructor',
        get: 'typeof Map',
        overrides: {
            prototype: { type: 'typeof Map.prototype', getterType: 'Map<any, any>' },
        },
    },
    MapIteratorPrototype: 'IterableIterator<any>',
    Math: { type: 'Math', get: 'typeof Math' },
    Number: { type: 'NumberConstructor', get: 'typeof Number' },
    Object: {
        type: 'ObjectConstructor',
        get: 'typeof Object',
        overrides: {
            prototype: {
                type: 'typeof Object.prototype',
                overrides: {
                    ['__proto__']: null,
                    __defineGetter__: null,
                    __defineSetter__: null,
                    __lookupGetter__: null,
                    __lookupSetter__: null,
                },
            },
        },
    },
    parseFloat: 'typeof parseFloat',
    parseInt: 'typeof parseInt',
    Promise: {
        type: 'PromiseConstructor',
        get: 'typeof Promise',
    },
    Proxy: { type: 'ProxyConstructor', get: 'typeof Proxy' },
    RangeError: {
        type: 'RangeErrorConstructor',
        get: 'typeof RangeError',
        overrides: {
            prototype: { type: 'RangeError', get: 'typeof RangeError.prototype' },
        },
    },
    ReferenceError: {
        type: 'ReferenceErrorConstructor',
        get: 'typeof ReferenceError',
        overrides: {
            prototype: { type: 'ReferenceError', get: 'typeof ReferenceError.prototype' },
        },
    },
    Reflect: 'typeof Reflect',
    RegExp: {
        type: 'RegExpConstructor',
        get: 'typeof RegExp',
        overrides: {
            input: null,
            lastMatch: null,
            lastParen: null,
            leftContext: null,
            rightContext: null,
            prototype: { type: 'RegExp', get: 'typeof RegExp.prototype' },
        },
    },
    Set: {
        type: 'SetConstructor',
        get: 'typeof Set',
        overrides: {
            prototype: { type: 'typeof Set.prototype', getterType: 'Set<any>' },
        },
    },
    SetIteratorPrototype: 'IterableIterator<any>',
    SharedArrayBuffer: {
        type: 'SharedArrayBufferConstructor',
        get: 'typeof SharedArrayBuffer',
        overrides: {
            prototype: { type: 'SharedArrayBuffer', get: 'typeof SharedArrayBuffer.prototype' },
        },
    },
    String: {
        type: 'StringConstructor',
        get: 'typeof String',
    },
    StringIteratorPrototype: 'IterableIterator<string>',
    Symbol: {
        type: 'SymbolConstructor',
        get: 'typeof Symbol',
        overrides: {
            prototype: {
                type: 'typeof Symbol.prototype',
                getterType: 'symbol | Symbol',
            },
        },
    },
    SyntaxError: {
        type: 'SyntaxErrorConstructor',
        get: 'typeof SyntaxError',
        overrides: {
            prototype: { type: 'SyntaxError', get: 'typeof SyntaxError.prototype' },
        },
    },
    ThrowTypeError: '() => never',
    TypedArray: {
        type: 'TypedArrayConstructor',
        overrides: {
            prototype: {
                type: 'TypedArrayPrototype',
                getterType: 'TypedArray',
            },
        },
    },
    TypeError: {
        type: 'TypeErrorConstructor',
        get: 'typeof TypeError',
        overrides: {
            prototype: { type: 'TypeError', get: 'typeof TypeError.prototype' },
        },
    },
    Uint8Array: {
        type: 'Uint8ArrayConstructor',
        get: 'typeof Uint8Array',
        overrides: {
            prototype: { type: 'Uint8Array', get: 'typeof Uint8Array.prototype' },
        },
    },
    Uint8ClampedArray: {
        type: 'Uint8ClampedArrayConstructor',
        get: 'typeof Uint8ClampedArray',
        overrides: {
            prototype: { type: 'Uint8ClampedArray', get: 'typeof Uint8ClampedArray.prototype' },
        },
    },
    Uint16Array: {
        type: 'Uint16ArrayConstructor',
        get: 'typeof Uint16Array',
        overrides: {
            prototype: { type: 'Uint16Array', get: 'typeof Uint16Array.prototype' },
        },
    },
    Uint32Array: {
        type: 'Uint32ArrayConstructor',
        get: 'typeof Uint32Array',
        overrides: {
            prototype: { type: 'Uint32Array', get: 'typeof Uint32Array.prototype' },
        },
    },
    URIError: {
        type: 'URIErrorConstructor',
        get: 'typeof URIError',
        overrides: {
            prototype: { type: 'URIError', get: 'typeof URIError.prototype' },
        },
    },
    WeakMap: { type: 'WeakMapConstructor', get: 'typeof WeakMap' },
    WeakSet: { type: 'WeakSetConstructor', get: 'typeof WeakSet' },
};
setProto(BASE_INTRINSIC_DATA, null);
