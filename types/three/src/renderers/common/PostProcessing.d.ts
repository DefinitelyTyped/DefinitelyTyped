import { Node } from "../../nodes/Nodes.js";
import Renderer from "./Renderer.js";
import RenderPipeline from "./RenderPipeline.js";

/**
 * @deprecated Use {@link RenderPipeline} instead. PostProcessing has been renamed to RenderPipeline.
 *
 * This class is a wrapper for backward compatibility and will be removed in a future version.
 */
declare class PostProcessing extends RenderPipeline {
    /**
     * Constructs a new post processing management module.
     *
     * @param {Renderer} renderer - A reference to the renderer.
     * @param {Node<vec4>} outputNode - An optional output node.
     * @deprecated since r183. Use {@link RenderPipeline} instead.
     */
    constructor(renderer: Renderer, outputNode?: Node);
}

export default PostProcessing;
