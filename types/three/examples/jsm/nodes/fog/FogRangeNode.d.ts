import FogNode from './FogNode';
import Node from '../core/Node';

export default class FogRangeNode extends FogNode {
    isFogRangeNode: true;
    nearNode: Node;
    farNode: Node;

    constructor(colorNode: Node, nearNode: Node, farNode: Node);
}
