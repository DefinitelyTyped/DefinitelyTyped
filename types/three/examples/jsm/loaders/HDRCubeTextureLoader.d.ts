import { CubeTexture, Loader, LoadingManager, TextureDataType } from "three";

import { RGBELoader } from "./RGBELoader.js";

export class HDRCubeTextureLoader extends Loader<CubeTexture, readonly string[]> {
    constructor(manager?: LoadingManager);
    hdrLoader: RGBELoader;
    type: TextureDataType;

    load(
        url: readonly string[],
        onLoad?: (data: CubeTexture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): CubeTexture;

    setDataType(type: TextureDataType): this;
}
