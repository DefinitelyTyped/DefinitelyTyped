import { Node } from "../../nodes/Nodes.js";
import Renderer from "./Renderer.js";

export default class PostProcessing {
    renderer: Renderer;
    outputNode: Node;

    constructor(renderer: Renderer, outputNode?: Node);

    render(): void;

    renderAsync(): Promise<void>;
}
