import Node from "../core/Node.js";

declare interface SampleNodeInterface<TNodeType> {
    callback: (uv: Node<"vec2">) => Node<TNodeType>;
    uvNode: Node<"vec2"> | null;

    readonly isSampleNode: boolean;

    sample(uv: Node<"vec2">): Node<TNodeType>;
}

declare const SampleNode: {
    new<TNodeType>(
        callback: (uv: Node<"vec2">) => Node<TNodeType>,
        uvNode?: Node<"vec2"> | null,
    ): SampleNode<TNodeType>;
};

type SampleNode<TNodeType> = SampleNodeInterface<TNodeType> & Node<TNodeType>;

export default SampleNode;

export const sample: <TNodeType>(
    callback: (uv: Node<"vec2">) => Node<TNodeType>,
    uvNode?: Node<"vec2"> | null,
) => SampleNode<TNodeType>;
