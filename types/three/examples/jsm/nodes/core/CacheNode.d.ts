import Node from './Node.js';
import NodeCache from './NodeCache.js';
import { ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class CacheNode extends Node {
    isCacheNode: true;
    node: Node;
    cache: NodeCache;

    constructor(node: Node, cache?: NodeCache);
}

export const cache: (node: Node, cache?: NodeCache) => ShaderNodeObject<CacheNode>;
