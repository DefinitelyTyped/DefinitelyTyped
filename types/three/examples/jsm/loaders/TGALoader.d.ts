import { DataTexture, DataTextureLoader, LoadingManager } from '../../../src/Three.js';

export class TGALoader extends DataTextureLoader {
    constructor(manager?: LoadingManager);

    parse(data: ArrayBuffer): DataTexture;
}
