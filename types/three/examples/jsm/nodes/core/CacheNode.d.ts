import Node from './Node.js';
import NodeCache from './NodeCache.js';

export default class CacheNode extends Node {
    isCacheNode: true;
    node: Node;
    cache: NodeCache;

    constructor(node: Node, cache?: NodeCache);
}
