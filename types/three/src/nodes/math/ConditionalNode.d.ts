import Node from "../core/Node.js";

interface ConditionalNodeInterface<TNodeType> {
    condNode: Node<"bool">;
    ifNode: Node<TNodeType>;
    elseNode: Node<TNodeType> | null;
}

declare const ConditionalNode: {
    new<TNodeType>(
        condNode: Node<"bool">,
        ifNode: Node<TNodeType>,
        elseNode?: Node<TNodeType> | null,
    ): ConditionalNode<TNodeType>;
};

type ConditionalNode<TNodeType> = Node<TNodeType> & ConditionalNodeInterface<TNodeType>;

export default ConditionalNode;

interface Select {
    (
        condNode: Node<"bool">,
        ifNode: Node<"float"> | number,
        elseNode?: Node<"float"> | number | null,
    ): Node<"float">;
    <TNodeType>(
        condNode: Node<"bool">,
        ifNode: Node<TNodeType>,
        elseNode?: Node<TNodeType> | null,
    ): Node<TNodeType>;
}

export const select: Select;

interface SelectExtension {
    (
        ifNode: Node<"float"> | number,
        elseNode?: Node<"float"> | number | null,
    ): Node<"float">;
    <TNodeType>(
        ifNode: Node<TNodeType>,
        elseNode?: Node<TNodeType> | null,
    ): Node<TNodeType>;
}

declare module "../core/Node.js" {
    interface NodeElements {
        select: SelectExtension;
    }
}
