import Node from "../core/Node.js";

interface JoinNodeInterface {
    nodes: Node[];
}

declare const JoinNode: {
    new<TNodeType>(nodes: Node[]): JoinNode<TNodeType>;
};

type JoinNode<TNodeType> = Node<TNodeType> & JoinNodeInterface;

export default JoinNode;
