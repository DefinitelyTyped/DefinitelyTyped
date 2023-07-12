import { Loader } from './Loader.js';
import { LoadingManager } from './LoadingManager.js';
import { DataTexture } from './../textures/DataTexture.js';

export class DataTextureLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (dataTexture: DataTexture, texData: object) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): DataTexture;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<DataTexture>;
}
