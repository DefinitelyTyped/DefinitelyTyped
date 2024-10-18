import { RenderTarget, RenderTargetOptions } from "../core/RenderTarget.js";
import { Texture } from "../textures/Texture.js";

export class WebGLRenderTarget<TTexture extends Texture | Texture[] = Texture> extends RenderTarget<TTexture> {
    constructor(width?: number, height?: number, options?: RenderTargetOptions);

    readonly isWebGLRenderTarget: true;
}
