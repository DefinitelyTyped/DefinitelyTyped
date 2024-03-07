import Node from "../core/Node.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";
import ArrayElementNode from "../utils/ArrayElementNode.js";
import BufferNode from "./BufferNode.js";

declare class UniformsElementNode extends ArrayElementNode {
    constructor(arrayBuffer: Node, indexNode: Node);
}

export default class UniformsNode extends BufferNode {
    array: unknown[];
    elementType: string | null;

    readonly isArrayBufferNode: true;

    constructor(value: unknown[], elementType?: string | null);

    getElementType(): string | null;

    getElementLength(): number;

    element(indexNode: number): ShaderNodeObject<UniformsElementNode>;
}

export const uniforms: (values: unknown[], nodeType?: string | null) => ShaderNodeObject<UniformsNode>;
