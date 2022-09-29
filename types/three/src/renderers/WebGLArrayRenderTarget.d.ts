import { DataArrayTexture } from '../textures/DataArrayTexture';
import { WebGLRenderTarget } from './WebGLRenderTarget';

/**
 * This type of render target represents an array of textures.
 */
export class WebGLArrayRenderTarget extends WebGLRenderTarget {
    /**
     * Creates a new WebGLArrayRenderTarget.
     *
     * @param width the width of the render target, in pixels.
     * @param height the height of the render target, in pixels.
     * @param depth the depth/layer count of the render target.
     */
    constructor(width: number, height: number, depth: number);

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
