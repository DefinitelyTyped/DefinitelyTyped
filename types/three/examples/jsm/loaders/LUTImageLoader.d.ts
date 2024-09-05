import { Data3DTexture, Loader, Texture } from "three";

export interface LUTImageResult {
    size: number;
    texture3D: Data3DTexture;
}

export class LUTImageLoader extends Loader<LUTImageResult> {
    flip: boolean;

    constructor(flipVertical?: boolean);

    getImageData(texture: Texture): ImageData;

    horz2Vert(texture: Texture): ImageData;

    parse(dataArray: Uint8ClampedArray, size: number): LUTImageResult;
}
