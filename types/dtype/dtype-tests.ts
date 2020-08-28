import dtype = require('dtype');

// tslint:disable: new-parens
new (dtype('Float64Array'))(0); // $ExpectType Float64Array
new (dtype('array')); // $ExpectType any[]
new (dtype('float32'))(0); // $ExpectType Float32Array
new (dtype('int16'))(0); // $ExpectType Int16Array
new (dtype('int32'))(0); // $ExpectType Int32Array
new (dtype('int8'))(0); // $ExpectType Int8Array
new (dtype('uint16'))(0); // $ExpectType Uint16Array
new (dtype('uint32'))(0); // $ExpectType Uint32Array
new (dtype('uint8_clamped'))(0); // $ExpectType Uint8ClampedArray
dtype('abc'); // $ExpectType undefined
