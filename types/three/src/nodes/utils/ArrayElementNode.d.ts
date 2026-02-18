import Node from "../core/Node.js";

interface ArrayElementNodeInterface {
    node: Node;
    indexNode: Node;
}

declare const ArrayElementNode: {
    new<TNodeType>(node: Node<TNodeType>, indexNode: Node): ArrayElementNode<TNodeType>;
};

type ArrayElementNode<TNodeType> = Node<TNodeType> & ArrayElementNodeInterface;

export default ArrayElementNode;
