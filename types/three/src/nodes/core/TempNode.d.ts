import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";

interface TempNodeInterface {
    isTempNode: true;

    hasDependencies(builder: NodeBuilder): boolean;
}

/**
 * @deprecated Extend Node instead.
 */
declare const TempNode: {
    new<TNodeType = unknown>(type?: TNodeType | null): TempNode<TNodeType>;
};

/**
 * @deprecated Extend Node instead.
 */
type TempNode<TNodeType> = Node<TNodeType> & TempNodeInterface;

export default TempNode;
