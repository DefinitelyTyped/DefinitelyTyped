import kindOf from 'kind-of';

function sampleFunction() {
    kindOf(arguments);
    // => 'arguments'
}

function * sampleGeneratorFunction(): Iterator<boolean> {
    yield true;
  }

kindOf(undefined); // => 'undefined'
kindOf(null); // => 'null'
kindOf(true); // => 'boolean'
kindOf(false); // => 'boolean'
kindOf(Buffer.alloc(42)); // => 'buffer'
kindOf(42); // => 'number'
kindOf('str'); // => 'string'
kindOf(`${42 - 23}`); // => 'string'
kindOf({}); // => 'object'
kindOf(Object.create(null)); // => 'object'
kindOf(new (class Test { })()); // => 'object'
kindOf(new Date()); // => 'date'
kindOf([1, 2, 3]); // => 'array'
kindOf(/foo/); // => 'regexp'
kindOf(new RegExp('foo')); // => 'regexp'
kindOf(new Error('error')); // => 'error'
kindOf(() => { }); // => 'function'
kindOf(sampleFunction); // => 'function'
kindOf(sampleGeneratorFunction); // => 'generatorfunction'
kindOf(function*(): IterableIterator<any> { }); // => 'generatorfunction'
kindOf(sampleGeneratorFunction()); // => 'generator'
kindOf(new Map()[Symbol.iterator]()); // => 'mapiterator';
kindOf(new Map().values()); // => 'mapiterator'
kindOf(new Set()[Symbol.iterator]()); // => 'setiterator';
kindOf(new Set().values()); // => 'setiterator'
kindOf("text"[Symbol.iterator]()); // => 'stringiterator';
kindOf([][Symbol.iterator]()); // => 'arrayiterator';
kindOf([].entries()); // => 'arrayiterator'
kindOf(Symbol('str')); // => 'symbol'
kindOf(Symbol.prototype); // => 'symbol'
kindOf(Promise.resolve(123)); // => 'promise'
kindOf(Promise.reject(new Error('foo bar')).catch(() => {})); // => 'promise'
kindOf(new Map()); // => 'map'
kindOf(new WeakMap()); // => 'weakmap'
kindOf(new Set()); // => 'set'
kindOf(new WeakSet()); // => 'weakset'
kindOf(new Int8Array()); // => 'int8array'
kindOf(new Uint8Array()); // => 'uint8array'
kindOf(new Uint8ClampedArray()); // => 'uint8clampedarray'
kindOf(new Int16Array()); // => 'int16array'
kindOf(new Uint16Array()); // => 'uint16array'
kindOf(new Int32Array()); // => 'int32array'
kindOf(new Uint32Array()); // => 'uint32array'
kindOf(new Float32Array()); // => 'float32array'
kindOf(new Float64Array()); // => 'float64array'
