import {
    DataTextureLoader,
    DataTextureLoaderTexData,
    FloatType,
    HalfFloatType,
    LoadingManager,
    RedFormat,
    RGBAFormat,
    RGFormat,
    TextureDataType,
} from "three";

declare class EXRLoader extends DataTextureLoader {
    type: TextureDataType;
    outputFormat: typeof RGBAFormat | typeof RGFormat | typeof RedFormat;
    part: number;

    constructor(manager?: LoadingManager);

    parse(buffer: ArrayBuffer): DataTextureLoaderTexData;
    setDataType(type: typeof HalfFloatType | typeof FloatType): this;
    setOutputFormat(value: typeof RGBAFormat | typeof RGFormat | typeof RedFormat): this;
    setPart(value: number): this;
}
