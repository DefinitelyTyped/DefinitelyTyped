import { CubeTexture, Loader, LoadingManager, TextureDataType } from "three";

import { HDRLoader } from "./HDRLoader.js";

export class HDRCubeTextureLoader extends Loader<CubeTexture, readonly string[]> {
    constructor(manager?: LoadingManager);
    hdrLoader: HDRLoader;
    type: TextureDataType;

    load(
        url: readonly string[],
        onLoad?: (data: CubeTexture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): CubeTexture;

    setDataType(type: TextureDataType): this;
}
