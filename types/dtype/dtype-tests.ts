import dtype = require("dtype");

// tslint:disable: new-parens
new (dtype("Float64Array"))(0); // $ExpectType Float64Array || Float64Array<ArrayBuffer>
new (dtype("array"))(); // $ExpectType any[]
new (dtype("float32"))(0); // $ExpectType Float32Array || Float32Array<ArrayBuffer>
new (dtype("int16"))(0); // $ExpectType Int16Array || Int16Array<ArrayBuffer>
new (dtype("int32"))(0); // $ExpectType Int32Array || Int32Array<ArrayBuffer>
new (dtype("int8"))(0); // $ExpectType Int8Array || Int8Array<ArrayBuffer>
new (dtype("uint16"))(0); // $ExpectType Uint16Array || Uint16Array<ArrayBuffer>
new (dtype("uint32"))(0); // $ExpectType Uint32Array || Uint32Array<ArrayBuffer>
new (dtype("uint8_clamped"))(0); // $ExpectType Uint8ClampedArray || Uint8ClampedArray<ArrayBuffer>
dtype("abc"); // $ExpectType undefined
