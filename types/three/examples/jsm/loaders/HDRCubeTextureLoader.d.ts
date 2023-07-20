import { CubeTexture, Loader, LoadingManager, TextureDataType } from '../../../src/Three.js';

import { RGBELoader } from './RGBELoader.js';

export class HDRCubeTextureLoader extends Loader {
    constructor(manager?: LoadingManager);
    hdrLoader: RGBELoader;
    type: TextureDataType;

    load(
        urls: string[],
        onLoad: (texture: CubeTexture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): CubeTexture;
    loadAsync(urls: string[], onProgress?: (event: ProgressEvent) => void): Promise<CubeTexture>;
    setDataType(type: TextureDataType): this;
}
