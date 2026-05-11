import { Loader } from "./Loader.js";
import { LoadingManager } from "./LoadingManager.js";

export class ImageBitmapLoader extends Loader<ImageBitmap> {
    readonly isImageBitmapLoader: true;

    /**
     * @default { premultiplyAlpha: 'none' }
     */
    options: ImageBitmapOptions;

    constructor(manager?: LoadingManager);

    setOptions(options: ImageBitmapOptions): this;

    load(
        url: string,
        onLoad?: (data: ImageBitmap) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): void;
}
