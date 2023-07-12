import Node from '../core/Node.js';
import FogNode from './FogNode.js';

export default class FogExp2Node extends FogNode {
    isFogExp2Node: true;
    densityNode: Node;

    constructor(colorNode: Node, densityNode: Node);
}
