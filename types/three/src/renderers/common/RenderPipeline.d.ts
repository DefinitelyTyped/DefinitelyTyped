import { Node } from "../../nodes/Nodes.js";
import Renderer from "./Renderer.js";

declare class RenderPipeline {
    renderer: Renderer;
    outputNode: Node;

    outputColorTransform: boolean;

    needsUpdate: boolean;

    constructor(renderer: Renderer, outputNode?: Node);

    render(): void;

    dispose(): void;

    /**
     * @deprecated "renderAsync()" has been deprecated. Use "render()" and "await renderer.init();" when creating the renderer.
     */
    renderAsync(): Promise<void>;
}

export default RenderPipeline;
