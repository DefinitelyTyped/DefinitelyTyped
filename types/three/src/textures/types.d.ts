export interface TextureImageData {
    readonly data: Uint8ClampedArray;
    readonly height: number;
    readonly width: number;
}

export interface Texture3DImageData extends TextureImageData {
    readonly depth: number;
}
