import Node from "../core/Node.js";
import ArrayElementNode from "../utils/ArrayElementNode.js";
import BufferNode from "./BufferNode.js";

declare class UniformArrayElementNode extends ArrayElementNode {
    constructor(arrayBuffer: Node, indexNode: Node);
}

declare class UniformArrayNode extends BufferNode<unknown[]> {
    array: unknown[];
    elementType: string | null;
    paddedType: string;

    readonly isArrayBufferNode: true;

    constructor(value: unknown[], elementType?: string | null);

    getPaddedType(): string;

    element: (indexNode: Node) => UniformArrayElementNode;
}

export default UniformArrayNode;

export const uniformArray: (values: unknown[], nodeType?: string | null) => UniformArrayNode;
