type DataType =
    | "uint8"
    | "uint16"
    | "uint32"
    | "int8"
    | "int16"
    | "int32"
    | "float"
    | "float32"
    | "double"
    | "float64"
    | "arraybuffer"
    | "data"
    | "dataview"
    | "uint8_clamped"
    | "buffer";

export function malloc(n: number, dtype?: DataType): any;

export function mallocUint8(n: number): Uint8Array;
export function mallocUint16(n: number): Uint16Array;
export function mallocUint32(n: number): Uint32Array;
export function mallocUint8Clamped(n: number): Uint8ClampedArray;
export function mallocInt8(n: number): Int8Array;
export function mallocInt16(n: number): Int16Array;
export function mallocInt32(n: number): Int32Array;
export function mallocFloat(n: number): Float32Array;
export function mallocDouble(n: number): Float64Array;
export function mallocArrayBuffer(n: number): ArrayBuffer;
export function mallocDataView(n: number): DataView;
export function mallocBuffer(n: number): any;

export function free(array: any): void;

export function freeUint8(array: Uint8Array): void;
export function freeUint16(array: Uint16Array): void;
export function freeUint32(array: Uint32Array): void;
export function freeUint8Clamped(array: Uint8ClampedArray): void;
export function freeInt8(array: Int8Array): void;
export function freeInt16(array: Int16Array): void;
export function freeInt32(array: Int32Array): void;
export function freeFloat(array: Float32Array): void;
export function freeDouble(array: Float64Array): void;
export function freeArrayBuffer(buffer: ArrayBuffer): void;
export function freeDataView(view: DataView): void;
export function freeBuffer(buffer: any): void;

export function clearCache(): void;
