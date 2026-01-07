import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import TempNode from "../core/TempNode.js";

declare class DebugNode extends TempNode {
    constructor(node: Node, callback?: ((code: string) => void) | null);
}

export default DebugNode;

export const debug: (
    node: Node,
    callback?: ((node: NodeBuilder, code: string) => void) | null,
) => DebugNode;

declare module "../Nodes.js" {
    interface Node {
        debug: (
            callback?: ((node: NodeBuilder, code: string) => void) | null,
        ) => DebugNode;
        debugAssign: (
            callback?: ((node: NodeBuilder, code: string) => void) | null,
        ) => this;
    }
}
