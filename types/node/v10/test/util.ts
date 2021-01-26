import * as util from 'util';

function testUtilTypes(
    object: unknown,
    readonlySetOrArray: ReadonlySet<any> | ReadonlyArray<any>,
    readonlyMapOrRecord: ReadonlyMap<any, any> | Record<any, any>,
) {
    if (util.types.isAnyArrayBuffer(object)) {
        const expected: ArrayBufferLike = object;
    }
    if (util.types.isArgumentsObject(object)) {
        object; // $ExpectType IArguments
    }
    if (util.types.isArrayBufferView(object)) {
        object; // $ExpectType ArrayBufferView
    }
    if (util.types.isBigInt64Array(object)) {
        object; // $ExpectType BigInt64Array
    }
    if (util.types.isBigUint64Array(object)) {
        object; // $ExpectType BigUint64Array
    }
    if (util.types.isBooleanObject(object)) {
        object; // $ExpectType Boolean
    }
    if (util.types.isBoxedPrimitive(object)) {
        object; // $ExpectType String | Number | Boolean | BigInt | Symbol
    }
    if (util.types.isDataView(object)) {
        object; // $ExpectType DataView
    }
    if (util.types.isDate(object)) {
        object; // $ExpectType Date
    }
    if (util.types.isFloat32Array(object)) {
        object; // $ExpectType Float32Array
    }
    if (util.types.isFloat64Array(object)) {
        object; // $ExpectType Float64Array
    }
    if (util.types.isGeneratorFunction(object)) {
        object; // $ExpectType GeneratorFunction
    }
    if (util.types.isGeneratorObject(object)) {
        object; // $ExpectType Generator<unknown, any, unknown>
    }
    if (util.types.isInt8Array(object)) {
        object; // $ExpectType Int8Array
    }
    if (util.types.isInt16Array(object)) {
        object; // $ExpectType Int16Array
    }
    if (util.types.isInt32Array(object)) {
        object; // $ExpectType Int32Array
    }
    if (util.types.isMap(object)) {
        object; // $ExpectType Map<any, any>

        if (util.types.isMap(readonlyMapOrRecord)) {
            readonlyMapOrRecord; // $ExpectType ReadonlyMap<any, any>
        }
    }
    if (util.types.isNativeError(object)) {
        object; // $ExpectType Error

        ([
            new EvalError(),
            new RangeError(),
            new ReferenceError(),
            new SyntaxError(),
            new TypeError(),
            new URIError(),
        ] as const).forEach((nativeError: EvalError | RangeError | ReferenceError | SyntaxError | TypeError | URIError) => {
            if (!util.types.isNativeError(nativeError)) {
                nativeError; // $ExpectType never
            }
        });
    }
    if (util.types.isNumberObject(object)) {
        object; // $ExpectType Number
    }
    if (util.types.isPromise(object)) {
        object; // $ExpectType Promise<any>
    }
    if (util.types.isRegExp(object)) {
        object; // $ExpectType RegExp
    }
    if (util.types.isSet(object)) {
        object; // $ExpectType Set<any>

        if (util.types.isSet(readonlySetOrArray)) {
            readonlySetOrArray; // $ExpectType ReadonlySet<any>
        }
    }
    if (util.types.isSharedArrayBuffer(object)) {
        object; // $ExpectType SharedArrayBuffer
    }
    if (util.types.isStringObject(object)) {
        object; // $ExpectType String
    }
    if (util.types.isSymbolObject(object)) {
        object; // $ExpectType Symbol
    }
    if (util.types.isTypedArray(object)) {
        object; // $ExpectType TypedArray
    }
    if (util.types.isUint8Array(object)) {
        object; // $ExpectType Uint8Array
    }
    if (util.types.isUint8ClampedArray(object)) {
        object; // $ExpectType Uint8ClampedArray
    }
    if (util.types.isUint16Array(object)) {
        object; // $ExpectType Uint16Array
    }
    if (util.types.isUint32Array(object)) {
        object; // $ExpectType Uint32Array
    }
    if (util.types.isWeakMap(object)) {
        object; // $ExpectType WeakMap<any, any>
    }
    if (util.types.isWeakSet(object)) {
        object; // $ExpectType WeakSet<any>
    }
}
