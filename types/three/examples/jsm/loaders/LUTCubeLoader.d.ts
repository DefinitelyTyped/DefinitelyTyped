import { Loader, LoadingManager, Vector3, DataTexture, Data3DTexture } from '../../../src/Three.js';

export interface LUTCubeResult {
    title: string;
    size: number;
    domainMin: Vector3;
    domainMax: Vector3;
    texture: DataTexture;
    texture3D: Data3DTexture;
}

export class LUTCubeLoader extends Loader<LUTCubeResult> {
    constructor(manager?: LoadingManager);

    parse(data: string): LUTCubeResult;
}
