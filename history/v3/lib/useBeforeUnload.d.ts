import { BeforeUnloadHook, CreateHistory } from "../index";

export interface HistoryBeforeUnload {
    listenBeforeUnload(hook: BeforeUnloadHook): () => void;
}

export default function useBeforeUnload<O, H>(createHistory: CreateHistory<O, H>): CreateHistory<O, H & HistoryBeforeUnload>;
