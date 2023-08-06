import { Loader } from './Loader.js';
import { LoadingManager } from './LoadingManager.js';

export class ImageBitmapLoader extends Loader {
    constructor(manager?: LoadingManager);

    /**
     * @default { premultiplyAlpha: 'none' }
     */
    options: undefined | object;

    readonly isImageBitmapLoader: true;

    setOptions(options: object): ImageBitmapLoader;
    load(
        url: string,
        onLoad?: (response: ImageBitmap) => void,
        onProgress?: (request: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): any;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<ImageBitmap>;
}
