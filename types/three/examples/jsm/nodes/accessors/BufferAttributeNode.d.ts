import { BufferAttribute, InterleavedBuffer, InterleavedBufferAttribute, TypedArray, Usage } from "three";
import InputNode from "../core/InputNode.js";
import NodeBuilder from "../core/NodeBuilder.js";
declare class BufferAttributeNode extends InputNode<TypedArray | InterleavedBuffer | BufferAttribute> {
    readonly isBufferNode: true;
    bufferType: string | null;
    bufferStride: number;
    bufferOffset: number;
    usage: Usage;
    instanced: boolean;
    attribute: BufferAttribute | InterleavedBufferAttribute | null;
    constructor(
        value: TypedArray | InterleavedBuffer | BufferAttribute,
        bufferType?: string | null,
        bufferStride?: number,
        bufferOffset?: number,
    );
    getHash(builder: NodeBuilder): string;
    getNodeType(builder: NodeBuilder): string | null;
    setup(builder: NodeBuilder): void;
    generate(builder: NodeBuilder): string | null | undefined;
    getInputType(): string;
    setUsage(value: Usage): this;
    setInstanced(value: boolean): this;
}
export default BufferAttributeNode;
export declare const bufferAttribute: (
    array: TypedArray | InterleavedBuffer | BufferAttribute,
    type?: string | null,
    stride?: number,
    offset?: number,
) => import("../shadernode/ShaderNode.js").ShaderNodeObject<BufferAttributeNode>;
export declare const dynamicBufferAttribute: (
    array: TypedArray | InterleavedBuffer | BufferAttribute,
    type?: string | null,
    stride?: number,
    offset?: number,
) => import("../shadernode/ShaderNode.js").ShaderNodeObject<BufferAttributeNode>;
export declare const instancedBufferAttribute: (
    array: TypedArray | InterleavedBuffer | BufferAttribute,
    type?: string | null,
    stride?: number,
    offset?: number,
) => import("../shadernode/ShaderNode.js").ShaderNodeObject<BufferAttributeNode>;
export declare const instancedDynamicBufferAttribute: (
    array: TypedArray | InterleavedBuffer | BufferAttribute,
    type?: string | null,
    stride?: number,
    offset?: number,
) => import("../shadernode/ShaderNode.js").ShaderNodeObject<BufferAttributeNode>;
