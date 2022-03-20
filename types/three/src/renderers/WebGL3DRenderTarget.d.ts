import { Data3DTexture } from '../textures/Data3DTexture';
import { WebGLRenderTarget } from './WebGLRenderTarget';

/**
 * Represents a three-dimensional render target.
 */
export class WebGL3DRenderTarget extends WebGLRenderTarget {
    /**
     * Creates a new WebGL3DRenderTarget.
     *
     * @param width the width of the render target, in pixels.
     * @param height the height of the render target, in pixels.
     * @param depth the depth of the render target.
     */
    constructor(width: number, height: number, depth: number);

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
