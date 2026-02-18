import Node from "../core/Node.js";

export default class SplitNode extends Node {
    node: Node;
    components: string;

    /**
     * @param node the input node
     * @param components swizzle like string, default = "x"
     */
    constructor(node: Node, components?: string);

    getVectorLength(): number;
}
