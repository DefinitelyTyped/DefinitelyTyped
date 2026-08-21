import TempNode from "../core/TempNode.js";

declare class SetNode extends TempNode {
    sourceNode: Node;
    components: string[];
    targetNode: Node;

    constructor(sourceNode: Node, components: string[], targetNode: Node);
}

export default SetNode;
