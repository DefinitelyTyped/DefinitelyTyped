import Node from '../core/Node';
import { NodeTypeOption } from '../Nodes';

export default class ConvertNode extends Node {
    node: Node;
    convertTo: NodeTypeOption;
    constructor(node: Node, convertTo: NodeTypeOption);
}
