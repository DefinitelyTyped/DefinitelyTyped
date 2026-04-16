import Node from "../core/Node.js";
import { TempNode } from "../Nodes.js";

interface JoinNodeInterface {
    nodes: Node[];
}

declare const JoinNode: {
    new<TNodeType>(nodes: Node[]): JoinNode<TNodeType>;
};

type JoinNode<TNodeType> = TempNode<TNodeType> & JoinNodeInterface;

export default JoinNode;
