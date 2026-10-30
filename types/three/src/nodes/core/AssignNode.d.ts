import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";

declare class AssignNode extends Node {
    readonly isAssignNode: true;

    constructor(targetNode: Node, sourceNode: Node);

    needsSplitAssign(builder: NodeBuilder): boolean;
}

export default AssignNode;

export const assign: (targetNode: Node, sourceNode: Node | number) => AssignNode;
