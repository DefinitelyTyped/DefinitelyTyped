import { Loader } from './Loader.js';
import { LoadingManager } from './LoadingManager.js';
import { CubeTexture } from '../textures/CubeTexture.js';

export class CubeTextureLoader extends Loader<CubeTexture, readonly string[]> {
    constructor(manager?: LoadingManager);

    load(
        url: readonly string[],
        onLoad?: (data: CubeTexture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): CubeTexture;
}
