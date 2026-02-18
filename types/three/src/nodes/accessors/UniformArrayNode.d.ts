import Node from "../core/Node.js";
import ArrayElementNode from "../utils/ArrayElementNode.js";
import BufferNode from "./BufferNode.js";

type UniformArrayElementNode<TNodeType> = ArrayElementNode<TNodeType>;

interface UniformArrayNodeInterface<TNodeType> {
    array: unknown[];
    elementType: string | null;
    paddedType: string;

    readonly isArrayBufferNode: true;

    getPaddedType(): string;

    element: (indexNode: Node | number) => UniformArrayElementNode<TNodeType>;
}

declare const UniformArrayNode: {
    new<TNodeType>(value: unknown[], elementType?: TNodeType | null): UniformArrayNode<TNodeType>;
};

type UniformArrayNode<TNodeType> = UniformArrayNodeInterface<TNodeType> & BufferNode<TNodeType, unknown[]>;

export default UniformArrayNode;

export const uniformArray: <TNodeType>(values: unknown[], nodeType?: TNodeType | null) => UniformArrayNode<TNodeType>;
