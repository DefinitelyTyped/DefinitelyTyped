import { Node } from "../../nodes/Nodes.js";
import Renderer from "./Renderer.js";

declare class PostProcessing {
    renderer: Renderer;
    outputNode: Node;

    outputColorTransform: boolean;

    needsUpdate: boolean;

    constructor(renderer: Renderer, outputNode?: Node);

    render(): void;

    update(): void;

    renderAsync(): Promise<void>;
}

export default PostProcessing;
