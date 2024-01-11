import { PositionNode, TempNode } from '../Nodes.js';
import { ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class EquirectUVNode extends TempNode {
    constructor(dirNode?: ShaderNodeObject<PositionNode>);
}

export const equirectUV: ShaderNodeObject<EquirectUVNode>;
