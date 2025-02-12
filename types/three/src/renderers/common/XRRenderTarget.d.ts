import { RenderTarget } from "../../core/RenderTarget.js";
/**
 * A special type of render target that is used when rendering
 * with the WebXR Device API.
 *
 * @private
 * @augments RenderTarget
 */
declare class XRRenderTarget extends RenderTarget {
    readonly isXRRenderTarget: true;
    hasExternalTextures: boolean;
    autoAllocateDepthBuffer: boolean;
    /**
     * Constructs a new XR render target.
     *
     * @param {Number} [width=1] - The width of the render target.
     * @param {Number} [height=1] - The height of the render target.
     * @param {Object} [options={}] - The configuration options.
     */
    constructor(width?: number, height?: number, options?: {});
    copy(source: XRRenderTarget): this;
}
export { XRRenderTarget };
