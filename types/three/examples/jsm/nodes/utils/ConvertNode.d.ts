import Node from "../core/Node.js";

export default class ConvertNode extends Node {
    node: Node;
    convertTo: string;
    constructor(node: Node, convertTo: string);
}
