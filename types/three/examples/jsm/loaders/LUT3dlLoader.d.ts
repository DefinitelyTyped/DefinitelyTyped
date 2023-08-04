import { Loader, LoadingManager, DataTexture, Data3DTexture } from '../../../src/Three.js';

export interface LUT3dlResult {
    size: number;
    texture: DataTexture;
    texture3D: Data3DTexture;
}

export class LUT3dlLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (result: LUT3dlResult) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: Error) => void,
    ): any;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<LUT3dlResult>;
    parse(data: string): LUT3dlResult;
}
