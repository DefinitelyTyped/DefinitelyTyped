import Node from "../core/Node.js";
import { NodeOrType, NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class ReferenceNode<T> extends Node {
    property: string;

    uniformType: string;

    object: T;
    count: number | null;

    properties: string[];
    reference: T | null;
    node: Node | null;

    constructor(property: string, uniformType: string, object?: T | null, count?: number | null);

    setNodeType(uniformType: string): void;
}

export const reference: <T>(name: string, nodeOrType: NodeOrType, object: T) => ShaderNodeObject<ReferenceNode<T>>;
export const referenceBuffer: <T>(
    name: string,
    nodeOrType: NodeOrType,
    count: NodeRepresentation,
    object: T,
) => ShaderNodeObject<ReferenceNode<T>>;
