import { CubeTexture, DataTextureLoader, LoadingManager, PixelFormat, TextureDataType } from "three";

export interface RGBM {
    width: number;
    height: number;
    data: Uint16Array | Float32Array;
    header: string;
    format: PixelFormat;
    type: TextureDataType;
    flipY: boolean;
}

export class RGBMLoader extends DataTextureLoader {
    type: TextureDataType;

    maxRange: number;

    constructor(manager?: LoadingManager);

    loadCubemap(
        urls: string[],
        onLoad?: (texture: CubeTexture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): CubeTexture;

    loadCubemapAsync(
        urls: string[],
        onProgress?: (event: ProgressEvent) => void,
    ): Promise<CubeTexture>;

    parse(buffer: ArrayBuffer): RGBM;

    setDataType(dataType: TextureDataType): this;

    setMaxRange(value: number): this;
}
