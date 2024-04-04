import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class ComputeNode extends Node {
    isComputeNode: true;

    count: number;
    workgroupSize: number[];
    dispatchCount: number;

    constructor(computeNode: Node, count: number, workgroupSize?: number[]);
}

export const compute: (
    node: NodeRepresentation,
    count: number,
    workgroupSize: number[],
) => ShaderNodeObject<ComputeNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        compute: typeof compute;
    }
}
