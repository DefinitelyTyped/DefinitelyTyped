import Node from "./Node.js";
import NodeCache from "./NodeCache.js";

declare class IsolateNode extends Node {
    node: Node;
    parent: boolean;

    readonly isIsolateNode: true;

    constructor(node: Node, parent?: boolean);
}

export default IsolateNode;

export const isolate: (node: Node) => IsolateNode;

/**
 * @deprecated "cache()" has been deprecated. Use "isolate()" instead.
 */
export const cache: (node: Node, cache?: NodeCache) => IsolateNode;

declare module "./Node.js" {
    interface NodeElements {
        /**
         * @deprecated "cache()" has been deprecated. Use "isolate()" instead.
         */
        cache: (cache?: NodeCache) => IsolateNode;

        isolate: () => IsolateNode;
    }
}
