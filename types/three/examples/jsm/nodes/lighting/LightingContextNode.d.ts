import ContextNode from '../core/ContextNode';
import Node from '../core/Node';
import { ShaderNode } from '../Nodes';

export interface LightingModelNode {
    indirectDiffuse?: ShaderNode;
    indirectSpecular?: ShaderNode;
    ambientOcclusion?: ShaderNode;
}

export default class LightingContextNode extends ContextNode {
    lightingModelNode: LightingModelNode | null;

    constructor(node: Node, lightingModelNode?: LightingModelNode | null);
}
