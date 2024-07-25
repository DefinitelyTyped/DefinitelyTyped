import { DataTexture, Loader, LoadingManager, RGBAFormat, TextureDataType } from "three";

interface UltraHDRLoaderTextureData {
    width: number;
    height: number;
    hdrBuffer: Uint16Array | Float32Array;
    format: typeof RGBAFormat;
    type: TextureDataType;
}

declare class UltraHDRLoader extends Loader<DataTexture> {
    type: TextureDataType;

    constructor(manager?: LoadingManager);

    setDataType(value: TextureDataType): this;

    parse(buffer: ArrayBuffer, onLoad: (texData: UltraHDRLoaderTextureData) => void): void;
}

export { UltraHDRLoader };
