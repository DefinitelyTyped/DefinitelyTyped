import { Loader } from './Loader.js';
import { LoadingManager } from './LoadingManager.js';
import { Texture } from '../textures/Texture.js';

/**
 * Class for loading a texture.
 * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
 */
export class TextureLoader extends Loader<Texture> {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (data: Texture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): Texture;
}
