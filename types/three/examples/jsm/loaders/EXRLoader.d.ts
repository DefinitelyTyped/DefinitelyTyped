import {
    DataTextureLoader,
    FloatType,
    HalfFloatType,
    LoadingManager,
    PixelFormat,
    RedFormat,
    RGBAFormat,
    RGFormat,
    TextureDataType,
} from "three";

export interface EXR {
    header: object;
    width: number;
    height: number;
    data: Float32Array | Uint16Array;
    format: PixelFormat;
    colorSpace: string;
    type: typeof HalfFloatType | typeof FloatType;
}

declare class EXRLoader extends DataTextureLoader {
    type: TextureDataType;
    outputFormat: typeof RGBAFormat | typeof RGFormat | typeof RedFormat;

    constructor(manager?: LoadingManager);

    parse(buffer: ArrayBuffer): EXR;
    setDataType(type: typeof HalfFloatType | typeof FloatType): this;
    setOutputFormat(value: typeof RGBAFormat | typeof RGFormat | typeof RedFormat): this;
}
