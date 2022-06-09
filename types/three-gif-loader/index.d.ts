// Type definitions for three-gif-loader 1.1
// Project: https://github.com/movableink/three-gif-loader
// Definitions by: Lair Junior <https://github.com/lairjr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { CanvasTexture, LoadingManager } from 'three';
import { GifReader } from 'omggif';

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

export class GifTexture extends CanvasTexture {
    setReader(reader: GifReader): void;
    draw(): void;
}
