import Node from "../core/Node.js";
import { NodeTypeOption } from "../Nodes.js";

export default class ConvertNode extends Node {
    node: Node;
    convertTo: NodeTypeOption;
    constructor(node: Node, convertTo: NodeTypeOption);
}
