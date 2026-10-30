import Node from "../core/Node.js";

declare class SetNode extends Node {
    sourceNode: Node;
    components: string[];
    targetNode: Node;

    constructor(sourceNode: Node, components: string[], targetNode: Node);
}

export default SetNode;
