import ContextNode from '../core/ContextNode.js';
import Node from '../core/Node.js';
import { ShaderNode, ShaderNodeObject } from '../shadernode/ShaderNode.js';

export interface LightingModelNode {
    indirectDiffuse?: ShaderNode;
    indirectSpecular?: ShaderNode;
    ambientOcclusion?: ShaderNode;
}

export default class LightingContextNode extends ContextNode {
    lightingModelNode: LightingModelNode | null;

    constructor(node: Node, lightingModelNode?: LightingModelNode | null);
}

export const lightingContext: (
    node: Node,
    lightingModelNode?: LightingModelNode,
) => ShaderNodeObject<LightingContextNode>;
