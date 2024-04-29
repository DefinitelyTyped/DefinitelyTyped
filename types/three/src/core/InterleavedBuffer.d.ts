import { Usage } from "../constants.js";
import { TypedArray } from "./BufferAttribute.js";
import { InterleavedBufferAttribute } from "./InterleavedBufferAttribute.js";

/**
 * **"Interleaved"** means that multiple attributes, possibly of different types, (e.g., _position, normal, uv, color_) are packed into a single array buffer.
 * An introduction into interleaved arrays can be found here: {@link https://blog.tojicode.com/2011/05/interleaved-array-basics.html | Interleaved array basics}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_points_interleaved | webgl / buffergeometry / points / interleaved}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InterleavedBuffer | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBuffer.js | Source}
 */
export class InterleavedBuffer {
    /**
     * Create a new instance of {@link InterleavedBuffer}
     * @param array A {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray | TypedArray} with a shared buffer. Stores the geometry data.
     * @param stride The number of typed-array elements per vertex. Expects a `Integer`
     */
    constructor(array: TypedArray, stride: number);

    /**
     * A {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray | TypedArray} with a shared buffer. Stores the geometry data.
     */
    array: TypedArray;

    /**
     * The number of {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray | TypedArray} elements per vertex.
     * @remarks Expects a `Integer`
     */
    stride: number;

    /**
     * Defines the intended usage pattern of the data store for optimization purposes.
     * Corresponds to the {@link BufferAttribute.usage | usage} parameter of
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData | WebGLRenderingContext.bufferData}.
     * @remarks
     * After the initial use of a buffer, its usage cannot be changed. Instead, instantiate a new one and set the desired usage before the next render.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/BufferAttributeUsage | Buffer Attribute Usage Constants} for all possible values.
     * @see {@link BufferAttribute.setUsage | setUsage}
     * @defaultValue {@link THREE.StaticDrawUsage | THREE.StaticDrawUsage}.
     */
    usage: Usage;

    /**
     * Object containing offset and count.
     * @defaultValue `{ offset: number = 0; count: number = -1 }`
     * @deprecated Will be removed in r169. Use "addUpdateRange()" instead.
     */
    updateRange: {
        /** @defaultValue `0` */
        offset: number;
        /** @defaultValue `-1` */
        count: number;
    };

    /**
     * This can be used to only update some components of stored data. Use the {@link .addUpdateRange} function to add
     * ranges to this array.
     */
    updateRanges: Array<{
        /**
         * Position at which to start update.
         */
        start: number;
        /**
         * The number of components to update.
         */
        count: number;
    }>;

    /**
     * A version number, incremented every time the {@link BufferAttribute.needsUpdate | needsUpdate} property is set to true.
     * @remarks Expects a `Integer`
     * @defaultValue `0`
     */
    version: number;

    /**
     * Gives the total number of elements in the array.
     * @remarks Expects a `Integer`
     * @defaultValue 0
     */
    count: number;

    /**
     * Flag to indicate that this attribute has changed and should be re-sent to the GPU.
     * Set this to true when you modify the value of the array.
     * @remarks Setting this to true also increments the {@link BufferAttribute.version | version}.
     * @remarks _set-only property_.
     */
    set needsUpdate(value: boolean);

    /**
     * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
     * @remarks This gets automatically assigned and shouldn't be edited.
     */
    uuid: string;

    /**
     * Calls {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set | TypedArray.set}( {@link value}, {@link offset} )
     * on the {@link BufferAttribute.array | array}.
     * @param value The source `TypedArray`.
     * @param offset index of the {@link BufferAttribute.array | array} at which to start copying. Expects a `Integer`. Default `0`.
     * @throws `RangeError` When {@link offset} is negative or is too large.
     */
    set(value: ArrayLike<number>, offset: number): this;

    /**
     * Set {@link BufferAttribute.usage | usage}
     * @remarks
     * After the initial use of a buffer, its usage cannot be changed. Instead, instantiate a new one and set the desired usage before the next render.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/BufferAttributeUsage | Buffer Attribute Usage Constants} for all possible values.
     * @see {@link BufferAttribute.usage | usage}
     * @param value Corresponds to the {@link BufferAttribute.usage | usage} parameter of
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData | WebGLRenderingContext.bufferData}.
     */
    setUsage(value: Usage): this;

    /**
     * Adds a range of data in the data array to be updated on the GPU. Adds an object describing the range to the
     * {@link .updateRanges} array.
     */
    addUpdateRange(start: number, count: number): void;

    /**
     * Clears the {@link .updateRanges} array.
     */
    clearUpdateRanges(): void;

    /**
     * Copies another {@link InterleavedBuffer} to this {@link InterleavedBuffer} instance.
     * @param source
     */
    copy(source: InterleavedBuffer): this;

    /**
     * Copies data from {@link attribute}[{@link index2}] to {@link InterleavedBuffer.array | array}[{@link index1}].
     * @param index1 Expects a `Integer`
     * @param attribute
     * @param index2 Expects a `Integer`
     */
    copyAt(index1: number, attribute: InterleavedBufferAttribute, index2: number): this;

    /**
     * Creates a clone of this {@link InterleavedBuffer}.
     * @param data This object holds shared array buffers required for properly cloning geometries with interleaved attributes.
     */
    clone(data: {}): InterleavedBuffer;

    /**
     * Serializes this {@link InterleavedBuffer}.
     * Converting to {@link https://github.com/mrdoob/three.js/wiki/JSON-Geometry-format-4 | JSON Geometry format v4},
     * @param data This object holds shared array buffers required for properly serializing geometries with interleaved attributes.
     */
    toJSON(data: {}): {
        uuid: string;
        buffer: string;
        type: string;
        stride: number;
    };
}
