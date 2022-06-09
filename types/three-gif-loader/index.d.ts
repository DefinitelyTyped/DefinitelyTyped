import { LoadingManager } from '../three/src/loaders/LoadingManager';
import { CanvasTexture } from '../three/src/textures/CanvasTexture';
import { GifReader } from '../omggif/index';

declare module 'three-gif-loader' {
    export default class GifLoader {
        constructor(manager?: LoadingManager);
        load(
            url: string,
            onLoad: (reader: GifReader) => void,
            onProgress?: (request: ProgressEvent) => void,
            onError?: (event: ErrorEvent) => void,
        ): GifTexture;
        setPath(value: string): void;
    }

    class GifTexture extends CanvasTexture {
        setReader(reader: GifReader): void;
        draw(): void;
    }
}
