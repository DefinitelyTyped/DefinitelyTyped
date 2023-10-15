import { CanvasTexture, Loader, LoadingManager } from '../../../src/Three.js';

export class LottieLoader extends Loader<CanvasTexture> {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (data: CanvasTexture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): CanvasTexture;

    setQuality(value: number): void;
}
