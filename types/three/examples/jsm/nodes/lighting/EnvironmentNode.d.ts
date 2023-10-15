import LightingNode from './LightingNode.js';
import Node from '../core/Node.js';

export default class EnvironmentNode extends LightingNode {
    envNode: Node | null;

    constructor(envNode?: Node | null);
}
