import Node from '../core/Node.js';

export default class FogNode extends Node {
    isFogNode: true;
    colorNode: Node;
    factorNode: Node;

    constructor(colorNode: Node, factorNode: Node);
    mixAssign(outputNode: Node): Node;
}
