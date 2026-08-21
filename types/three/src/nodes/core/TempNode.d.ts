import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";

interface TempNodeInterface {
    isTempNode: true;

    hasDependencies(builder: NodeBuilder): boolean;
}

declare const TempNode: {
    new<TNodeType = unknown>(type?: TNodeType | null): TempNode<TNodeType>;
};

type TempNode<TNodeType> = Node<TNodeType> & TempNodeInterface;

export default TempNode;
