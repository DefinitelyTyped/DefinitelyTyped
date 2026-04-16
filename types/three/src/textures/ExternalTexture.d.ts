import { Texture } from "./Texture.js";

interface GPUTexture {
}

declare class ExternalTexture extends Texture<null> {
    sourceTexture: WebGLTexture | GPUTexture | null;

    readonly isExternalTexture: true;

    constructor(sourceTexture?: WebGLTexture | GPUTexture | null);
}

export { ExternalTexture };
