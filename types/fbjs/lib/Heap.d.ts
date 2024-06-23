declare class Heap {
    constructor(items?: any[], comparator?: (a: any, b: any) => boolean);

    empty(): boolean;
    pop(): any;
    push(item: any): void;
    size(): number;
    peek(): any;

    _heapify(): void;
    _bubbleUp(index: number): void;
    _sinkDown(index: number): void;
}

declare namespace Heap {}

export = Heap;
