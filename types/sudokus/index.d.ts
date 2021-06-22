// Type definitions for sudokus 1.0
// Project: https://github.com/Moeriki/node-sudokus#readme
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type ProgressFn = (state: Cell[][]) => void;

export interface Cell {
    fixed: boolean;
    value: number;
}

export interface Options {
    onProgress?: ProgressFn;
}

export function solve(data: number[][], options?: Options): number[][];
