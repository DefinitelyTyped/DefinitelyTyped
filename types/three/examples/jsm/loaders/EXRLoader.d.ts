import { DataTextureLoader, LoadingManager, PixelFormat, TextureDataType, TextureEncoding } from '../../../src/Three';

export interface EXR {
    header: object;
    width: number;
    height: number;
    data: Float32Array | Uint16Array;
    format: PixelFormat;
    encoding: TextureEncoding;
    type: TextureDataType;
}

export class EXRLoader extends DataTextureLoader {
    constructor(manager?: LoadingManager);
    type: TextureDataType;

    parse(buffer: ArrayBuffer): EXR;
    setDataType(type: TextureDataType): this;
}
