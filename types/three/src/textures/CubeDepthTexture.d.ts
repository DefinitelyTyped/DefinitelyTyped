import {
    DepthTexturePixelFormat,
    MagnificationTextureFilter,
    Mapping,
    MinificationTextureFilter,
    TextureDataType,
    Wrapping,
} from "../constants.js";
import { DepthTextureImageData } from "./DepthTexture.js";
import { Texture } from "./Texture.js";

declare class CubeDepthTexture extends Texture<CubeDepthTextureImageData> {
    readonly isCubeDepthTexture: true;
    readonly isCubeTexture: true;

    constructor(
        size: number,
        type?: TextureDataType,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: MagnificationTextureFilter,
        minFilter?: MinificationTextureFilter,
        anisotropy?: number,
        format?: DepthTexturePixelFormat,
    );

    get images(): CubeDepthTextureImageData;
    set images(value: CubeDepthTextureImageData);
}

export { CubeDepthTexture };

export type CubeDepthTextureImageData = [
    DepthTextureImageData,
    DepthTextureImageData,
    DepthTextureImageData,
    DepthTextureImageData,
    DepthTextureImageData,
    DepthTextureImageData,
];
