import { Data3DTexture } from '../textures/Data3DTexture.js';
import { WebGLRenderTarget, WebGLRenderTargetOptions } from './WebGLRenderTarget.js';

/**
 * Represents a three-dimensional render target.
 */
export class WebGL3DRenderTarget extends WebGLRenderTarget {
    /**
     * Creates a new WebGL3DRenderTarget.
     *
     * @param width the width of the render target, in pixels. Default is `1`.
     * @param height the height of the render target, in pixels. Default is `1`.
     * @param depth the depth of the render target. Default is `1`.
     * @param options optional object that holds texture parameters for an auto-generated target texture and
     * depthBuffer/stencilBuffer booleans. See {@link WebGLRenderTarget} for details.
     */
    constructor(width?: number, height?: number, depth?: number, options?: WebGLRenderTargetOptions);

    /**
     * The depth of the render target.
     */
    depth: number;

    /**
     * The texture property is overwritten with an instance of {@link Data3DTexture}.
     */
    texture: Data3DTexture;

    readonly isWebGL3DRenderTarget: true;
}
