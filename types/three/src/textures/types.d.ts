export interface TextureImageData {
    data: Uint8Array | Uint8ClampedArray;
    height: number;
    width: number;
}

export interface Texture3DImageData extends TextureImageData {
    depth: number;
}
