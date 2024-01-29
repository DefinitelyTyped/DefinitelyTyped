import FogNode from './FogNode.js';
import Node from '../core/Node.js';
import { ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class FogRangeNode extends FogNode {
    isFogRangeNode: true;
    nearNode: Node;
    farNode: Node;

    constructor(colorNode: Node, nearNode: Node, farNode: Node);
}

export const rangeFog: (colorNode: Node, nearNode: Node, farNode: Node) => ShaderNodeObject<FogRangeNode>;
