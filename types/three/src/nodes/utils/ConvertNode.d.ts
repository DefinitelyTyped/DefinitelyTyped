import Node from "../core/Node.js";

interface ConvertNodeInterface {
    node: Node;
    convertTo: string;
}

declare const ConvertNode: {
    new<TNodeType>(node: Node, convertTo: string): ConvertNode<TNodeType>;
};

type ConvertNode<TNodeType> = Node<TNodeType> & ConvertNodeInterface;

export default ConvertNode;
