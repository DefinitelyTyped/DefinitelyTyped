import Node from "./Node.js";

interface VarNodeInterface<TNode> {
    node: TNode;
    name: string | null;

    readonly isVarNode: true;

    readOnly: boolean;

    intent: boolean;

    setIntent(value: boolean): this;
    getIntent(): boolean;
}

declare const VarNode: {
    new<TNodeType, TNode>(node: TNode, name?: string | null, readOnly?: boolean): VarNode<TNodeType, TNode>;
};

type VarNode<TNodeType, TNode> = Node<TNodeType> & VarNodeInterface<TNode>;

export default VarNode;

export const Var: <TNodeType, TNode extends Node<TNodeType>>(
    node: TNode,
    name?: string | null,
) => VarNode<TNodeType, TNode>;

export const Const: <TNodeType, TNode extends Node<TNodeType>>(
    node: TNode,
    name?: string | null,
) => VarNode<TNodeType, TNode>;

export const VarIntent: <TNodeType, TNode extends Node<TNodeType>>(node: TNode) => VarNode<TNodeType, TNode>;

declare module "./Node.js" {
    interface NodeExtensions<TNodeType> {
        toVar: (name?: string | null) => VarNode<TNodeType, this>;

        toConst: (name?: string | null) => VarNode<TNodeType, this>;

        toVarIntent: () => VarNode<TNodeType, this>;
    }
}
