/// <reference types="node" />

import dtype = require('dtype');

// tslint:disable: new-parens
new (dtype('Float64Array')); // $ExpectType Float64Array
new (dtype('array')); // $ExpectType any[]
new (dtype('float32')); // $ExpectType Float32Array
new (dtype('int16')); // $ExpectType Int16Array
new (dtype('int32')); // $ExpectType Int32Array
new (dtype('int8')); // $ExpectType Int8Array
new (dtype('uint16')); // $ExpectType Uint16Array
new (dtype('uint32')); // $ExpectType Uint32Array
new (dtype('uint8_clamped')); // $ExpectType Uint8ClampedArray
dtype('abc'); // $ExpectType undefined
