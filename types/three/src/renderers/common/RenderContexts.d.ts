import { RenderTarget } from "../../core/RenderTarget.js";
import MRTNode from "../../nodes/core/MRTNode.js";
import RenderContext from "./RenderContext.js";
import Renderer from "./Renderer.js";

/**
 * This module manages the render contexts of the renderer.
 *
 * @private
 */
declare class RenderContexts {
    /**
     * Constructs a new render context management component.
     *
     * @param {Renderer} renderer - The renderer.
     */
    constructor(renderer: Renderer);
    /**
     * The renderer.
     *
     * @type {Renderer}
     */
    renderer: Renderer;
    /**
     * A dictionary that manages render contexts.
     *
     * @type {Object<string,RenderContext>}
     */
    _renderContexts: {
        [x: string]: RenderContext;
    };
    /**
     * Returns a render context for the given scene, camera and render target.
     *
     * @param {?RenderTarget} [renderTarget=null] - The active render target.
     * @param {?MRTNode} [mrt=null] - The MRT configuration
     * @param {?number} [callDepth=0] - The call depth of the renderer.
     * @return {RenderContext} The render context.
     */
    get(renderTarget?: RenderTarget | null, mrt?: MRTNode | null, callDepth?: number | null): RenderContext;
    /**
     * Frees internal resources.
     */
    dispose(): void;
}

export default RenderContexts;
