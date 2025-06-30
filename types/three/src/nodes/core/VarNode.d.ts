import { ShaderNodeObject } from "../tsl/TSLCore.js";
import Node from "./Node.js";

export default class VarNode extends Node {
    node: Node;
    name: string | null;

    readonly isVarNode: true;

    readOnly: boolean;

    constructor(node: Node, name?: string | null, readOnly?: boolean);
}

export const Var: (node: Node, name?: string | null) => ShaderNodeObject<VarNode>;

export const Const: (node: Node, name?: string | null) => ShaderNodeObject<VarNode>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        toVar: (node: Node, name?: string | null) => ShaderNodeObject<VarNode>;
        toConst: (node: Node, name?: string | null) => ShaderNodeObject<VarNode>;
    }
}

/**
 * @deprecated Use ".toVar()" instead.
 */
export const temp: (node: Node, name?: string | null) => ShaderNodeObject<VarNode>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        /**
         * @deprecated Use ".toVar()" instead.
         */
        temp: typeof temp;
    }
}
