import { BufferAttribute, TypedArray } from './BufferAttribute.js';
import { InterleavedBuffer } from './InterleavedBuffer.js';
import { Matrix4 } from './../math/Matrix4.js';
import { Matrix } from './../math/Matrix3.js';

/**
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InterleavedBufferAttribute | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBufferAttribute.js | Source}
 */
export class InterleavedBufferAttribute {
    /**
     * Create a new instance of {@link THREE.InterleavedBufferAttribute | InterleavedBufferAttribute}.
     * @param interleavedBuffer
     * @param itemSize
     * @param offset
     * @param normalized Default `false`.
     */
    constructor(interleavedBuffer: InterleavedBuffer, itemSize: number, offset: number, normalized?: boolean);

    /**
     * Optional name for this attribute instance.
     * @defaultValue `''`
     */
    name: string;

    /**
     * The {@link InterleavedBuffer | InterleavedBuffer} instance passed in the constructor.
     */
    data: InterleavedBuffer;

    /**
     * How many values make up each item.
     * @remarks Expects a `Integer`
     */
    itemSize: number;

    /**
     * The offset in the underlying array buffer where an item starts.
     * @remarks Expects a `Integer`
     */
    offset: number;

    /**
     * @defaultValue `false`
     */
    normalized: boolean;

    /**
     * The value of {@link data | .data}.{@link InterleavedBuffer.count | count}.
     * If the buffer is storing a 3-component item (such as a _position, normal, or color_), then this will count the number of such items stored.
     * @remarks _get-only property_.
     * @remarks Expects a `Integer`
     */
    get count(): number;

    /**
     * The value of {@link InterleavedBufferAttribute.data | data}.{@link InterleavedBuffer.array | array}.
     * @remarks _get-only property_.
     */
    get array(): TypedArray;

    /**
     * Flag to indicate that the {@link data | .data} ({@link InterleavedBuffer}) attribute has changed and should be re-sent to the GPU.
     * @remarks Setting this to have the same result of setting true also increments the {@link InterleavedBuffer.needsUpdate | InterleavedBuffer.needsUpdate} of {@link data | .data}.
     * @remarks Setting this to true also increments the {@link InterleavedBuffer.version | InterleavedBuffer.version}.
     * @remarks _set-only property_.
     */
    set needsUpdate(value: boolean);

    /**
     * Read-only flag to check if a given object is of type {@link InterleavedBufferAttribute}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isInterleavedBufferAttribute: true;

    /**
     * Applies matrix {@link Matrix4 | m} to every Vector3 element of this InterleavedBufferAttribute.
     * @param m
     */
    applyMatrix4(m: Matrix4): this;

    /**
     * Applies normal matrix {@link Matrix3 | m} to every Vector3 element of this InterleavedBufferAttribute.
     * @param m
     */
    applyNormalMatrix(matrix: Matrix): this;

    /**
     * Applies matrix {@link Matrix4 | m} to every Vector3 element of this InterleavedBufferAttribute, interpreting the elements as a direction vectors.
     * @param m
     */
    transformDirection(matrix: Matrix): this;

    /**
     * Returns the x component of the item at the given index.
     * @param index Expects a `Integer`
     */
    getX(index: number): number;

    /**
     * Sets the x component of the item at the given index.
     * @param index Expects a `Integer`
     * @param x Expects a `Float`
     */
    setX(index: number, x: number): this;

    /**
     * Returns the y component of the item at the given index.
     * @param index Expects a `Integer`
     */
    getY(index: number): number;

    /**
     * Sets the y component of the item at the given index.
     * @param index Expects a `Integer`
     * @param y Expects a `Float`
     */
    setY(index: number, y: number): this;

    /**
     * Returns the z component of the item at the given index.
     * @param index Expects a `Integer`
     */
    getZ(index: number): number;

    /**
     * Sets the z component of the item at the given index.
     * @param index Expects a `Integer`
     * @param z Expects a `Float`
     */
    setZ(index: number, z: number): this;

    /**
     * Returns the w component of the item at the given index.
     * @param index Expects a `Integer`
     */
    getW(index: number): number;

    /**
     * Sets the w component of the item at the given index.
     * @param index Expects a `Integer`
     * @param w Expects a `Float`
     */
    setW(index: number, z: number): this;

    /**
     * Sets the x and y components of the item at the given index.
     * @param index Expects a `Integer`
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     */
    setXY(index: number, x: number, y: number): this;
    /**
     * Sets the x, y and z components of the item at the given index.
     * @param index Expects a `Integer`
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     * @param z Expects a `Float`
     */
    setXYZ(index: number, x: number, y: number, z: number): this;

    /**
     * Sets the x, y, z and w components of the item at the given index.
     * @param index Expects a `Integer`
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     * @param z Expects a `Float`
     * @param w Expects a `Float`
     */
    setXYZW(index: number, x: number, y: number, z: number, w: number): this;

    /**
     * Creates a clone of this {@link InterleavedBufferAttribute}.
     * @param data This object holds shared array buffers required for properly cloning geometries with interleaved attributes.
     */
    clone(data?: {}): BufferAttribute;

    /**
     * Serializes this {@link InterleavedBufferAttribute}.
     * Converting to {@link https://github.com/mrdoob/three.js/wiki/JSON-Geometry-format-4 | JSON Geometry format v4},
     * @param data This object holds shared array buffers required for properly serializing geometries with interleaved attributes.
     */
    toJSON(data?: {}): {
        isInterleavedBufferAttribute: true;
        itemSize: number;
        data: string;
        offset: number;
        normalized: boolean;
    };
}
