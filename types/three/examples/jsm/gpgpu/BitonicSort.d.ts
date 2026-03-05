import { Node, Renderer, StorageBufferNode } from "three/webgpu";

export const getBitonicFlipIndices: (index: Node, blockHeight: Node) => Node<"uvec2">;

export const getBitonicDisperseIndices: (index: Node, swapSpan: Node) => Node<"uvec2">;

export interface BitonicSortOptions {
    workgroupSize?: number | undefined;
}

export class BitonicSort<TNodeType> {
    infoStorage: StorageBufferNode<TNodeType>;

    swapOpCount: number;
    stepCount: number;

    constructor(renderer: Renderer, dataBuffer: StorageBufferNode<TNodeType>, options?: BitonicSortOptions);

    computeStep(renderer: Renderer): Promise<void>;
    compute(renderer: Renderer): Promise<void>;
}
