import { CreateHistory, Href, LocationState, Path, Pathname, Query } from "history";

export interface HistoryQueries {
    pushState(state: LocationState, pathname: Pathname, query?: Query): void;
    replaceState(state: LocationState, pathname: Pathname, query?: Query): void;
    createPath(path: Path, query?: Query): Path;
    createHref(path: Path, query?: Query): Href;
}

export default function useQueries<O, H>(createHistory: CreateHistory<O, H>): CreateHistory<O, H & HistoryQueries>;
