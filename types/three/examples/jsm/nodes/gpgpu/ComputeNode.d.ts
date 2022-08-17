import Node from '../core/Node';

export default class ComputeNode extends Node {
    isComputeNode: true;

    count: number;
    workgroupSize: number[];
    dispatchCount: number;

    constructor(computeNode: Node, count: number, workgroupSize?: number[]);
}
