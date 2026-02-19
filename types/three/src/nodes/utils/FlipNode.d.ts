import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";

declare class FlipNode extends TempNode {
    sourceNode: Node;
    components: string;

    constructor(sourceNode: Node, components: string);
}

export default FlipNode;
