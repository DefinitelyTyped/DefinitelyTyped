import { Loader } from './Loader.js';
import { LoadingManager } from './LoadingManager.js';

export class ImageBitmapLoader extends Loader<ImageBitmap> {
    constructor(manager?: LoadingManager);

    /**
     * @default { premultiplyAlpha: 'none' }
     */
    options: undefined | object;

    readonly isImageBitmapLoader: true;

    setOptions(options: object): ImageBitmapLoader;
}
