import { PositionNode, TempNode } from '../Nodes';
import { Swizzable } from '../shadernode/ShaderNodeElements';

export default class EquirectUVNode extends TempNode {
    constructor(dirNode?: Swizzable<PositionNode>);
}
