import { Node, Renderer, StorageBufferNode } from "three/webgpu";

export const getBitonicFlipIndices: (index: Node, blockHeight: Node) => Node;

export const getBitonicDisperseIndices: (index: Node, swapSpan: Node) => Node;

export interface BitonicSortOptions {
    workgroupSize?: number | undefined;
}

export class BitonicSort {
    infoStorage: StorageBufferNode;

    swapOpCount: number;
    stepCount: number;

    constructor(renderer: Renderer, dataBuffer: StorageBufferNode, options?: BitonicSortOptions);

    computeStep(renderer: Renderer): Promise<void>;
    compute(renderer: Renderer): Promise<void>;
}
