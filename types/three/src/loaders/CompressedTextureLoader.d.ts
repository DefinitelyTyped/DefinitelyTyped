import { Loader } from './Loader.js';
import { LoadingManager } from './LoadingManager.js';
import { CompressedTexture } from '../textures/CompressedTexture.js';

export class CompressedTextureLoader extends Loader<CompressedTexture> {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (data: CompressedTexture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): CompressedTexture;
}
