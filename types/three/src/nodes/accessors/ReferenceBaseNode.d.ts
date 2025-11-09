import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class ReferenceBaseNode<T> extends Node {
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

export default ReferenceBaseNode;

export const reference: <T>(name: string, type: string, object: T) => ShaderNodeObject<ReferenceBaseNode<T>>;
export const referenceBuffer: <T>(
    name: string,
    type: string,
    count: number,
    object: T,
) => ShaderNodeObject<ReferenceBaseNode<T>>;
