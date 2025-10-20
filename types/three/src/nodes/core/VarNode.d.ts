import { ShaderNodeObject } from "../tsl/TSLCore.js";
import Node from "./Node.js";

declare class VarNode extends Node {
    node: Node;
    name: string | null;

    readonly isVarNode: true;

    readOnly: boolean;

    intent: boolean;

    constructor(node: Node, name?: string | null, readOnly?: boolean);

    setIntent(value: boolean): this;
    getIntent(): boolean;
}

export default VarNode;

export const Var: (node: Node, name?: string | null) => ShaderNodeObject<VarNode>;

export const Const: (node: Node, name?: string | null) => ShaderNodeObject<VarNode>;

export const VarIntent: (node: Node) => Node;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        toVar: (node: Node, name?: string | null) => ShaderNodeObject<VarNode>;
        toConst: (node: Node, name?: string | null) => ShaderNodeObject<VarNode>;
        toVarIntent: (node: Node) => Node;
    }
}
