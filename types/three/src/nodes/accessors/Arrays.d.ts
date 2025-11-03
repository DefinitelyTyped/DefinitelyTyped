import { TypedArray } from "../../core/BufferAttribute.js";
import { Struct } from "../core/StructNode.js";
import StorageBufferNode from "./StorageBufferNode.js";

export const attributeArray: (
    count: TypedArray | number,
    type?: string | Struct,
) => StorageBufferNode;

export const instancedArray: (
    count: TypedArray | number,
    type?: string | Struct,
) => StorageBufferNode;
