import { DataTextureLoader, DataTextureLoaderTexData, LoadingManager } from "three";

export class TGALoader extends DataTextureLoader {
    constructor(manager?: LoadingManager);

    parse(data: ArrayBuffer): DataTextureLoaderTexData;
}
