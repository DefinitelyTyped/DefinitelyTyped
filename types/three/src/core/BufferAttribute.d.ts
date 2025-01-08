import { AttributeGPUType, Usage } from "../constants.js";
import { Matrix3 } from "../math/Matrix3.js";
import { Matrix4 } from "../math/Matrix4.js";

export type TypedArray =
    | Int8Array
    | Uint8Array
    | Uint8ClampedArray
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array
    | Float32Array
    | Float64Array;

export interface BufferAttributeJSON {
    itemSize: number;
    type: string;
    array: number[];
    normalized: boolean;

    name?: string;
    usage?: Usage;
}

/**
 * This class stores data for an attribute (such as vertex positions, face indices, normals, colors, UVs, and any custom attributes )
 * associated with a {@link THREE.BufferGeometry | BufferGeometry}, which allows for more efficient passing of data to the GPU
 * @remarks
 * When working with _vector-like_ data, the _`.fromBufferAttribute( attribute, index )`_ helper methods on
 * {@link THREE.Vector2.fromBufferAttribute | Vector2},
 * {@link THREE.Vector3.fromBufferAttribute | Vector3},
 * {@link THREE.Vector4.fromBufferAttribute | Vector4}, and
 * {@link THREE.Color.fromBufferAttribute | Color} classes may be helpful.
 * @see {@link THREE.BufferGeometry | BufferGeometry} for details and a usage examples.
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry | WebGL / BufferGeometry - Clean up Memory}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/BufferAttribute | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
export class BufferAttribute {
    /**
     * This creates a new {@link THREE.GLBufferAttribute | GLBufferAttribute} object.
     * @param array Must be a `TypedArray`. Used to instantiate the buffer.
     * This array should have `itemSize * numVertices` elements, where numVertices is the number of vertices in the associated {@link THREE.BufferGeometry | BufferGeometry}.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     * @throws `TypeError` When the {@link array} is not a `TypedArray`;
     */
    constructor(array: TypedArray, itemSize: number, normalized?: boolean);

    /**
     * Optional name for this attribute instance.
     * @defaultValue ''
     */
    name: string;

    /**
     * The {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray | TypedArray} holding data stored in the buffer.
     * @returns `TypedArray`
     */
    array: TypedArray;

    /**
     * The length of vectors that are being stored in the {@link BufferAttribute.array | array}.
     * @remarks Expects a `Integer`
     */
    itemSize: number;

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
     * Configures the bound GPU type for use in shaders. Either {@link FloatType} or {@link IntType}, default is {@link FloatType}.
     *
     * Note: this only has an effect for integer arrays and is not configurable for float arrays. For lower precision
     * float types, see https://threejs.org/docs/#api/en/core/bufferAttributeTypes/BufferAttributeTypes.
     */
    gpuType: AttributeGPUType;

    /**
     * This can be used to only update some components of stored vectors (for example, just the component related to
     * color). Use the {@link .addUpdateRange} function to add ranges to this array.
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
     * Indicates how the underlying data in the buffer maps to the values in the GLSL shader code.
     * @see `constructor` above for details.
     * @defaultValue `false`
     */
    normalized: boolean;

    /**
     * Represents the number of items this buffer attribute stores. It is internally computed by dividing the
     * {@link BufferAttribute.array | array}'s length by the {@link BufferAttribute.itemSize | itemSize}. Read-only
     * property.
     */
    readonly count: number;

    /**
     * Flag to indicate that this attribute has changed and should be re-sent to the GPU.
     * Set this to true when you modify the value of the array.
     * @remarks Setting this to true also increments the {@link BufferAttribute.version | version}.
     * @remarks _set-only property_.
     */
    set needsUpdate(value: boolean);

    /**
     * Read-only flag to check if a given object is of type {@link BufferAttribute}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isBufferAttribute: true;

    /**
     * A callback function that is executed after the Renderer has transferred the attribute array data to the GPU.
     */
    onUploadCallback: () => void;

    /**
     * Sets the value of the {@link onUploadCallback} property.
     * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry | WebGL / BufferGeometry} this is used to free memory after the buffer has been transferred to the GPU.
     * @see {@link onUploadCallback}
     * @param callback function that is executed after the Renderer has transferred the attribute array data to the GPU.
     */
    onUpload(callback: () => void): this;

    /**
     * Set {@link BufferAttribute.usage | usage}
     * @remarks
     * After the initial use of a buffer, its usage cannot be changed. Instead, instantiate a new one and set the desired usage before the next render.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/BufferAttributeUsage | Buffer Attribute Usage Constants} for all possible values.
     * @see {@link BufferAttribute.usage | usage}
     * @param value Corresponds to the {@link BufferAttribute.usage | usage} parameter of
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData | WebGLRenderingContext.bufferData}.
     */
    setUsage(usage: Usage): this;

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
     * @returns a copy of this {@link BufferAttribute}.
     */
    clone(): BufferAttribute;

    /**
     * Copies another {@link BufferAttribute} to this {@link BufferAttribute}.
     * @param bufferAttribute
     */
    copy(source: BufferAttribute): this;

    /**
     * Copy a vector from bufferAttribute[index2] to {@link BufferAttribute.array | array}[index1].
     * @param index1
     * @param bufferAttribute
     * @param index2
     */
    copyAt(index1: number, attribute: BufferAttribute, index2: number): this;

    /**
     * Copy the array given here (which can be a normal array or `TypedArray`) into {@link BufferAttribute.array | array}.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set | TypedArray.set} for notes on requirements if copying a `TypedArray`.
     */
    copyArray(array: ArrayLike<number>): this;

    /**
     * Applies matrix {@link Matrix3 | m} to every Vector3 element of this {@link BufferAttribute}.
     * @param m
     */
    applyMatrix3(m: Matrix3): this;

    /**
     * Applies matrix {@link Matrix4 | m} to every Vector3 element of this {@link BufferAttribute}.
     * @param m
     */
    applyMatrix4(m: Matrix4): this;

    /**
     * Applies normal matrix {@link Matrix3 | m} to every Vector3 element of this {@link BufferAttribute}.
     * @param m
     */
    applyNormalMatrix(m: Matrix3): this;

    /**
     * Applies matrix {@link Matrix4 | m} to every Vector3 element of this {@link BufferAttribute}, interpreting the elements as a direction vectors.
     * @param m
     */
    transformDirection(m: Matrix4): this;

    /**
     * Calls {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set | TypedArray.set}( {@link value}, {@link offset} )
     * on the {@link BufferAttribute.array | array}.
     * @param value {@link Array | Array} or `TypedArray` from which to copy values.
     * @param offset index of the {@link BufferAttribute.array | array} at which to start copying. Expects a `Integer`. Default `0`.
     * @throws `RangeError` When {@link offset} is negative or is too large.
     */
    set(value: ArrayLike<number> | ArrayBufferView, offset?: number): this;

    /**
     * Returns the given component of the vector at the given index.
     */
    getComponent(index: number, component: number): number;

    /**
     * Sets the given component of the vector at the given index.
     */
    setComponent(index: number, component: number, value: number): void;

    /**
     * Returns the x component of the vector at the given index.
     * @param index Expects a `Integer`
     */
    getX(index: number): number;

    /**
     * Sets the x component of the vector at the given index.
     * @param index Expects a `Integer`
     * @param x
     */
    setX(index: number, x: number): this;

    /**
     * Returns the y component of the vector at the given index.
     * @param index Expects a `Integer`
     */
    getY(index: number): number;

    /**
     * Sets the y component of the vector at the given index.
     * @param index Expects a `Integer`
     * @param y
     */
    setY(index: number, y: number): this;

    /**
     * Returns the z component of the vector at the given index.
     * @param index Expects a `Integer`
     */
    getZ(index: number): number;

    /**
     * Sets the z component of the vector at the given index.
     * @param index Expects a `Integer`
     * @param z
     */
    setZ(index: number, z: number): this;

    /**
     * Returns the w component of the vector at the given index.
     * @param index Expects a `Integer`
     */
    getW(index: number): number;

    /**
     * Sets the w component of the vector at the given index.
     * @param index Expects a `Integer`
     * @param w
     */
    setW(index: number, z: number): this;

    /**
     * Sets the x and y components of the vector at the given index.
     * @param index Expects a `Integer`
     * @param x
     * @param y
     */
    setXY(index: number, x: number, y: number): this;

    /**
     * Sets the x, y and z components of the vector at the given index.
     * @param index Expects a `Integer`
     * @param x
     * @param y
     * @param z
     */
    setXYZ(index: number, x: number, y: number, z: number): this;

    /**
     * Sets the x, y, z and w components of the vector at the given index.
     * @param index Expects a `Integer`
     * @param x
     * @param y
     * @param z
     * @param w
     */
    setXYZW(index: number, x: number, y: number, z: number, w: number): this;

    /**
     * Convert this object to three.js to the `data.attributes` part of {@link https://github.com/mrdoob/three.js/wiki/JSON-Geometry-format-4 | JSON Geometry format v4},
     */
    toJSON(): BufferAttributeJSON;
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array: Int8Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
export class Int8BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Int8BufferAttribute | Int8BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Int8Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array: Uint8Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
export class Uint8BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Uint8BufferAttribute | Uint8BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint8Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray: Uint8ClampedArray}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
export class Uint8ClampedBufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Uint8ClampedBufferAttribute | Uint8ClampedBufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint8ClampedArray`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array: Int16Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
export class Int16BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Int16BufferAttribute | Int16BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Int16Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array: Uint16Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
export class Uint16BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Uint16BufferAttribute | Uint16BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint16Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array: Int32Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
export class Int32BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Int32BufferAttribute | Int32BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Int32Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array: Uint32Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
export class Uint32BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Uint32BufferAttribute | Uint32BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint32Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array: Uint16Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
export class Float16BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Float16BufferAttribute | Float16BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint16Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array: Float32Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */
export class Float32BufferAttribute extends BufferAttribute {
    /**
     * This creates a new {@link THREE.Float32BufferAttribute | Float32BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Float32Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GLSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GLSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     * @see {@link THREE.BufferAttribute | BufferAttribute}
     */
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}
