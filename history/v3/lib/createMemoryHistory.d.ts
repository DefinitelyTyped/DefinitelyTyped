import { CreateHistory, History } from '../index';

export interface MemoryHistoryOptions {
    entries?: string | [string];
    current?: string;
}

export interface MemoryHistory {
    canGo(n: number): boolean;
}

declare const createMemoryHistory: CreateHistory<MemoryHistoryOptions, MemoryHistory>;

export default createMemoryHistory;
