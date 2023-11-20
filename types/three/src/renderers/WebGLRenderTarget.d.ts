import { Texture } from '../textures/Texture.js';
import { RenderTarget, RenderTargetOptions } from '../core/RenderTarget.js';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WebGLRenderTargetOptions extends RenderTargetOptions {}

export class WebGLRenderTarget<TTexture extends Texture | Texture[] = Texture> extends RenderTarget<TTexture> {
    constructor(width?: number, height?: number, options?: RenderTargetOptions);

    readonly isWebGLRenderTarget: true;
}
