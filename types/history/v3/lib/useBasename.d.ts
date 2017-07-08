import { CreateHistory, HistoryOptions } from "history";

export type Basename = string;

export interface HistoryBasenameOptions {
    basename?: Basename;
}

export interface HistoryBasename {
    basename?: Basename;
}

export default function useBasename<O, H>(createHistory: CreateHistory<O, H>): CreateHistory<O & HistoryBasenameOptions, H & HistoryBasename>;
