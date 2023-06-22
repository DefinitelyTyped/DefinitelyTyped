import LightingNode from './LightingNode';
import Node from '../core/Node';

export default class EnvironmentNode extends LightingNode {
    envNode: Node | null;

    constructor(envNode?: Node | null);
}
