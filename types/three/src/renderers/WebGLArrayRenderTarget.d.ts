import { DataArrayTexture } from '../textures/DataArrayTexture.js';
import { WebGLRenderTarget, WebGLRenderTargetOptions } from './WebGLRenderTarget.js';

/**
 * This type of render target represents an array of textures.
 */
export class WebGLArrayRenderTarget extends WebGLRenderTarget {
    /**
     * Creates a new WebGLArrayRenderTarget.
     *
     * @param width the width of the render target, in pixels. Default is `1`.
     * @param height the height of the render target, in pixels. Default is `1`.
     * @param depth the depth/layer count of the render target. Default is `1`.
     * @param options optional object that holds texture parameters for an auto-generated target texture and
     * depthBuffer/stencilBuffer booleans. See {@link WebGLRenderTarget} for details.
     */
    constructor(width?: number, height?: number, depth?: number, options?: WebGLRenderTargetOptions);

    /**
     * The depth of the render target.
     */
    depth: number;

    /**
     * The texture property is overwritten with an instance of {@link DataArrayTexture}.
     */
    texture: DataArrayTexture;

    readonly isWebGLArrayRenderTarget: true;
}
