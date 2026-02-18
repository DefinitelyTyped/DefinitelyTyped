import { Camera } from "../../cameras/Camera.js";
import { RenderTarget } from "../../core/RenderTarget.js";
import { Vector4 } from "../../math/Vector4.js";
import MRTNode from "../../nodes/core/MRTNode.js";
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
    /**
     * The context's ID.
     *
     * @type {number}
     */
    id: number;
    /**
     * The MRT configuration.
     *
     * @type {?MRTNode}
     * @default null
     */
    mrt: MRTNode | null;
    /**
     * Whether the current active framebuffer has a color attachment.
     *
     * @type {boolean}
     * @default true
     */
    color: boolean;
    /**
     * Whether the color attachment should be cleared or not.
     *
     * @type {boolean}
     * @default true
     */
    clearColor: boolean;
    /**
     * The clear color value.
     *
     * @type {Object}
     * @default true
     */
    clearColorValue: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    /**
     * Whether the current active framebuffer has a depth attachment.
     *
     * @type {boolean}
     * @default true
     */
    depth: boolean;
    /**
     * Whether the depth attachment should be cleared or not.
     *
     * @type {boolean}
     * @default true
     */
    clearDepth: boolean;
    /**
     * The clear depth value.
     *
     * @type {number}
     * @default 1
     */
    clearDepthValue: number;
    /**
     * Whether the current active framebuffer has a stencil attachment.
     *
     * @type {boolean}
     * @default false
     */
    stencil: boolean;
    /**
     * Whether the stencil attachment should be cleared or not.
     *
     * @type {boolean}
     * @default true
     */
    clearStencil: boolean;
    /**
     * The clear stencil value.
     *
     * @type {number}
     * @default 1
     */
    clearStencilValue: number;
    /**
     * By default the viewport encloses the entire framebuffer If a smaller
     * viewport is manually defined, this property is to `true` by the renderer.
     *
     * @type {boolean}
     * @default false
     */
    viewport: boolean;
    /**
     * The viewport value. This value is in physical pixels meaning it incorporates
     * the renderer's pixel ratio. The viewport property of render targets or
     * the renderer is in logical pixels.
     *
     * @type {Vector4}
     */
    viewportValue: Vector4;
    /**
     * When the scissor test is active and scissor rectangle smaller than the
     * framebuffers dimensions, this property is to `true` by the renderer.
     *
     * @type {boolean}
     * @default false
     */
    scissor: boolean;
    /**
     * The scissor rectangle.
     *
     * @type {Vector4}
     */
    scissorValue: Vector4;
    /**
     * The active render target.
     *
     * @type {?RenderTarget}
     * @default null
     */
    renderTarget: RenderTarget | null;
    /**
     * The textures of the active render target.
     * `null` when no render target is set.
     *
     * @type {?Array<Texture>}
     * @default null
     */
    textures: Texture[] | null;
    /**
     * The depth texture of the active render target.
     * `null` when no render target is set.
     *
     * @type {?DepthTexture}
     * @default null
     */
    depthTexture: DepthTexture | null;
    /**
     * The active cube face.
     *
     * @type {number}
     * @default 0
     */
    activeCubeFace: number;
    /**
     * The active mipmap level.
     *
     * @type {number}
     * @default 0
     */
    activeMipmapLevel: number;
    /**
     * The number of MSAA samples. This value is always `1` when
     * MSAA isn't used.
     *
     * @type {number}
     * @default 1
     */
    sampleCount: number;
    /**
     * The active render target's width in physical pixels.
     *
     * @type {number}
     * @default 0
     */
    width: number;
    /**
     * The active render target's height in physical pixels.
     *
     * @type {number}
     * @default 0
     */
    height: number;
    /**
     * The occlusion query count.
     *
     * @type {number}
     * @default 0
     */
    occlusionQueryCount: number;
    /**
     * The current clipping context.
     *
     * @type {?ClippingContext}
     * @default null
     */
    clippingContext: ClippingContext | null;
    /**
     * The current camera.
     *
     * @type {?Camera}
     * @default null
     */
    camera: Camera | null;
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isRenderContext: boolean;
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
export function getCacheKey(renderContext: RenderContext): number;

export default RenderContext;
