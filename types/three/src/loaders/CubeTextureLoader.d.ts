import { Loader } from './Loader.js';
import { LoadingManager } from './LoadingManager.js';
import { CubeTexture } from './../textures/CubeTexture.js';

export class CubeTextureLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        urls: string[],
        onLoad?: (texture: CubeTexture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): CubeTexture;

    loadAsync(urls: string[], onProgress?: (event: ProgressEvent) => void): Promise<CubeTexture>;
}
