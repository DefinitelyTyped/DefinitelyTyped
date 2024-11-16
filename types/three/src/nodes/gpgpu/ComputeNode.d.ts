import Renderer from "../../renderers/common/Renderer.js";
import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export default class ComputeNode extends Node {
    isComputeNode: true;

    count: number;
    workgroupSize: number[];
    dispatchCount: number;

    onInitFunction: ((args: { renderer: Renderer }) => void) | null;

    constructor(computeNode: Node, count: number, workgroupSize?: number[]);

    onInit(callback: ((args: { renderer: Renderer }) => void) | null): void;
}

export const compute: (
    node: NodeRepresentation,
    count: number,
    workgroupSize: number[],
) => ShaderNodeObject<ComputeNode>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        compute: typeof compute;
    }
}
