import { DataTextureLoader, TextureDataType, LoadingManager, PixelFormat } from '../../../src/Three.js';

export interface LogLuv {
    width: number;
    height: number;
    data: Uint16Array | Float32Array;
    format: PixelFormat;
    type: TextureDataType;
    flipY: boolean;
}

export class LogLuvLoader extends DataTextureLoader {
    type: TextureDataType;
    constructor(manager?: LoadingManager);

    parse(buffer: Iterable<number>): LogLuv;

    setDataType(value: TextureDataType): this;
}
