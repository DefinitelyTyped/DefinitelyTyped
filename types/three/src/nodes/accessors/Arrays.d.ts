import { ShaderNodeObject } from "../tsl/TSLCore.js";
import StorageBufferNode from "./StorageBufferNode.js";

export const attributeArray: (count: number, type?: string) => ShaderNodeObject<StorageBufferNode>;

export const instancedArray: (count: number, type?: string) => ShaderNodeObject<StorageBufferNode>;
