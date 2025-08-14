import Renderer from "../../renderers/common/Renderer.js";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export default class ComputeNode extends Node {
    readonly isComputeNode: true;

    computeNode: Node;
    workgroupSize: number[];
    count: number | null;
    name: string;

    onInitFunction: ((args: { renderer: Renderer }) => void) | null;

    constructor(computeNode: Node, workgroupSize: number[]);

    setCount(count: number): this;
    getCount(): number | null;

    setName(name: string): this;

    /**
     * @deprecated "label()" has been deprecated. Use "setName()" instead.
     */
    label(name: string): this;

    onInit(callback: ((args: { renderer: Renderer }) => void) | null): void;
}

export const computeKernel: (node: Node, workgroupSize?: number[]) => ShaderNodeObject<ComputeNode>;

export const compute: (
    node: Node,
    count: number,
    workgroupSize?: number[],
) => ShaderNodeObject<ComputeNode>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        compute: typeof compute;
        computeKernel: typeof computeKernel;
    }
}
