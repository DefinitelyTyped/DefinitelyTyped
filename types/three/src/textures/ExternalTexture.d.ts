import { Texture } from "./Texture.js";

declare class ExternalTexture extends Texture {
    sourceTexture: WebGLTexture | null;

    readonly isExternalTexture: true;

    constructor(sourceTexture?: WebGLTexture | null);
}

export { ExternalTexture };
