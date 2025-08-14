import { RenderTarget } from "../../core/RenderTarget.js";
import { Vector4 } from "../../math/Vector4.js";
import { DepthTexture } from "../../textures/DepthTexture.js";
import { Texture } from "../../textures/Texture.js";
import ClippingContext from "./ClippingContext.js";
/**
 * Any render or compute command is executed in a specific context that defines
 * the state of the renderer and its backend. Typical examples for such context
 * data are the current clear values or data from the active framebuffer. This
 * module is used to represent these contexts as objects.
 *
 * @private
 */
declare class RenderContext {
    id: number;
    color: boolean;
    clearColor: boolean;
    clearColorValue: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    depth: boolean;
    clearDepth: boolean;
    clearDepthValue: number;
    stencil: boolean;
    clearStencil: boolean;
    clearStencilValue: number;
    viewport: boolean;
    viewportValue: Vector4;
    scissor: boolean;
    scissorValue: Vector4;
    renderTarget: RenderTarget | null;
    textures: Texture[] | null;
    depthTexture: DepthTexture | null;
    activeCubeFace: number;
    sampleCount: number;
    width: number;
    height: number;
    occlusionQueryCount: number;
    clippingContext: ClippingContext | null;
    readonly isRenderContext: true;
    depthClearValue?: number | undefined;
    stencilClearValue?: number | undefined;
    activeMipmapLevel?: number | undefined;
    /**
     * Constructs a new render context.
     */
    constructor();
    /**
     * Returns the cache key of this render context.
     *
     * @return {number} The cache key.
     */
    getCacheKey(): number;
}
/**
 * Computes a cache key for the given render context. This key
 * should identify the render target state so it is possible to
 * configure the correct attachments in the respective backend.
 *
 * @param {RenderContext} renderContext - The render context.
 * @return {number} The cache key.
 */
export declare function getCacheKey(renderContext: RenderContext): number;
export default RenderContext;
