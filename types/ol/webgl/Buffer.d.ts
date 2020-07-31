export enum BufferUsage {
    STATIC_DRAW = 35044,
    STREAM_DRAW = 35040,
    DYNAMIC_DRAW = 35048,
}
export default class WebGLArrayBuffer {
    constructor(type: number, opt_usage?: number);
    fromArray(array: number[]): void;
    fromArrayBuffer(buffer: ArrayBuffer): void;
    getArray(): Float32Array | Uint32Array;
    getSize(): number;
    getType(): number;
    getUsage(): number;
    ofSize(size: number): void;
}
export function getArrayClassForType(type: number): Float32ArrayConstructor | Uint32ArrayConstructor;
