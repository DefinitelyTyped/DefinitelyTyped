import { CompressedPixelFormat, TextureDataType } from "../constants.js";
import { CompressedTexture, CompressedTextureImageData } from "./CompressedTexture.js";

export class CompressedCubeTexture extends CompressedTexture<CompressedTextureImageData[]> {
    readonly isCompressedCubeTexture: true;
    readonly isCubeTexture: true;

    constructor(
        images: CompressedTextureImageData[],
        format?: CompressedPixelFormat,
        type?: TextureDataType,
    );
}
