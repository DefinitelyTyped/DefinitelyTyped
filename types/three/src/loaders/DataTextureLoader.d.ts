import {
    ColorSpace,
    MagnificationTextureFilter,
    MinificationTextureFilter,
    PixelFormat,
    TextureDataType,
    Wrapping,
} from "../constants.js";
import { TypedArray } from "../core/BufferAttribute.js";
import { CompressedTextureMipmap } from "../textures/CompressedTexture.js";
import { CubeTexture } from "../textures/CubeTexture.js";
import { DataTexture, DataTextureImageData } from "../textures/DataTexture.js";
import { Loader } from "./Loader.js";
import { LoadingManager } from "./LoadingManager.js";

export interface DataTextureLoaderTexData {
    image?: DataTextureImageData | undefined;
    width?: number | undefined;
    height?: number | undefined;
    data?: TypedArray | undefined;
    format?: PixelFormat | undefined;
    type?: TextureDataType | undefined;
    flipY?: boolean | undefined;
    wrapS?: Wrapping | undefined;
    wrapT?: Wrapping | undefined;
    anisotropy?: number | undefined;
    generateMipmaps?: boolean | undefined;
    colorSpace?: ColorSpace | undefined;
    magFilter?: MagnificationTextureFilter | undefined;
    minFilter?: MinificationTextureFilter | undefined;
    mipmaps?: CompressedTextureMipmap[] | CubeTexture[] | HTMLCanvasElement[] | undefined;
    mipmapCount?: number | undefined;
}

export abstract class DataTextureLoader extends Loader<DataTexture> {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (data: DataTexture, texData: DataTextureLoaderTexData) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): DataTexture;

    abstract parse(buffer: ArrayBuffer): DataTextureLoaderTexData;

    createDataTexture(buffer: ArrayBuffer): DataTexture;
}
