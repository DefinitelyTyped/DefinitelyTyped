import StorageBufferNode from "../accessors/StorageBufferNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";
import ArrayElementNode from "./ArrayElementNode.js";

export default class StorageArrayElementNode extends ArrayElementNode {
    node: StorageBufferNode;

    readonly isStorageArrayElementNode: true;

    constructor(storageBufferNode: StorageBufferNode, indexNode: Node);

    get storageBufferNode(): StorageBufferNode;
    set storageBufferNode(value: StorageBufferNode);
}

export const storageElement: (
    storageBufferNode: NodeRepresentation,
    indexNode: NodeRepresentation,
) => ShaderNodeObject<StorageArrayElementNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        storageElement: typeof storageElement;
    }
}
