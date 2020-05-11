// Type definitions for leakage 0.4
// Project: https://github.com/andywer/leakage#readme
// Definitions by: Arne Schubert <https://github.com/atd-schubert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class MemoryLeakError extends Error {}

export interface IterateOptions {
    iterations?: number;
    gcollections?: number;
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
