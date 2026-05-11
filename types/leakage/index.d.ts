export class MemoryLeakError extends Error {}

export interface IterateOptions {
    iterations?: number | undefined;
    gcollections?: number | undefined;
}

export function iterate(iteratorFn: () => void, options?: IterateOptions): Result;

export namespace iterate {
    function async(iteratorFn: () => Promise<void>, options?: IterateOptions): Promise<Result>;
}

export interface Result {
    heapDiffs: any[];
    gcollections: number;
    iterations: number;

    printSummary(title: string, log?: (msg: string) => void): void;
}
