import TempNode from '../core/TempNode.js';
import { NodeRepresentation, ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class CheckerNode extends TempNode {
    uvNode: Node;
    constructor(uvNode?: Node);
}

export const checker: (uvNode?: NodeRepresentation) => ShaderNodeObject<CheckerNode>;
