import Renderer from "../../renderers/common/Renderer.js";
import Node from "../core/Node.js";

export default class ComputeNode extends Node {
    readonly isComputeNode: true;

    computeNode: Node;
    workgroupSize: number[];
    count: number | number[] | null;
    name: string;

    onInitFunction: ((args: { renderer: Renderer }) => void) | null;

    constructor(computeNode: Node, workgroupSize: number[]);

    setCount(count: number | number[]): this;
    getCount(): number | number[] | null;

    setName: (name: string) => this;

    /**
     * @deprecated "label()" has been deprecated. Use "setName()" instead.
     */
    label: (name: string) => this;

    onInit(callback: ((args: { renderer: Renderer }) => void) | null): void;
}

export const computeKernel: (node: Node, workgroupSize?: number[]) => ComputeNode;

export const compute: (
    node: Node,
    count: number,
    workgroupSize?: number[],
) => ComputeNode;

declare module "../Nodes.js" {
    interface Node {
        compute: (
            count: number,
            workgroupSize?: number[],
        ) => ComputeNode;
        computeAssign: (
            count: number,
            workgroupSize?: number[],
        ) => this;

        computeKernel: (workgroupSize?: number[]) => ComputeNode;
        computeKernelAssign: (workgroupSize?: number[]) => this;
    }
}
