import { CompressedPixelFormat, PixelFormat, TextureDataType } from "../constants.js";
import { Texture } from "../textures/Texture.js";

/**
 * Scales the texture as large as possible within its surface without cropping or stretching the texture. The method
 * preserves the original aspect ratio of the texture. Akin to CSS `object-fit: contain`.
 */
declare function contain(texture: Texture, aspect: number): Texture;

/**
 * Scales the texture to the smallest possible size to fill the surface, leaving no empty space. The method preserves
 * the original aspect ratio of the texture. Akin to CSS `object-fit: cover`.
 */
declare function cover(texture: Texture, aspect: number): Texture;

/**
 * Configures the texture to the default transformation. Akin to CSS `object-fit: fill`.
 */
declare function fill(texture: Texture): Texture;

/**
 * Given the width, height, format, and type of a texture. Determines how many bytes must be used to represent the
 * texture.
 */
declare function getByteLength(
    width: number,
    height: number,
    format: PixelFormat | CompressedPixelFormat,
    type: TextureDataType,
): number;

/**
 * A class containing utility functions for textures.
 */
declare const TextureUtils: {
    contain: typeof contain;
    cover: typeof cover;
    fill: typeof fill;
    getByteLength: typeof getByteLength;
};

export { contain, cover, fill, getByteLength, TextureUtils };
