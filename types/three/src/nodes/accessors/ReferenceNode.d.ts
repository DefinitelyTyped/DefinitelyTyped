import Node from "../core/Node.js";

interface ReferenceNodeInterface<T> extends Node {
    property: string;

    uniformType: string;

    object: T;
    count: number | null;

    properties: string[];
    reference: T | null;
    node: Node | null;

    setNodeType(uniformType: string): void;
}

declare const ReferenceNode: {
    new<TNodeType, T>(
        property: string,
        uniformType: TNodeType,
        object?: T | null,
        count?: number | null,
    ): ReferenceNode<TNodeType, T>;
};

type ReferenceNode<TNodeType, T> = ReferenceNodeInterface<T> & Node<TNodeType>;

export default ReferenceNode;

export const reference: <const TNodeType, T>(name: string, type: TNodeType, object: T) => ReferenceNode<TNodeType, T>;
export const referenceBuffer: <const TNodeType, T>(
    name: string,
    type: TNodeType,
    count: number,
    object: T,
) => ReferenceNode<TNodeType, T>;
