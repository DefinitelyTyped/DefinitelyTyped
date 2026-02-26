import StorageBufferNode from "../accessors/StorageBufferNode.js";
import Node from "../core/Node.js";
import ArrayElementNode from "./ArrayElementNode.js";

interface StorageArrayElementNodeInterface<TNodeType> {
    node: StorageBufferNode<TNodeType>;

    readonly isStorageArrayElementNode: true;

    get storageBufferNode(): StorageBufferNode<TNodeType>;
    set storageBufferNode(value: StorageBufferNode<TNodeType>);
}

declare const StorageArrayElementNode: {
    new<TNodeType>(
        storageBufferNode: StorageBufferNode<TNodeType>,
        indexNode: Node,
    ): StorageArrayElementNode<TNodeType>;
};

type StorageArrayElementNode<TNodeType> = ArrayElementNode<TNodeType> & StorageArrayElementNodeInterface<TNodeType>;

export default StorageArrayElementNode;

export const storageElement: <TNodeType>(
    storageBufferNode: Node<TNodeType>,
    indexNode: Node,
) => StorageArrayElementNode<TNodeType>;
