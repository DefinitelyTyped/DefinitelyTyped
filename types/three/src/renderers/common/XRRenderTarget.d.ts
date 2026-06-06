import { RenderTarget, RenderTargetOptions } from "../../core/RenderTarget.js";

/**
 * A special type of render target that is used when rendering
 * with the WebXR Device API.
 *
 * @private
 * @augments RenderTarget
 */
export class XRRenderTarget extends RenderTarget {
    /**
     * Constructs a new XR render target.
     *
     * @param {number} [width=1] - The width of the render target.
     * @param {number} [height=1] - The height of the render target.
     * @param {Object} [options={}] - The configuration options.
     */
    constructor(width?: number, height?: number, options?: RenderTargetOptions);
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isXRRenderTarget: boolean;
    /**
     * Whether the attachments of the render target
     * are defined by external textures. This flag is
     * set to `true` when using the WebXR Layers API.
     *
     * @private
     * @type {boolean}
     * @default false
     */
    private _hasExternalTextures;
    /**
     * Whether a depth buffer should automatically be allocated
     * for this XR render target or not.
     *
     * Allocating a depth buffer is the default behavior of XR render
     * targets. However, when using the WebXR Layers API, this flag
     * must be set to `false` when the `ignoreDepthValues` property of
     * the projection layers evaluates to `false`.
     *
     * Reference: {@link https://www.w3.org/TR/webxrlayers-1/#dom-xrprojectionlayer-ignoredepthvalues}.
     *
     * @private
     * @type {boolean}
     * @default true
     */
    private _autoAllocateDepthBuffer;
    /**
     * Whether this render target is associated with a XRWebGLLayer.
     *
     * A XRWebGLLayer points to an opaque framebuffer. Basically,
     * this means that you don't have access to its bound color,
     * stencil and depth buffers. We need to handle this framebuffer
     * differently since its textures are always bound.
     *
     * @private
     * @type {boolean}
     * @default false
     */
    private _isOpaqueFramebuffer;
    copy(source: XRRenderTarget): this;
}
