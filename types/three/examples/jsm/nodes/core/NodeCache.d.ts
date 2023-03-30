import Node from './Node';
import { NodeData } from './NodeBuilder';

export default class NodeCache {
    id: number;
    nodesData: WeakMap<Node, NodeData>;

    constructor();
}
