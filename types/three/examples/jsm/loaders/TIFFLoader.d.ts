import { DataTextureLoader, DataTextureLoaderTexData, LoadingManager, TextureFilter } from "three";

export class TIFFLoader extends DataTextureLoader {
    constructor(manager?: LoadingManager);

    parse(buffer: ArrayBuffer): DataTextureLoaderTexData;
}
