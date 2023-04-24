import Node from './Node';
import NodeCache from './NodeCache';

export default class CacheNode extends Node {
    isCacheNode: true;
    node: Node;
    cache: NodeCache;

    constructor(node: Node, cache?: NodeCache);
}
