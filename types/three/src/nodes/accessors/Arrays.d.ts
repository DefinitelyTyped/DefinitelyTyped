import StorageBufferNode from "./StorageBufferNode.js";

interface ArrayFunction {
    (count: number | Float32Array, type?: "float"): StorageBufferNode<"float">;
    (count: number | Int32Array, type: "int"): StorageBufferNode<"int">;
    (count: number | Uint32Array, type: "uint"): StorageBufferNode<"uint">;
    (count: number | Float32Array, type: "vec2"): StorageBufferNode<"vec2">;
    (count: number | Int32Array, type: "ivec2"): StorageBufferNode<"ivec2">;
    (count: number | Uint32Array, type: "uvec2"): StorageBufferNode<"uvec2">;
    (count: number | Float32Array, type: "vec3"): StorageBufferNode<"vec3">;
    (count: number | Int32Array, type: "ivec3"): StorageBufferNode<"ivec3">;
    (count: number | Uint32Array, type: "uvec3"): StorageBufferNode<"uvec3">;
    (count: number | Float32Array, type: "vec4"): StorageBufferNode<"vec4">;
    (count: number | Int32Array, type: "ivec4"): StorageBufferNode<"ivec4">;
    (count: number | Uint32Array, type: "uvec4"): StorageBufferNode<"uvec4">;
}

export const attributeArray: ArrayFunction;

export const instancedArray: ArrayFunction;

export {};
