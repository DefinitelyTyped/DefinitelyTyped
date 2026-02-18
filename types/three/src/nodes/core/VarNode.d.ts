import Node from "./Node.js";

interface VarNodeInterface {
    node: Node;
    name: string | null;

    readonly isVarNode: true;

    readOnly: boolean;

    intent: boolean;

    setIntent(value: boolean): this;
    getIntent(): boolean;
}

declare const VarNode: {
    new<TNodeType>(node: Node<TNodeType>, name?: string | null, readOnly?: boolean): VarNode<TNodeType>;
};

type VarNode<TNodeType = unknown> = Node<TNodeType> & VarNodeInterface;

export default VarNode;

export const Var: <TNodeType>(node: Node<TNodeType>, name?: string | null) => VarNode<TNodeType>;

export const Const: <TNodeType>(node: Node<TNodeType>, name?: string | null) => VarNode<TNodeType>;

export const VarIntent: <TNodeType>(node: Node<TNodeType>) => Node<TNodeType>;

declare module "./Node.js" {
    interface NodeExtensions<TNodeType> {
        toVar: (name?: string | null) => VarNode<TNodeType>;

        toConst: (name?: string | null) => VarNode<TNodeType>;

        toVarIntent: () => Node<TNodeType>;
    }
}
