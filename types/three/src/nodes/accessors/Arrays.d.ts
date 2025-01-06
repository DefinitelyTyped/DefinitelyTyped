import { TypedArray } from "../../core/BufferAttribute.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import StorageBufferNode from "./StorageBufferNode.js";

export const attributeArray: (count: TypedArray | number, type?: string) => ShaderNodeObject<StorageBufferNode>;

export const instancedArray: (count: TypedArray | number, type?: string) => ShaderNodeObject<StorageBufferNode>;
