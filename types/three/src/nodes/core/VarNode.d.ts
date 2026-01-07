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

export const Var: (node: Node, name?: string | null) => VarNode;

export const Const: (node: Node, name?: string | null) => VarNode;

export const VarIntent: (node: Node) => Node;

declare module "../Nodes.js" {
    interface Node {
        toVar: (name?: string | null) => VarNode;
        toVarAssign: (name?: string | null) => this;

        toConst: (name?: string | null) => VarNode;
        toConstAssign: (name?: string | null) => this;

        toVarIntent: () => Node;
        toVarIntentAssign: () => this;
    }
}
