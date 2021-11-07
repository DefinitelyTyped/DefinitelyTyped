import { CreateHistory, History } from "history";

export interface MemoryHistoryOptions {
    entries?: string | [string] | undefined;
    current?: string | undefined;
}

export interface MemoryHistory {
    canGo(n: number): boolean;
}

declare const createMemoryHistory: CreateHistory<MemoryHistoryOptions, MemoryHistory>;

export default createMemoryHistory;
