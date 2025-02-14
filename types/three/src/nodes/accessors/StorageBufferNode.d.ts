import StorageBufferAttribute from "../../renderers/common/StorageBufferAttribute.js";
import StorageInstancedBufferAttribute from "../../renderers/common/StorageInstancedBufferAttribute.js";
import { NodeAccess } from "../core/constants.js";
import { Struct } from "../core/StructNode.js";
import StructTypeNode from "../core/StructTypeNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";
import StorageArrayElementNode from "../utils/StorageArrayElementNode.js";
import BufferNode from "./BufferNode.js";

export default class StorageBufferNode extends BufferNode<StorageBufferAttribute | StorageInstancedBufferAttribute> {
    readonly isStorageBufferNode: true;

    structTypeNode: StructTypeNode | null;

    access: NodeAccess;
    isAtomic: boolean;
    isPBO: boolean;

    bufferObject: boolean;

    constructor(
        value: StorageBufferAttribute | StorageInstancedBufferAttribute,
        bufferType?: string | Struct | null,
        bufferCount?: number,
    );

    element(indexNode: NodeRepresentation): ShaderNodeObject<StorageArrayElementNode>;

    setPBO(value: boolean): this;

    getPBO(): boolean;

    setAccess(value: NodeAccess): this;

    toReadOnly(): this;

    setAtmoic(value: boolean): this;

    toAtomic(): this;
}

export const storage: (
    value: StorageBufferAttribute | StorageInstancedBufferAttribute,
    type?: string | Struct | null,
    count?: number,
) => ShaderNodeObject<StorageBufferNode>;

/**
 * @deprecated
 */
export const storageObject: (
    value: StorageBufferAttribute | StorageInstancedBufferAttribute,
    type?: string | Struct | null,
    count?: number,
) => ShaderNodeObject<StorageBufferNode>;
