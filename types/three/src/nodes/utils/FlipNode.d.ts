import Node from "../core/Node.js";

declare class FlipNode extends Node {
    sourceNode: Node;
    components: string;

    constructor(sourceNode: Node, components: string);
}

export default FlipNode;
