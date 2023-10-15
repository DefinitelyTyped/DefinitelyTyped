import { Texture } from '../textures/Texture.js';
import { RenderTarget, RenderTargetOptions } from '../core/RenderTarget.js';

// tslint:disable-next-line:no-empty-interface
export interface WebGLRenderTargetOptions extends RenderTargetOptions {}

export class WebGLRenderTarget<TTexture extends Texture | Texture[] = Texture> extends RenderTarget<TTexture> {
    constructor(width?: number, height?: number, options?: RenderTargetOptions);

    readonly isWebGLRenderTarget: true;
}
