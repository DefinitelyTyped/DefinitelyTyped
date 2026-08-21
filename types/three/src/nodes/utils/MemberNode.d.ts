import Node from "../core/Node.js";

declare class MemberNode extends Node {
    node: Node;
    property: string;
    readonly isMemberNode: true;

    constructor(node: Node, property: string);
}

export default MemberNode;
