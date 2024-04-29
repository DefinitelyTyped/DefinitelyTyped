import { ShaderNodeObject } from "../shadernode/ShaderNode.js";
import Node from "./Node.js";
import NodeCache from "./NodeCache.js";

export default class CacheNode extends Node {
    isCacheNode: true;
    node: Node;
    cache: NodeCache;

    constructor(node: Node, cache?: NodeCache);
}

export const cache: (node: Node, cache?: NodeCache) => ShaderNodeObject<CacheNode>;
export const globalCache: (node: Node) => ShaderNodeObject<CacheNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        cache: typeof cache;
        globalCache: typeof globalCache;
    }
}
