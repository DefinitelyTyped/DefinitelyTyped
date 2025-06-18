import { TypedArray } from "../../core/BufferAttribute.js";
import { Struct } from "../core/StructNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import StorageBufferNode from "./StorageBufferNode.js";

export const attributeArray: (
    count: TypedArray | number,
    type?: string | Struct,
) => ShaderNodeObject<StorageBufferNode>;

export const instancedArray: (
    count: TypedArray | number,
    type?: string | Struct,
) => ShaderNodeObject<StorageBufferNode>;
