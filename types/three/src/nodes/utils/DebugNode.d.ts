import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

declare class DebugNode extends TempNode {
    constructor(node: Node, callback?: ((code: string) => void) | null);
}

export default DebugNode;

export const debug: (
    node: NodeRepresentation,
    callback?: ((code: string) => void) | null,
) => ShaderNodeObject<DebugNode>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        debug: typeof debug;
    }
}
