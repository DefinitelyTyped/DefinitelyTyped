import kindOf from "kind-of";

function sampleFunction() {
    kindOf(arguments);
    // => 'arguments'
}

function* sampleGeneratorFunction() {
    yield true;
}

kindOf(undefined) === 'undefined';
kindOf(null) === 'null';
kindOf(true) === 'boolean';
kindOf(false) === 'boolean';
kindOf(Buffer.alloc(42)) === 'buffer';
kindOf(42) === 'number';
kindOf(Number.prototype) === 'number';
kindOf("str") === 'string';
kindOf(String.prototype) === 'string';
kindOf(`${42 - 23}`) === 'string';
kindOf({}) === 'object';
kindOf(Object.create(null)) === 'object';
kindOf(Object.prototype) === 'object';
kindOf(new class Test {}()) === 'object';
kindOf(new Date()) === 'date';
kindOf([1, 2, 3]) === 'array';
kindOf(/foo/) === 'regexp';
kindOf(new RegExp("foo")) === 'regexp';
kindOf(new Error("error")) === 'error';
kindOf(() => {}) === 'function';
kindOf(sampleFunction) === 'function';
kindOf(sampleGeneratorFunction) === 'generatorfunction';
kindOf(function*(): IterableIterator<any> {}) === 'generatorfunction';
kindOf(sampleGeneratorFunction()) === 'generator';
kindOf(new Map()[Symbol.iterator]()) === 'mapiterator';
kindOf(new Map().values()) === 'mapiterator';
kindOf(new Set()[Symbol.iterator]()) === 'setiterator';
kindOf(new Set().values()) === 'setiterator';
kindOf("text"[Symbol.iterator]()) === 'stringiterator';
kindOf([][Symbol.iterator]()) === 'arrayiterator';
kindOf([].entries()) === 'arrayiterator';
kindOf(Symbol("str")) === 'symbol';
kindOf(Symbol.prototype) === 'symbol';
kindOf(Promise.resolve(123)) === 'promise';
kindOf(Promise.reject(new Error("foo bar")).catch(() => {})) === 'promise';
kindOf(new Map()) === 'map';
kindOf(new WeakMap()) === 'weakmap';
kindOf(new Set()) === 'set';
kindOf(new WeakSet()) === 'weakset';
kindOf(Int8Array.of(0)) === 'int8array';
kindOf(Uint8Array.of(0)) === 'uint8array';
kindOf(Uint8ClampedArray.of(0)) === 'uint8clampedarray';
kindOf(Int16Array.of(0)) === 'int16array';
kindOf(Uint16Array.of(0)) === 'uint16array';
kindOf(Int32Array.of(0)) === 'int32array';
kindOf(Uint32Array.of(0)) === 'uint32array';
kindOf(Float32Array.of(0)) === 'float32array';
kindOf(Float64Array.of(0)) === 'float64array';
