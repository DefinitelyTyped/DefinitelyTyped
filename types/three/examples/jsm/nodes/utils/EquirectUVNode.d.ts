import { PositionNode, TempNode } from '../Nodes.js';
import { Swizzable } from '../shadernode/ShaderNodeElements.js';

export default class EquirectUVNode extends TempNode {
    constructor(dirNode?: Swizzable<PositionNode>);
}
