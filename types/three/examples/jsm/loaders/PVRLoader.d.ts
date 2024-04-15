import { CompressedPixelFormat, CompressedTextureLoader, LoadingManager } from "three";

export interface PVR {
    mipmaps: object[];
    width: number;
    height: number;
    format: CompressedPixelFormat;
    mipmapCount: number;
    isCubemap: boolean;
}

export class PVRLoader extends CompressedTextureLoader {
    constructor(manager?: LoadingManager);

    parse(buffer: ArrayBuffer, loadMipmaps: boolean): PVR;
}
