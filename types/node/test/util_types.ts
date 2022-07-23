import * as types from 'node:util/types';

import { createPublicKey, KeyObject, webcrypto } from 'node:crypto';

const object: unknown = {};
const readonlySetOrArray: ReadonlySet<any> | ReadonlyArray<any> = new Set();
const readonlyMapOrRecord: ReadonlyMap<any, any> | Record<any, any> = new Map();

if (types.isAnyArrayBuffer(object)) {
    const expected: ArrayBufferLike = object;
}
if (types.isArgumentsObject(object)) {
    object; // $ExpectType IArguments
}
if (types.isArrayBufferView(object)) {
    object; // $ExpectType ArrayBufferView
}
if (types.isBigInt64Array(object)) {
    object; // $ExpectType BigInt64Array
}
if (types.isBigUint64Array(object)) {
    object; // $ExpectType BigUint64Array
}
if (types.isBooleanObject(object)) {
    object; // $ExpectType Boolean
}
if (types.isBoxedPrimitive(object)) {
    // TODO: As of ts 4.3 $ExpectType errors due to order of the types (which should not matter)
    // Should investigate this some time, until then skipping this test.
    // object; // $ExpectType String | Number | Boolean | Symbol | BigInt
}
if (types.isDataView(object)) {
    object; // $ExpectType DataView
}
if (types.isDate(object)) {
    object; // $ExpectType Date
}
if (types.isFloat32Array(object)) {
    object; // $ExpectType Float32Array
}
if (types.isFloat64Array(object)) {
    object; // $ExpectType Float64Array
}
if (types.isGeneratorFunction(object)) {
    object; // $ExpectType GeneratorFunction
}
if (types.isGeneratorObject(object)) {
    object; // $ExpectType Generator<unknown, any, unknown>
}
if (types.isInt8Array(object)) {
    object; // $ExpectType Int8Array
}
if (types.isInt16Array(object)) {
    object; // $ExpectType Int16Array
}
if (types.isInt32Array(object)) {
    object; // $ExpectType Int32Array
}
if (types.isMap(object)) {
    object; // $ExpectType Map<unknown, unknown>

    if (types.isMap(readonlyMapOrRecord)) {
        readonlyMapOrRecord; // $ExpectType ReadonlyMap<any, any> || ReadonlyMap<any, any> | Map<unknown, unknown>
    }
}
if (types.isNativeError(object)) {
    object; // $ExpectType Error

    ([
        new EvalError(),
        new RangeError(),
        new ReferenceError(),
        new SyntaxError(),
        new TypeError(),
        new URIError(),
    ] as const).forEach((nativeError: EvalError | RangeError | ReferenceError | SyntaxError | TypeError | URIError) => {
        if (!types.isNativeError(nativeError)) {
            nativeError; // $ExpectType never
        }
    });
}
if (types.isNumberObject(object)) {
    object; // $ExpectType Number
}
if (types.isPromise(object)) {
    object; // $ExpectType Promise<unknown>
}
if (types.isRegExp(object)) {
    object; // $ExpectType RegExp
}
if (types.isSet(object)) {
    object; // $ExpectType Set<unknown>

    if (types.isSet(readonlySetOrArray)) {
        readonlySetOrArray; // $ExpectType ReadonlySet<any>
    }
}
if (types.isSharedArrayBuffer(object)) {
    object; // $ExpectType SharedArrayBuffer
}
if (types.isStringObject(object)) {
    object; // $ExpectType String
}
if (types.isSymbolObject(object)) {
    object; // $ExpectType Symbol
}
if (types.isTypedArray(object)) {
    object; // $ExpectType TypedArray
}
if (types.isUint8Array(object)) {
    object; // $ExpectType Uint8Array
}
if (types.isUint8ClampedArray(object)) {
    object; // $ExpectType Uint8ClampedArray
}
if (types.isUint16Array(object)) {
    object; // $ExpectType Uint16Array
}
if (types.isUint32Array(object)) {
    object; // $ExpectType Uint32Array
}
if (types.isWeakMap(object)) {
    object; // $ExpectType WeakMap<object, unknown>
}
if (types.isWeakSet(object)) {
    object; // $ExpectType WeakSet<object>
}

let b: boolean;
b = types.isBigInt64Array(15);
b = types.isBigUint64Array(15);
b = types.isModuleNamespaceObject(15);

const f = (v: any) => {
    if (types.isArrayBufferView(v)) {
        const abv: ArrayBufferView  = v;
    }
};

// tslint:disable-next-line:no-construct
const maybeBoxed: number | Number = new Number(1);
if (types.isBoxedPrimitive(maybeBoxed)) {
    const boxed: Number = maybeBoxed;
}
const maybeBoxed2: number | Number = 1;
if (!types.isBoxedPrimitive(maybeBoxed2)) {
    const boxed: number = maybeBoxed2;
}

const value: BigInt64Array | BigUint64Array | number = 1 as any;
if (types.isBigInt64Array(value)) {
    // $ExpectType BigInt64Array
    const b = value;
} else if (types.isBigUint64Array(value)) {
    // $ExpectType BigUint64Array
    const b = value;
} else {
    // $ExpectType number
    const b = value;
}

const keyObj: KeyObject | number = createPublicKey('test');
if (types.isKeyObject(keyObj)) {
    keyObj; // $ExpectType KeyObject
}

webcrypto.subtle.generateKey(
    'Algorithm', false, []
).then(cryptoKeyObj => {
    if (types.isCryptoKey(cryptoKeyObj)) {
        cryptoKeyObj; // $ExpectType CryptoKey
    } else {
        cryptoKeyObj.privateKey; // $ExpectType CryptoKey
        cryptoKeyObj.publicKey; // $ExpectType CryptoKey
    }
});
