import LightingNode from './LightingNode.js';
import Node from '../core/Node.js';

export default class AONode extends LightingNode {
    aoNode: Node | null;

    constructor(aoNode?: Node | null);
}
