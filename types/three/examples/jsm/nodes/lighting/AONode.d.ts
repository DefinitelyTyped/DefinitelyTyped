import LightingNode from './LightingNode';
import Node from '../core/Node';

export default class AONode extends LightingNode {
    aoNode: Node | null;

    constructor(aoNode?: Node | null);
}
