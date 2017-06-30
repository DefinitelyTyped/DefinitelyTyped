// Type definitions for history 3.2
// Project: https://github.com/mjackson/history
// Definitions by: Sergey Buturlakin <https://github.com/sergey-buturlakin>, Nathan Brown <https://github.com/ngbrown>, Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace History;

export type Action = "POP" | "PUSH" | "REPLACE";
export type BeforeUnloadHook = () => string | boolean;
export type CreateHistory<O, H> = (options?: HistoryOptions & O) => History & H;
export type CreateHistoryEnhancer<O, H, E> = (createHistory: CreateHistory<O, H>) => CreateHistory<O, H & E>;

export interface History {
    listenBefore(hook: TransitionHook): () => void;
    listen(listener: LocationListener): () => void;
    transitionTo(location: Location): void;
    push(path: LocationDescriptor): void;
    replace(path: LocationDescriptor): void;
    go(n: number): void;
    goBack(): void;
    goForward(): void;
    createKey(): LocationKey;
    createPath(path: LocationDescriptor): Path;
    createHref(path: LocationDescriptor): Href;
    createLocation(path?: LocationDescriptor, action?: Action, key?: LocationKey): Location;
    getCurrentLocation(): Location;
}

export interface HistoryOptions {
    getUserConfirmation?: (message: string, callback: (result: boolean) => void) => void;
    keyLength?: number;
}

export type Hash = string;
export type Href = string;

export interface Location {
    pathname: Pathname;
    search: Search;
    query: Query;
    state: LocationState;
    action: Action;
    key: LocationKey;
}

export interface LocationDescriptorObject {
    pathname?: Pathname;
    search?: Search;
    query?: Query;
    state?: LocationState;
}

export type LocationDescriptor = LocationDescriptorObject | Path;

export type LocationKey = string;

export type LocationListener = (location: Location) => void;

export type LocationState = any;

export type Path = string; // Pathname + Search;
export type Pathname = string;
export type Query = any;
export type Search = string;

export type TransitionHook = (location: Location, callback: (result: any) => void) => any;

export { default as createHistory } from "history/lib/createBrowserHistory";
export { default as createHashHistory } from "history/lib/createHashHistory";
export { default as createMemoryHistory, MemoryHistory, MemoryHistoryOptions } from "history/lib/createMemoryHistory";

export { default as useBasename, Basename, HistoryBasename, HistoryBasenameOptions } from "history/lib/useBasename";
export { default as useBeforeUnload, HistoryBeforeUnload } from "history/lib/useBeforeUnload";
export { default as useQueries, HistoryQueries } from "history/lib/useQueries";

import * as Actions from "history/lib/actions";
export { Actions };

export { locationsAreEqual } from "history/lib/LocationUtils";
