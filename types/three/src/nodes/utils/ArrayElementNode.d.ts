import ArrayNode from "../core/ArrayNode.js";
import Node from "../core/Node.js";

interface ArrayElementNodeInterface<TNodeType> {
    node: ArrayNode<TNodeType>;
    indexNode: Node;
}

declare const ArrayElementNode: {
    new<TNodeType>(node: ArrayNode<TNodeType>, indexNode: Node): ArrayElementNode<TNodeType>;
};

type ArrayElementNode<TNodeType> = Node<TNodeType> & ArrayElementNodeInterface<TNodeType>;

export default ArrayElementNode;
