#!/usr/bin/env ts-node-script
/// <reference types="node"/>
import path = require('path');
import fs = require('fs');

const OUT_FILE_PATH = path.resolve(__dirname, '..', 'GetIntrinsic.d.ts');

const hasSymbols = true;
const { getPrototypeOf: getProto, getOwnPropertyDescriptor: $gOPD } = Reflect as {
    getPrototypeOf(target: object): object | null;
    getOwnPropertyDescriptor<T extends object, P extends PropertyKey>(
        target: T,
        propertyKey: P,
    ): (P extends keyof T ? TypedPropertyDescriptor<T[P]> : PropertyDescriptor) | undefined;
};
const { getOwnPropertyNames: $gOPN } = Object;

function isObject(value: unknown): value is object {
    if (value === undefined || value === null) return false;
    return typeof value === 'object' || typeof value === 'function';
}

// tslint:disable: only-arrow-functions space-before-function-paren
const ThrowTypeError = (function () {
    return $gOPD(arguments, 'callee')!.get;
})();

// tslint:disable: no-async-without-await
const generator = function* () {};
const asyncFn = async function () {};
const asyncGen = async function* () {};
// tslint:enable

const generatorFunction = generator ? /** @type {GeneratorFunctionConstructor} */ generator.constructor : undefined;
const generatorFunctionPrototype = generatorFunction ? generatorFunction.prototype : undefined;
const generatorPrototype = generatorFunctionPrototype ? generatorFunctionPrototype.prototype : undefined;

const asyncFunction = asyncFn ? /** @type {FunctionConstructor} */ asyncFn.constructor : undefined;

const asyncGenFunction = asyncGen ? /** @type {AsyncGeneratorFunctionConstructor} */ asyncGen.constructor : undefined;
const asyncGenFunctionPrototype = asyncGenFunction ? asyncGenFunction.prototype : undefined;
const asyncGenPrototype = asyncGenFunctionPrototype ? asyncGenFunctionPrototype.prototype : undefined;

// tslint:disable-next-line: ban-types
const TypedArray = typeof Uint8Array === 'undefined' ? undefined : (getProto(Uint8Array) as Function);

interface BaseIntrinsic {
    getterType?: string;
    get?: string;
    overrides?: { [property: string]: string | Override | null };
}

interface Override extends BaseIntrinsic {
    type?: string;
}

interface Intrinsic extends Override {
    type: string;
}

const $ObjectPrototype = Object.prototype;
const $ArrayIteratorPrototype = hasSymbols ? (getProto([][Symbol.iterator]()) as IterableIterator<any>) : undefined;

// prettier-ignore
const BASE_INTRINSICS: { [intrinsic: string]: unknown } = {
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

let override: Intrinsic;
const BASE_INTRINSIC_DATA: { [intrinsic: string]: string | Intrinsic } = {
    '%Array%': { type: 'ArrayConstructor', get: 'typeof Array' },
    '%ArrayBuffer%': {
        type: 'ArrayBufferConstructor',
        get: 'typeof ArrayBuffer',
        overrides: {
            prototype: override = { type: 'ArrayBuffer', get: 'typeof ArrayBuffer.prototype' },
        },
    },
    '%ArrayBufferPrototype%': override,
    '%ArrayIteratorPrototype%': 'IterableIterator<any>',
    '%ArrayPrototype%': 'typeof Array.prototype',
    '%ArrayProto_entries%': 'typeof Array.prototype.entries',
    '%ArrayProto_forEach%': 'typeof Array.prototype.forEach',
    '%ArrayProto_keys%': 'typeof Array.prototype.keys',
    '%ArrayProto_values%': 'typeof Array.prototype.values',
    '%AsyncFromSyncIteratorPrototype%': {
        type: 'AsyncGenerator<any>',
        overrides: {
            next: "AsyncGenerator<any>['next']",
            return: "AsyncGenerator<any>['return']",
            throw: "AsyncGenerator<any>['throw']",
        },
    },
    '%AsyncFunction%': { type: 'FunctionConstructor', get: 'typeof Function' },
    '%AsyncFunctionPrototype%': 'typeof Function.prototype',
    '%AsyncGenerator%': override = { type: 'AsyncGeneratorFunction', overrides: { prototype: 'AsyncGenerator<any>' } },
    '%AsyncGeneratorFunction%': { type: 'AsyncGeneratorFunctionConstructor', overrides: { prototype: override } },
    '%AsyncGeneratorPrototype%': 'AsyncGenerator<any>',
    '%AsyncIteratorPrototype%': 'AsyncIterable<any>',
    '%Atomics%': { type: 'Atomics', get: 'typeof Atomics' },
    '%BigInt64Array%': {
        type: 'BigInt64ArrayConstructor',
        get: 'typeof BigInt64Array',
        overrides: { prototype: { type: 'BigInt64Array', get: 'typeof BigInt64Array.prototype' } },
    },
    '%BigUint64Array%': {
        type: 'BigUint64ArrayConstructor',
        get: 'typeof BigUint64Array',
        overrides: { prototype: { type: 'BigUint64Array', get: 'typeof BigUint64Array.prototype' } },
    },
    '%Boolean%': { type: 'BooleanConstructor', get: 'typeof Boolean' },
    '%BooleanPrototype%': 'typeof Boolean.prototype',
    '%DataView%': {
        type: 'DataViewConstructor',
        get: 'typeof DataView',
        overrides: {
            prototype: override = { type: 'DataView', get: 'typeof DataView.prototype' },
        },
    },
    '%DataViewPrototype%': override,
    '%Date%': {
        type: 'DateConstructor',
        get: 'typeof Date',
        overrides: {
            prototype: override = {
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
    '%DatePrototype%': override,
    '%decodeURI%': 'typeof decodeURI',
    '%decodeURIComponent%': 'typeof decodeURIComponent',
    '%encodeURI%': 'typeof encodeURI',
    '%encodeURIComponent%': 'typeof encodeURIComponent',
    '%Error%': {
        type: 'ErrorConstructor',
        get: 'typeof Error',
        overrides: {
            captureStackTrace: null,
            prepareStackTrace: null,
            stackTraceLimit: null,
            prototype: override = { type: 'Error', get: 'typeof Error.prototype' },
        },
    },
    '%ErrorPrototype%': override,
    '%eval%': 'typeof eval',
    '%EvalError%': {
        type: 'EvalErrorConstructor',
        get: 'typeof EvalError',
        overrides: {
            prototype: override = { type: 'EvalError', get: 'typeof EvalError.prototype' },
        },
    },
    '%EvalErrorPrototype%': override,
    '%Float32Array%': {
        type: 'Float32ArrayConstructor',
        get: 'typeof Float32Array',
        overrides: {
            prototype: override = { type: 'Float32Array', get: 'typeof Float32Array.prototype' },
        },
    },
    '%Float32ArrayPrototype%': override,
    '%Float64Array%': {
        type: 'Float64ArrayConstructor',
        get: 'typeof Float64Array',
        overrides: {
            prototype: override = { type: 'Float64Array', get: 'typeof Float64Array.prototype' },
        },
    },
    '%Float64ArrayPrototype%': override,
    '%Function%': {
        type: 'FunctionConstructor',
        get: 'typeof Function',
        overrides: {
            prototype: override = {
                type: 'typeof Function.prototype',
                overrides: { arguments: null, callee: null, caller: null },
            },
        },
    },
    '%FunctionPrototype%': override,
    '%Generator%': override = { type: 'GeneratorFunction', overrides: { prototype: 'Generator<any>' } },
    '%GeneratorFunction%': { type: 'GeneratorFunctionConstructor', overrides: { prototype: override } },
    '%GeneratorPrototype%': 'Generator<any>',
    '%Int8Array%': {
        type: 'Int8ArrayConstructor',
        get: 'typeof Int8Array',
        overrides: {
            prototype: override = { type: 'Int8Array', get: 'typeof Int8Array.prototype' },
        },
    },
    '%Int8ArrayPrototype%': override,
    '%Int16Array%': {
        type: 'Int16ArrayConstructor',
        get: 'typeof Int16Array',
        overrides: {
            prototype: override = { type: 'Int16Array', get: 'typeof Int16Array.prototype' },
        },
    },
    '%Int16ArrayPrototype%': override,
    '%Int32Array%': {
        type: 'Int32ArrayConstructor',
        get: 'typeof Int32Array',
        overrides: {
            prototype: override = { type: 'Int32Array', get: 'typeof Int32Array.prototype' },
        },
    },
    '%Int32ArrayPrototype%': override,
    '%isFinite%': 'typeof isFinite',
    '%isNaN%': 'typeof isNaN',
    '%IteratorPrototype%': 'Iterable<any>',
    '%JSON%': { type: 'JSON', get: 'typeof JSON' },
    '%JSONParse%': 'typeof JSON.parse',
    '%Map%': {
        type: 'MapConstructor',
        get: 'typeof Map',
        overrides: {
            prototype: override = { type: 'typeof Map.prototype', getterType: 'Map<any, any>' },
        },
    },
    '%MapIteratorPrototype%': 'IterableIterator<any>',
    '%MapPrototype%': override,
    '%Math%': { type: 'Math', get: 'typeof Math' },
    '%Number%': { type: 'NumberConstructor', get: 'typeof Number' },
    '%NumberPrototype%': 'typeof Number.prototype',
    '%Object%': {
        type: 'ObjectConstructor',
        get: 'typeof Object',
        overrides: {
            prototype: override = {
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
    '%ObjectPrototype%': override,
    '%ObjProto_toString%': 'typeof Object.prototype.toString',
    '%ObjProto_valueOf%': 'typeof Object.prototype.valueOf',
    '%parseFloat%': 'typeof parseFloat',
    '%parseInt%': 'typeof parseInt',
    '%Promise%': {
        type: 'PromiseConstructor',
        get: 'typeof Promise',
        overrides: {
            // TODO: Delete in v1.17:
            allSettled: null,
        },
    },
    '%PromisePrototype%': 'typeof Promise.prototype',
    '%PromiseProto_then%': 'typeof Promise.prototype.then',
    '%Promise_all%': 'typeof Promise.all',
    '%Promise_reject%': 'typeof Promise.reject',
    '%Promise_resolve%': 'typeof Promise.resolve',
    '%Proxy%': { type: 'ProxyConstructor', get: 'typeof Proxy' },
    '%RangeError%': {
        type: 'RangeErrorConstructor',
        get: 'typeof RangeError',
        overrides: {
            prototype: override = { type: 'RangeError', get: 'typeof RangeError.prototype' },
        },
    },
    '%RangeErrorPrototype%': override,
    '%ReferenceError%': {
        type: 'ReferenceErrorConstructor',
        get: 'typeof ReferenceError',
        overrides: {
            prototype: override = { type: 'ReferenceError', get: 'typeof ReferenceError.prototype' },
        },
    },
    '%ReferenceErrorPrototype%': override,
    '%Reflect%': 'typeof Reflect',
    '%RegExp%': {
        type: 'RegExpConstructor',
        get: 'typeof RegExp',
        overrides: {
            input: null,
            lastMatch: null,
            lastParen: null,
            leftContext: null,
            rightContext: null,
            prototype: override = { type: 'RegExp', get: 'typeof RegExp.prototype' },
        },
    },
    '%RegExpPrototype%': override,
    '%Set%': {
        type: 'SetConstructor',
        get: 'typeof Set',
        overrides: {
            prototype: override = { type: 'typeof Set.prototype', getterType: 'Set<any>' },
        },
    },
    '%SetIteratorPrototype%': 'IterableIterator<any>',
    '%SetPrototype%': override,
    '%SharedArrayBuffer%': {
        type: 'SharedArrayBufferConstructor',
        get: 'typeof SharedArrayBuffer',
        overrides: {
            prototype: override = { type: 'SharedArrayBuffer', get: 'typeof SharedArrayBuffer.prototype' },
        },
    },
    '%SharedArrayBufferPrototype%': override,
    '%String%': {
        type: 'StringConstructor',
        get: 'typeof String',
        overrides: {
            prototype: override = {
                type: 'typeof String.prototype',
                overrides: {
                    // TODO: Delete in v1.17:
                    matchAll: null,
                },
            },
        },
    },
    '%StringIteratorPrototype%': 'IterableIterator<string>',
    '%StringPrototype%': override,
    '%Symbol%': {
        type: 'SymbolConstructor',
        get: 'typeof Symbol',
        overrides: {
            prototype: override = { type: 'typeof Symbol.prototype', getterType: 'symbol | Symbol' },
            // TODO: Delete in v1.17:
            matchAll: null,
        },
    },
    '%SymbolPrototype%': override,
    '%SyntaxError%': {
        type: 'SyntaxErrorConstructor',
        get: 'typeof SyntaxError',
        overrides: {
            prototype: override = { type: 'SyntaxError', get: 'typeof SyntaxError.prototype' },
        },
    },
    '%SyntaxErrorPrototype%': override,
    '%ThrowTypeError%': '() => never',
    // TODO: Add types for %TypedArray% and %TypedArrayPrototype%
    '%TypeError%': {
        type: 'TypeErrorConstructor',
        get: 'typeof TypeError',
        overrides: {
            prototype: override = { type: 'TypeError', get: 'typeof TypeError.prototype' },
        },
    },
    '%TypeErrorPrototype%': override,
    '%Uint8Array%': {
        type: 'Uint8ArrayConstructor',
        get: 'typeof Uint8Array',
        overrides: {
            prototype: override = { type: 'Uint8Array', get: 'typeof Uint8Array.prototype' },
        },
    },
    '%Uint8ArrayPrototype%': override,
    '%Uint8ClampedArray%': {
        type: 'Uint8ClampedArrayConstructor',
        get: 'typeof Uint8ClampedArray',
        overrides: {
            prototype: override = { type: 'Uint8ClampedArray', get: 'typeof Uint8ClampedArray.prototype' },
        },
    },
    '%Uint8ClampedArrayPrototype%': override,
    '%Uint16Array%': {
        type: 'Uint16ArrayConstructor',
        get: 'typeof Uint16Array',
        overrides: {
            prototype: override = { type: 'Uint16Array', get: 'typeof Uint16Array.prototype' },
        },
    },
    '%Uint16ArrayPrototype%': override,
    '%Uint32Array%': {
        type: 'Uint32ArrayConstructor',
        get: 'typeof Uint32Array',
        overrides: {
            prototype: override = { type: 'Uint32Array', get: 'typeof Uint32Array.prototype' },
        },
    },
    '%Uint32ArrayPrototype%': override,
    '%URIError%': {
        type: 'URIErrorConstructor',
        get: 'typeof URIError',
        overrides: {
            prototype: override = { type: 'URIError', get: 'typeof URIError.prototype' },
        },
    },
    '%URIErrorPrototype%': override,
    '%WeakMap%': { type: 'WeakMapConstructor', get: 'typeof WeakMap' },
    '%WeakMapPrototype%': 'typeof WeakMap.prototype',
    '%WeakSet%': { type: 'WeakSetConstructor', get: 'typeof WeakSet' },
    '%WeakSetPrototype%': 'typeof WeakSet.prototype',
};

interface NestedIntrinsic extends Intrinsic {
    isGetter: boolean;
    propertyName: string;
    parentPath: string;
    parentType: string;
    parentGetterType?: string;
    value: unknown;
}

const nestedIntrinsics: {
    [intrinsic: string]: NestedIntrinsic;
} = {};

function appendType(parentType: string, propertyName: string) {
    if (parentType.startsWith('typeof ') && !parentType.includes('[')) {
        return `${parentType}.${propertyName}`;
    }
    return `${parentType}['${propertyName}']`;
}

interface PrintData extends BaseIntrinsic {
    isGetter?: boolean;
}

const GENERATED_MARKER = '// ------------------------ >8 ------------------------';

const fileHead = (() => {
    let fh = fs.readFileSync(OUT_FILE_PATH, { encoding: 'utf-8' });
    fh = fh.substring(0, fh.indexOf(`\n${GENERATED_MARKER}`));
    return fh;
})();

const outStream = fs.createWriteStream(OUT_FILE_PATH, { encoding: 'utf-8' });
outStream.write(fileHead);

function printIntrinsic(
    {
        intrinsicName,
        type,
        value,
        parentPath = '',
        parentType = 'unknown',
        parentGetterType = '',
        data,
    }: {
        intrinsicName: string;
        type: string;
        value?: unknown;
        parentPath?: string;
        parentType?: string;
        parentGetterType?: string;
        data?: PrintData;
    },
    skipNested: boolean = false,
) {
    const path = parentPath ? `${parentPath}.${intrinsicName}` : intrinsicName;
    const overrides = data?.overrides;
    const get = data?.get;
    const isGetter = data?.isGetter || false;

    outStream.write(`        '%${path}%': ${isGetter ? `(this: ${parentGetterType || parentType}) => ` : ''}${type};
`);

    const propertyNames = isObject(value) && type !== 'any' && type !== 'unknown' ? $gOPN(value) : [];
    for (const propertyName of propertyNames) {
        if (propertyName === 'constructor') {
            continue;
        }

        if (typeof value === 'function' && (propertyName === 'length' || propertyName === 'name')) {
            continue;
        }

        if (
            // tslint:disable-next-line: strict-comparisons
            value === RegExp &&
            propertyName.startsWith('$')
        ) {
            continue;
        }

        const desc = $gOPD(value as object, propertyName);
        if (!desc) continue;

        const isGetter = 'get' in desc;
        const propertyValue = isGetter ? desc.get : desc.value;

        let override = overrides?.[propertyName];
        if (override === null) {
            continue;
        }

        let propertyType;
        if (typeof override === 'string') {
            propertyType = override;
            override = undefined;
        } else {
            propertyType = override?.type || appendType(get || type, propertyName);
        }

        if (skipNested) {
            nestedIntrinsics[`${path}.${propertyName}`] = {
                ...override,
                isGetter,
                type: propertyType,
                value: propertyValue,
                parentPath: path,
                parentType: type,
                parentGetterType: data?.getterType,
                propertyName,
            };
        } else {
            printIntrinsic({
                intrinsicName: propertyName,
                type: propertyType,
                value: propertyValue,
                parentPath: path,
                parentType: type,
                parentGetterType: data?.getterType,
                data: {
                    ...override,
                    isGetter,
                },
            });
        }
    }

    let overrideNames: string[];
    if (
        overrides &&
        (overrideNames = $gOPN(overrides).filter((overrideName) => {
            return !propertyNames.includes(overrideName);
        })).length > 0
    ) {
        for (const propertyName of overrideNames) {
            // tslint:disable-next-line: no-null-undefined-union
            let override: typeof overrides[keyof typeof overrides] | undefined = overrides[propertyName];
            if (override === null) {
                continue;
            }

            let propertyType;
            if (typeof override === 'string') {
                propertyType = override;
                override = undefined;
            } else {
                propertyType = override?.type || appendType(get || type, propertyName);
            }

            if (skipNested) {
                nestedIntrinsics[`${path}.${propertyName}`] = {
                    ...override,
                    isGetter,
                    type: propertyType,
                    value: undefined,
                    parentPath: path,
                    parentType: type,
                    parentGetterType: data?.getterType,
                    propertyName,
                };
            } else {
                printIntrinsic({
                    intrinsicName: propertyName,
                    type: propertyType,
                    parentPath: path,
                    parentType: type,
                    parentGetterType: data?.getterType,
                    data: {
                        ...override,
                        isGetter,
                    },
                });
            }
        }
    }
}

outStream.write(`
${GENERATED_MARKER}
// autogenerated by scripts/collect-intrinsics.ts
// do not edit! ${new Date().toISOString()}

// tslint:disable: ban-types
declare namespace GetIntrinsic {
    interface Intrinsics {
`);

for (const intrinsicName of $gOPN(BASE_INTRINSICS)) {
    let data: string | Intrinsic | undefined = BASE_INTRINSIC_DATA[intrinsicName];
    const baseName = intrinsicName.slice(1, -1);

    let type: string;
    if (typeof data === 'string') {
        type = data;
        data = undefined;
    } else {
        type = data?.type || 'unknown';
    }

    printIntrinsic(
        {
            intrinsicName: baseName,
            type,
            value: BASE_INTRINSICS[intrinsicName],
            data,
        },
        true,
    );
}

outStream.write('    }\n');

const nestedIntrinsicNames = $gOPN(nestedIntrinsics);
if (nestedIntrinsicNames.length > 0) {
    outStream.write(`
    interface Intrinsics {
`);

    for (const intrinsicName of nestedIntrinsicNames) {
        const data = nestedIntrinsics[intrinsicName];
        const { propertyName, type, value, parentType, parentPath, parentGetterType } = data;
        printIntrinsic({
            intrinsicName: propertyName,
            type,
            value,
            parentType,
            parentPath,
            parentGetterType,
            data,
        });
    }

    outStream.write('    }\n');
}

outStream.write('}\n');
