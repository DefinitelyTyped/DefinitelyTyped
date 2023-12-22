import Node from '../core/Node.js';
import { ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class FrontFacingNode extends Node {
    isFrontFacingNode: true;
    constructor();
}

export const frontFacing: ShaderNodeObject<FrontFacingNode>;
export const faceDirection: ShaderNodeObject<Node>;
