import Node from "../../../nodes/core/Node.js";

export interface SlotNodeParameters<TNode extends Node = Node> {
    node?: TNode;
    nodeType?: string;
    source?: string | null;
    target?: string | null;
}

export default class SlotNode<TNode extends Node = Node> extends Node {
    inclusionType: "replace";
    node: TNode | null;
    source: null;
    target: null;

    constructor(params: SlotNodeParameters<TNode>);
}
