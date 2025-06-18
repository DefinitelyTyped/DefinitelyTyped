import { QueryBase } from "./Query";

export interface Scan<T> extends QueryBase<T> {
    segments(segment: string, totalSegments: number): this;
}

export type ParallelScan<T> = Scan<T>;
