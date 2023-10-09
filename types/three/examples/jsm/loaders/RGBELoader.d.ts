import { LoadingManager, DataTextureLoader, TextureDataType, PixelFormat } from '../../../src/Three.js';

export interface RGBE {
    width: number;
    height: number;
    data: Float32Array | Uint8Array;
    header: string;
    gamma: number;
    exposure: number;
    type: TextureDataType;
}

export class RGBELoader extends DataTextureLoader {
    constructor(manager?: LoadingManager);
    type: TextureDataType;

    parse(buffer: ArrayBuffer): RGBE;
    setDataType(type: TextureDataType): this;
}
