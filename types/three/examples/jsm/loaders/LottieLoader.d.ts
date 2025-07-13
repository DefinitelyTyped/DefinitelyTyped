import { CanvasTexture, Loader, LoadingManager } from "three";

export class LottieLoader extends Loader<CanvasTexture> {
    /**
     * @deprecated The loader has been deprecated and will be removed with r186. Use lottie-web instead and create your
     * animated texture manually.
     */
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (data: CanvasTexture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): CanvasTexture;

    setQuality(value: number): void;
}
