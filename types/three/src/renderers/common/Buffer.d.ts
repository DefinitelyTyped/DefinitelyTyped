import Binding from "./Binding.js";
/**
 * Represents a buffer binding type.
 *
 * @private
 * @abstract
 * @augments Binding
 */
declare class Buffer extends Binding {
    readonly isBuffer: true;
    bytesPerElement: number;
    _buffer: Float32Array | null;
    /**
     * Constructs a new buffer.
     *
     * @param {string} name - The buffer's name.
     * @param {TypedArray} [buffer=null] - The buffer.
     */
    constructor(name?: string, buffer?: Float32Array | null);
    /**
     * The buffer's byte length.
     *
     * @type {number}
     * @readonly
     */
    get byteLength(): number;
    /**
     * A reference to the internal buffer.
     *
     * @type {Float32Array}
     * @readonly
     */
    get buffer(): Float32Array | null;
    /**
     * Updates the binding.
     *
     * @return {boolean} Whether the buffer has been updated and must be
     * uploaded to the GPU.
     */
    update(): boolean;
}
export default Buffer;
