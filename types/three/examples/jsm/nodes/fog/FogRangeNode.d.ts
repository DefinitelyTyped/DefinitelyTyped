import FogNode from './FogNode.js';
import Node from '../core/Node.js';

export default class FogRangeNode extends FogNode {
    isFogRangeNode: true;
    nearNode: Node;
    farNode: Node;

    constructor(colorNode: Node, nearNode: Node, farNode: Node);
}
