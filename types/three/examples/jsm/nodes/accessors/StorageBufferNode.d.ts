import { NodeTypeOption } from "../core/constants.js";
import { NodeOrType, NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";
import StorageArrayElementNode from "../utils/StoargeArrayElementNode.js";
import BufferNode from "./BufferNode.js";

export default class StorageBufferNode extends BufferNode {
    readonly isStorageBufferNode: true;
    bufferObject: boolean;

    constructor(value: ArrayLike<number>, bufferType: NodeTypeOption, bufferCount?: number);

    element(indexNode: NodeRepresentation): ShaderNodeObject<StorageArrayElementNode>;

    setBufferObject(value: boolean): this;
}

export const storage: (
    value: ArrayLike<number>,
    nodeOrType: NodeOrType,
    count: number,
) => ShaderNodeObject<StorageBufferNode>;
export const storageObject: (
    value: ArrayLike<number>,
    nodeOrType: NodeOrType,
    count: number,
) => ShaderNodeObject<StorageBufferNode>;
