export type ProgressFn = (state: Cell[][]) => void;

export interface Cell {
    fixed: boolean;
    value: number;
}

export interface Options {
    onProgress?: ProgressFn | undefined;
}

export function solve(data: number[][], options?: Options): number[][];
