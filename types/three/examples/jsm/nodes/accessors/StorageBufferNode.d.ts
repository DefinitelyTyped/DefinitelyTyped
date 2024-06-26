import StorageBufferAttribute from "../../renderers/common/StorageBufferAttribute.js";
import StorageInstancedBufferAttribute from "../../renderers/common/StorageInstancedBufferAttribute.js";
import { NodeOrType, NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";
import StorageArrayElementNode from "../utils/StoargeArrayElementNode.js";
import BufferNode from "./BufferNode.js";

export default class StorageBufferNode extends BufferNode {
    readonly isStorageBufferNode: true;
    bufferObject: boolean;

    constructor(
        value: StorageBufferAttribute | StorageInstancedBufferAttribute,
        bufferType: string,
        bufferCount?: number,
    );

    element(indexNode: NodeRepresentation): ShaderNodeObject<StorageArrayElementNode>;

    setBufferObject(value: boolean): this;
}

export const storage: (
    value: StorageBufferAttribute | StorageInstancedBufferAttribute,
    nodeOrType: NodeOrType,
    count: number,
) => ShaderNodeObject<StorageBufferNode>;
export const storageObject: (
    value: StorageBufferAttribute | StorageInstancedBufferAttribute,
    nodeOrType: NodeOrType,
    count: number,
) => ShaderNodeObject<StorageBufferNode>;
