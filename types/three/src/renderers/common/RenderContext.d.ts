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
    textures: Texture[] | null;
    depthTexture: DepthTexture | null;
    activeCubeFace: number;
    sampleCount: number;
    width: number;
    height: number;
    readonly isRenderContext: true;
    clippingContext?: ClippingContext | undefined;
    depthClearValue?: number | undefined;
    stencilClearValue?: number | undefined;
    renderTarget?: RenderTarget | undefined;
    activeMipmapLevel?: number | undefined;
    occlusionQueryCount?: number | undefined;
    /**
     * Constructs a new render context.
     */
    constructor();
    /**
     * Returns the cache key of this render context.
     *
     * @return {Number} The cache key.
     */
    getCacheKey(): number;
}
/**
 * Computes a cache key for the given render context.
 *
 * @param {RenderContext} renderContext - The render context.
 * @return {Number} The cache key.
 */
export declare function getCacheKey(renderContext: RenderContext): number;
export default RenderContext;
