import UniformNode from "../core/UniformNode.js";

export interface BufferNodeInterface {
    isBufferNode: true;

    bufferType: string;
    bufferCount: number;
}

declare const BufferNode: {
    new<TNodeType, TValue>(value: TValue, bufferType: TNodeType, bufferCount?: number): BufferNode<TNodeType, TValue>;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BufferNodeExtensions<TNodeType, TValue> {
}

type BufferNode<TNodeType, TValue> =
    & UniformNode<TNodeType, TValue>
    & BufferNodeInterface
    & BufferNodeExtensions<TNodeType, TValue>;

export default BufferNode;

export const buffer: <TNodeType, TValue>(
    value: TValue,
    type: TNodeType,
    count: number,
) => BufferNode<TNodeType, TValue>;

export {};
