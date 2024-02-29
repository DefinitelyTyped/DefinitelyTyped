import { DataTexture, DataTextureLoader, LoadingManager } from "three";

export class TGALoader extends DataTextureLoader {
    constructor(manager?: LoadingManager);

    parse(data: ArrayBuffer): DataTexture;
}
