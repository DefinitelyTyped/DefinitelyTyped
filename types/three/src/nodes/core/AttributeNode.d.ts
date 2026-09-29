import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";

interface AttributeNodeInterface {
    setAttributeName(attributeName: string): this;

    getAttributeName(builder: NodeBuilder): string;
}

declare const AttributeNode: {
    new<const TNodeType>(attributeName: string, nodeType?: TNodeType | null): AttributeNode<TNodeType>;
};

type AttributeNode<TNodeType = unknown> = Node<TNodeType> & AttributeNodeInterface;

export default AttributeNode;

export const attribute: <const TNodeType>(
    name: string,
    nodeType?: TNodeType | null,
) => AttributeNode<TNodeType>;
