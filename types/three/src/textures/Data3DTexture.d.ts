import { MagnificationTextureFilter, MinificationTextureFilter, Wrapping } from "../constants.js";
import { TypedArray } from "../core/BufferAttribute.js";
import { TextureImageData } from "./DataTexture.js";
import { Texture } from "./Texture.js";

/**
 * Creates a three-dimensional texture from raw data, with parameters to divide it into width, height, and depth
 * @example
 * ```typescript
 * This creates a[name] with repeating data, 0 to 255
 * // create a buffer with some data
 * const sizeX = 64;
 * const sizeY = 64;
 * const sizeZ = 64;
 * const data = new Uint8Array(sizeX * sizeY * sizeZ);
 * let i = 0;
 * for (let z = 0; z & lt; sizeZ; z++) {
 *     for (let y = 0; y & lt; sizeY; y++) {
 *         for (let x = 0; x & lt; sizeX; x++) {
 *             data[i] = i % 256;
 *             i++;
 *         }
 *     }
 * }
 * // use the buffer to create the texture
 * const texture = new THREE.Data3DTexture(data, sizeX, sizeY, sizeZ);
 * texture.needsUpdate = true;
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl2_materials_texture3d | WebGL2 / materials / texture3d}
 * @see Example: {@link https://threejs.org/examples/#webgl2_materials_texture3d_partialupdate | WebGL2 / materials / texture3d / partialupdate}
 * @see Example: {@link https://threejs.org/examples/#webgl2_volume_cloud | WebGL2 / volume / cloud}
 * @see Example: {@link https://threejs.org/examples/#webgl2_volume_perlin | WebGL2 / volume / perlin}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/Data3DTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/Data3DTexture.js | Source}
 */
export class Data3DTexture extends Texture {
    /**
     * Create a new instance of {@link Data3DTexture}
     * @param data {@link https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView | ArrayBufferView} of the texture. Default `null`.
     * @param width Width of the texture. Default `1`.
     * @param height Height of the texture. Default `1`.
     * @param depth Depth of the texture. Default `1`.
     */
    constructor(data?: TypedArray | null, width?: number, height?: number, depth?: number);

    /**
     * Read-only flag to check if a given object is of type {@link Data3DTexture}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isData3DTexture: true;

    /**
     * Overridden with a record type holding data, width and height and depth.
     * @override
     */
    get image(): Texture3DImageData;
    set image(data: Texture3DImageData);

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
     * @defaultValue {@link THREE.ClampToEdgeWrapping}
     */
    wrapR: Wrapping;

    /**
     * @override
     * @defaultValue `false`
     */
    flipY: boolean;

    /**
     * @override
     * @defaultValue `false`
     */
    generateMipmaps: boolean;

    /**
     * @override
     * @defaultValue `1`
     */
    unpackAlignment: number;
}

export interface Texture3DImageData extends TextureImageData {
    depth: number;
}
