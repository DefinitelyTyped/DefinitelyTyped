import { CompressedPixelFormat, TextureDataType, Wrapping } from "../constants.js";
import { CompressedTexture } from "./CompressedTexture.js";

/**
 * Creates an texture 2D array based on data in compressed form, for example from a
 * {@link https://en.wikipedia.org/wiki/DirectDraw_Surface | DDS} file.
 * @remarks For use with the {@link THREE.CompressedTextureLoader | CompressedTextureLoader}.
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/CompressedArrayTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CompressedArrayTexture.js | Source}
 */
export class CompressedArrayTexture extends CompressedTexture {
    /**
     * Read-only flag to check if a given object is of type {@link CompressedArrayTexture}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isCompressedArrayTexture: true;

    /**
     * Overridden with a object containing width and height.
     * @override
     */
    get image(): { width: number; height: number; depth: number };
    set image(value: { width: number; height: number; depth: number });

    /**
     * This defines how the texture is wrapped in the depth direction.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @defaultValue {@link THREE.ClampToEdgeWrapping}
     */
    wrapR: Wrapping;

    /**
     * A set of all layers which need to be updated in the texture. See {@link CompressedArrayTexture.addLayerUpdate}.
     */
    layerUpdates: Set<number>;

    /**
     * Create a new instance of {@link CompressedArrayTexture}
     * @param mipmaps The mipmaps array should contain objects with data, width and height.
     * The mipmaps should be of the correct {@link format} and {@link type}. See {@link THREE.mipmaps}.
     * @param width The width of the biggest mipmap.
     * @param height The height of the biggest mipmap.
     * @param depth The number of layers of the 2D array texture
     * @param format The format used in the mipmaps. See {@link THREE.CompressedPixelFormat}.
     * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
     */
    constructor(
        mipmaps: ImageData[],
        width: number,
        height: number,
        depth: number,
        format: CompressedPixelFormat,
        type?: TextureDataType,
    );

    /**
     * Describes that a specific layer of the texture needs to be updated. Normally when {@link Texture.needsUpdate} is
     * set to true, the entire compressed texture array is sent to the GPU. Marking specific layers will only transmit
     * subsets of all mipmaps associated with a specific depth in the array which is often much more performant.
     */
    addLayerUpdate(layerIndex: number): void;

    /**
     * Resets the layer updates registry. See {@link CompressedArrayTexture.addLayerUpdate}.
     */
    clearLayoutUpdates(): void;
}
