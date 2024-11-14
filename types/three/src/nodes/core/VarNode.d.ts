import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";
import Node from "./Node.js";

export default class VarNode extends Node {
    node: Node;
    name: string | null;

    readonly isVarNode: true;

    constructor(node: Node, name?: string | null);
}

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        toVar: (node: NodeRepresentation, name?: string | null) => ShaderNodeObject<VarNode>;
    }
}

/**
 * @deprecated Use ".toVar()" instead.
 */
export const temp: (node: NodeRepresentation, name?: string | null) => ShaderNodeObject<VarNode>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        /**
         * @deprecated Use ".toVar()" instead.
         */
        temp: typeof temp;
    }
}
