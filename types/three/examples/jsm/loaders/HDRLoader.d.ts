import { DataTextureLoader, LoadingManager, TextureDataType } from "three";

export interface HDR {
    width: number;
    height: number;
    data: Float32Array | Uint8Array;
    header: string;
    gamma: number;
    exposure: number;
    type: TextureDataType;
}

declare class HDRLoader extends DataTextureLoader {
    type: TextureDataType;

    constructor(manager?: LoadingManager);

    parse(buffer: ArrayBuffer): HDR;
    setDataType(type: TextureDataType): this;
}

export { HDRLoader };
