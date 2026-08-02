import { DataTextureLoader, DataTextureLoaderTexData, LoadingManager, TextureDataType } from "three";

declare class HDRLoader extends DataTextureLoader {
    type: TextureDataType;

    constructor(manager?: LoadingManager);

    parse(buffer: ArrayBuffer): DataTextureLoaderTexData;
    setDataType(type: TextureDataType): this;
}

export { HDRLoader };
