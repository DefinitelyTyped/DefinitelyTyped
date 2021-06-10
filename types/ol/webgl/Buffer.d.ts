/**
 * Used to describe the intended usage for the data: STATIC_DRAW, STREAM_DRAW
 * or DYNAMIC_DRAW.
 */
export enum BufferUsage {
    STATIC_DRAW = 35044,
    STREAM_DRAW = 35040,
    DYNAMIC_DRAW = 35048,
}
export default class WebGLArrayBuffer {
    constructor(type: number, opt_usage?: number);
    /**
     * Populates the buffer with an array of the given size (all values will be zeroes).
     */
    fromArray(array: number[]): void;
    /**
     * Populates the buffer with a raw binary array buffer.
     */
    fromArrayBuffer(buffer: ArrayBuffer): void;
    /**
     * Will return null if the buffer was not initialized
     */
    getArray(): Float32Array | Uint32Array;
    /**
     * Will return 0 if the buffer is not initialized
     */
    getSize(): number;
    getType(): number;
    getUsage(): number;
    /**
     * Populates the buffer with an array of the given size (all values will be zeroes).
     */
    ofSize(size: number): void;
}
/**
 * Returns a typed array constructor based on the given buffer type
 */
export function getArrayClassForType(type: number): Float32ArrayConstructor | Uint32ArrayConstructor;
