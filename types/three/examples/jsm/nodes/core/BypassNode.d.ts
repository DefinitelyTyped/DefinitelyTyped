import Node from './Node.js';
import { NodeRepresentation, ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class BypassNode extends Node {
    isBypassNode: true;
    outputNode: Node;
    callNode: Node;

    constructor(returnNode: Node, callNode: Node);
}

export const bypass: (returnNode: NodeRepresentation, callNode: NodeRepresentation) => ShaderNodeObject<BypassNode>;
