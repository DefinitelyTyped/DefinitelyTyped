import { MagnificationTextureFilter, MinificationTextureFilter } from "../constants.js";
import { TypedArray } from "../core/BufferAttribute.js";
import { Texture } from "./Texture.js";

/**
 * Creates an array of textures directly from raw data, width and height and depth
 * @example
 * ```typescript
 * This creates a[name] where each texture has a different color.
 * // create a buffer with color data
 * const width = 512;
 * const height = 512;
 * const depth = 100;
 * const size = width * height;
 * const data = new Uint8Array(4 * size * depth);
 * for (let i = 0; i & lt; depth; i++) {
 *     const color = new THREE.Color(Math.random(), Math.random(), Math.random());
 *     const r = Math.floor(color.r * 255);
 *     const g = Math.floor(color.g * 255);
 *     const b = Math.floor(color.b * 255);
 *     for (let j = 0; j & lt; size; j++) {
 *         const stride = (i * size + j) * 4;
 *         data[stride] = r;
 *         data[stride + 1] = g;
 *         data[stride + 2] = b;
 *         data[stride + 3] = 255;
 *     }
 * }
 * // used the buffer to create a [name]
 * const texture = new THREE.DataArrayTexture(data, width, height, depth);
 * texture.needsUpdate = true;
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl2_materials_texture2darray | WebGL2 / materials / texture2darray}
 * @see Example: {@link https://threejs.org/examples/#webgl2_rendertarget_texture2darray | WebGL2 / rendertarget / texture2darray}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/DataArrayTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/DataArrayTexture.js | Source}
 */
export class DataArrayTexture extends Texture<DataArrayTextureImageData> {
    /**
     * Read-only flag to check if a given object is of type {@link DataArrayTexture}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isDataArrayTexture: true;

    /**
     * @override
     * @defaultValue {@link THREE.NearestFilter}
     */
    magFilter: MagnificationTextureFilter;

    /**
     * @override
     * @defaultValue {@link THREE.NearestFilter}
     */
    minFilter: MinificationTextureFilter;

    /**
     * @override
     * @defaultValue  {@link THREE.ClampToEdgeWrapping}
     */
    wrapR: boolean;

    /**
     * @override
     * @defaultValue `false`
     */
    generateMipmaps: boolean;

    /**
     * @override
     * @defaultValue `false`
     */
    flipY: boolean;

    /**
     * @override
     * @defaultValue `1`
     */
    unpackAlignment: number;

    /**
     * A set of all layers which need to be updated in the texture. See {@link DataArrayTexture.addLayerUpdate}.
     */
    layerUpdates: Set<number>;

    /**
     * This creates a new {@link THREE.DataArrayTexture | DataArrayTexture} object.
     * @remarks The interpretation of the data depends on {@link format} and {@link type}.
     * @remarks If the {@link type} is {@link THREE.UnsignedByteType}, a {@link Uint8Array} will be useful for addressing the texel data
     * @remarks If the {@link format} is {@link THREE.RGBAFormat}, data needs four values for one texel; Red, Green, Blue and Alpha (typically the opacity).
     * @remarks For the packed {@link type | types}, {@link THREE.UnsignedShort4444Type} and {@link THREE.UnsignedShort5551Type}
     * all color components of one texel can be addressed as bitfields within an integer element of a {@link Uint16Array}.
     * @remarks In order to use the {@link type | types} {@link THREE.FloatType} and {@link THREE.HalfFloatType},
     * the WebGL implementation must support the respective extensions _OES_texture_float_ and _OES_texture_half_float_
     * @remarks In order to use {@link THREE.LinearFilter} for component-wise, bilinear interpolation of the texels based on these types,
     * the WebGL extensions _OES_texture_float_linear_ or _OES_texture_half_float_linear_ must also be present.
     * @param data {@link https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView | ArrayBufferView} of the texture. Default `null`.
     * @param width Width of the texture. Default `1`.
     * @param height Height of the texture. Default `1`.
     * @param depth Depth of the texture. Default `1`.
     */
    constructor(data?: TypedArray | null, width?: number, height?: number, depth?: number);

    /**
     * Describes that a specific layer of the texture needs to be updated. Normally when {@link Texture.needsUpdate} is
     * set to true, the entire compressed texture array is sent to the GPU. Marking specific layers will only transmit
     * subsets of all mipmaps associated with a specific depth in the array which is often much more performant.
     */
    addLayerUpdate(layerIndex: number): void;

    /**
     * Resets the layer updates registry. See {@link DataArrayTexture.addLayerUpdate}.
     */
    clearLayoutUpdates(): void;
}

export interface DataArrayTextureImageData {
    data: TypedArray | null;
    width: number;
    height: number;
    depth: number;
}
