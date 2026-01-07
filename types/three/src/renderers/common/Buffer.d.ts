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
    _updateRanges: {
        start: number;
        count: number;
    }[];
    /**
     * Constructs a new buffer.
     *
     * @param {string} name - The buffer's name.
     * @param {TypedArray} [buffer=null] - The buffer.
     */
    constructor(name?: string, buffer?: Float32Array | null);
    /**
     * The array of update ranges.
     *
     * @type {Array<{start: number, count: number}>}
     */
    get updateRanges(): {
        start: number;
        count: number;
    }[];
    /**
     * Adds an update range.
     *
     * @param {number} start - The start index.
     * @param {number} count - The number of elements.
     */
    addUpdateRange(start: number, count: number): void;
    /**
     * Clears all update ranges.
     */
    clearUpdateRanges(): void;
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
