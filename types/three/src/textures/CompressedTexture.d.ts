import {
    ColorSpace,
    CompressedPixelFormat,
    MagnificationTextureFilter,
    Mapping,
    MinificationTextureFilter,
    TextureDataType,
    Wrapping,
} from "../constants.js";
import { TypedArray } from "../core/BufferAttribute.js";
import { Texture } from "./Texture.js";

export interface CompressedTextureMipmap {
    data: TypedArray;
    width: number;
    height: number;
}

/**
 * Creates a texture based on data in compressed form, for example from a {@link https://en.wikipedia.org/wiki/DirectDraw_Surface | DDS} file.
 * @remarks For use with the {@link THREE.CompressedTextureLoader | CompressedTextureLoader}.
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/CompressedTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CompressedTexture.js | Source}
 */
export class CompressedTexture extends Texture {
    /**
     * This creates a new {@link THREE.CompressedTexture | CompressedTexture} object.
     * @param mipmaps The mipmaps array should contain objects with data, width and height. The mipmaps should be of the
     * correct format and type.
     * @param width The width of the biggest mipmap.
     * @param height The height of the biggest mipmap.
     * @param format The format used in the mipmaps. See {@link THREE.CompressedPixelFormat}.
     * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
     * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
     * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
     * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
     * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.LinearFilter}
     * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.LinearMipmapLinearFilter}
     * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
     * @param colorSpace See {@link Texture.colorSpace .colorSpace}. Default {@link NoColorSpace}
     */
    constructor(
        mipmaps?: CompressedTextureMipmap[],
        width?: number,
        height?: number,
        format?: CompressedPixelFormat,
        type?: TextureDataType,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: MagnificationTextureFilter,
        minFilter?: MinificationTextureFilter,
        anisotropy?: number,
        colorSpace?: ColorSpace,
    );

    /**
     * Read-only flag to check if a given object is of type {@link CompressedTexture}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isCompressedTexture: true;

    /**
     * Overridden with a object containing width and height.
     * @override
     */
    get image(): { width: number; height: number };
    set image(value: { width: number; height: number });

    /**
     *  The mipmaps array should contain objects with data, width and height. The mipmaps should be of the correct
     *  format and type.
     */
    mipmaps: CompressedTextureMipmap[] | undefined;

    /**
     * @override
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @see {@link THREE.CompressedPixelFormat}
     */
    format: CompressedPixelFormat;

    /**
     * @override No flipping for cube textures. (also flipping doesn't work for compressed textures)
     * @defaultValue `false`
     */
    flipY: boolean;

    /**
     * @override Can't generate mipmaps for compressed textures. mips must be embedded in DDS files
     * @defaultValue `false`
     */
    generateMipmaps: boolean;
}
