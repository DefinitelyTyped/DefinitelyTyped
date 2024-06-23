import { RenderTargetOptions } from "./core/RenderTarget.js";
import { WebGLRenderTarget } from "./renderers/WebGLRenderTarget.js";
import { Texture } from "./textures/Texture.js";

/**
 * @deprecated THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.
 */
export class WebGLMultipleRenderTargets extends WebGLRenderTarget<Texture[]> {
    readonly isWebGLMultipleRenderTargets: true;

    /**
     * @deprecated THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.
     * @param width The width of the render target.
     * @param height The height of the render target.
     * @param count The number of render targets.
     * @param options object that holds texture parameters for an auto-generated target texture and depthBuffer/stencilBuffer booleans.
     * For an explanation of the texture parameters see {@link Texture}.
     */
    constructor(width?: number, height?: number, count?: number, options?: RenderTargetOptions);
}
