import { Loader, LoadingManager, DataTexture, Data3DTexture } from '../../../src/Three.js';

export interface LUT3dlResult {
    size: number;
    texture: DataTexture;
    texture3D: Data3DTexture;
}

export class LUT3dlLoader extends Loader<LUT3dlResult> {
    constructor(manager?: LoadingManager);

    parse(data: string): LUT3dlResult;
}
