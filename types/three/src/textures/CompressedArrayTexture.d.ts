import { CompressedPixelFormat, TextureDataType, Wrapping } from '../constants';
import { CompressedTexture } from './CompressedTexture.js';

export class CompressedArrayTexture extends CompressedTexture {
    isCompressedArrayTexture: true;

    wrapR: Wrapping;

    constructor(
        mipmaps: ImageData[],
        width: number,
        height: number,
        depth: number,
        format?: CompressedPixelFormat,
        type?: TextureDataType,
    );
}
