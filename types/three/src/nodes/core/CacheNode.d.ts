import { ShaderNodeObject } from "../tsl/TSLCore.js";
import ContextNode from "./ContextNode.js";
import Node from "./Node.js";
import NodeCache from "./NodeCache.js";

export default class CacheNode extends Node {
    node: Node;
    parent: boolean;

    readonly isCacheNode: true;

    constructor(node: Node, parent?: boolean);
}

export const cache: (node: Node, cache?: NodeCache) => ShaderNodeObject<CacheNode>;

export const namespace: (node: Node, namespace: string) => ShaderNodeObject<ContextNode>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        cache: typeof cache;
    }
}
