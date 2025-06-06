import { RenderTargetOptions } from "../../core/RenderTarget.js";
import { WebGLCubeRenderTarget } from "../../renderers/WebGLCubeRenderTarget.js";
import { Texture } from "../../textures/Texture.js";
import { WebGLRenderer } from "../WebGLRenderer.js";
/**
 * This class represents a cube render target. It is a special version
 * of `WebGLCubeRenderTarget` which is compatible with `WebGPURenderer`.
 *
 * @augments WebGLCubeRenderTarget
 */
declare class CubeRenderTarget extends WebGLCubeRenderTarget {
    readonly isCubeRenderTarget: true;
    /**
     * Constructs a new cube render target.
     *
     * @param {number} [size=1] - The size of the render target.
     * @param {RenderTarget~Options} [options] - The configuration object.
     */
    constructor(size?: number, options?: RenderTargetOptions);
    /**
     * Converts the given equirectangular texture to a cube map.
     *
     * @param {Renderer} renderer - The renderer.
     * @param {Texture} texture - The equirectangular texture.
     * @return {CubeRenderTarget} A reference to this cube render target.
     */
    fromEquirectangularTexture(renderer: WebGLRenderer, texture: Texture): this;
}
export default CubeRenderTarget;
