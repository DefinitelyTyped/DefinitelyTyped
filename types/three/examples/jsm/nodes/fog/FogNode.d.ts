import Node from '../core/Node.js';
import { NodeRepresentation, ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class FogNode extends Node {
    isFogNode: true;
    colorNode: Node;
    factorNode: Node;

    constructor(colorNode: Node, factorNode: Node);
    mixAssign(outputNode: Node): Node;
}

export const fog: (colorNode: NodeRepresentation, factorNode: NodeRepresentation) => ShaderNodeObject<FogNode>;
