import Renderer from "../../renderers/common/Renderer.js";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export default class ComputeNode extends Node {
    isComputeNode: true;

    count: number;
    workgroupSize: number[];
    dispatchCount: number;
    name: string;

    onInitFunction: ((args: { renderer: Renderer }) => void) | null;

    constructor(computeNode: Node, count: number, workgroupSize?: number[]);

    label(name: string): void;

    updateDispatchCount(): void;

    onInit(callback: ((args: { renderer: Renderer }) => void) | null): void;
}

export const compute: (
    node: Node,
    count: number,
    workgroupSize?: number[],
) => ShaderNodeObject<ComputeNode>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        compute: typeof compute;
    }
}
