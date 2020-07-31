// Type definitions for dtype 2.0
// Project: https://github.com/shama/dtype
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.2

/**
 * Return a data type from a string representing the data type.
 */
declare function dtype(type: 'int8'): Int8ArrayConstructor;
declare function dtype(type: 'int16'): Int16ArrayConstructor;
declare function dtype(type: 'int32'): Int32ArrayConstructor;
declare function dtype(type: 'uint8'): Uint8ArrayConstructor;
declare function dtype(type: 'uint16'): Uint16ArrayConstructor;
declare function dtype(type: 'uint32'): Uint32ArrayConstructor;
declare function dtype(type: 'uint32'): Uint32ArrayConstructor;
declare function dtype(type: 'float32'): Float32ArrayConstructor;
declare function dtype(type: 'Float64Array'): Float64ArrayConstructor;
declare function dtype(type: 'uint8_clamped'): Uint8ClampedArrayConstructor;
declare function dtype(type: 'array'): ArrayConstructor;
declare function dtype(type: any): undefined;

export = dtype;
