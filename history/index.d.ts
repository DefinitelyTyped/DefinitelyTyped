// Type definitions for history v3.0.0
// Project: https://github.com/ReactTraining/history
// Definitions by: Sergey Buturlakin <https://github.com/sergey-buturlakin>, Nathan Brown <https://github.com/ngbrown>, Viacheslav Slinko <https://github.com/vslinko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// types based on https://github.com/ReactTraining/history/blob/master/docs/Glossary.md

export as namespace ReactTrainingHistory;

export type Action = 'PUSH' | 'REPLACE' | 'POP';
export type BeforeUnloadHook = () => string | void;
export type CreateHistory<THistory, THistoryOptions> = (options?: THistoryOptions) => THistory;
export type CreateHistoryEnhancer<THistory, THistoryOptions, THistoryMixin, THistoryOptionsMixin> = (createHistory: CreateHistory<THistory, THistoryOptions>) => CreateHistory<THistory & THistoryMixin, THistoryOptions & THistoryOptionsMixin>;

export type Hash = string;

export interface History {
    getCurrentLocation(): Location;
    listenBefore(hook: TransitionHook): () => void;
    listen(listener: LocationListener): () => void;
    transitionTo(location: Location): void;
    push(location: LocationDescriptor): void;
    replace(location: LocationDescriptor): void;
    go(n: number): void;
    goBack(): void;
    goForward(): void;
    createKey(): LocationKey;
    createPath(location: LocationDescriptor): Path;
    createHref(location: LocationDescriptor): Href;
    createLocation(location?: LocationDescriptor, action?: Action, key?: LocationKey): Location;
}

export interface HistoryOptions {
    getUserConfirmation?: (message: string, callback: (result: boolean) => void) => void;
    keyLength?: number;
}

export interface BrowserHistoryOptions extends HistoryOptions {
    forceRefresh?: boolean;
}

export interface HashHistoryOptions extends HistoryOptions {
    queryKey?: string;
    hashType?: string;
}

export interface MemoryHistoryOptionsObject extends HistoryOptions {
    entries: LocationDescriptor[];
    current?: number;
}

export type MemoryHistoryOptions = MemoryHistoryOptionsObject | LocationDescriptor[] | Path;

export type Href = string;

export interface Location {
    pathname: Pathname;
    search: Search;
    query: Query;
    state: LocationState;
    action: Action;
    key: LocationKey;
    basename?: string;
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
export type LocationState = Object;
export type Path = string; // Pathname + Search + Hash
export type Pathname = string;
export type Query = Object;
export type Search = string;

export type TransitionHook = (location: Location, callback: (result: any) => void) => any;

export interface BasenameHistoryOptionsMixin {
    basename: string;
}

export interface BeforeUnloadHistoryMixin {
    listenBeforeUnload(hook: BeforeUnloadHook): () => void;
}

export interface UseQueriesHistoryOptionsMixin {
    stringifyQuery?: (obj: any) => string;
    parseQueryString?: (str: string) => any;
}

export { default as createHistory } from './lib/createBrowserHistory';
export { default as createHashHistory } from './lib/createHashHistory';
export { default as createMemoryHistory } from './lib/createMemoryHistory';
export { default as useBasename } from './lib/useBasename';
export { default as useBeforeUnload } from './lib/useBeforeUnload';
export { default as useQueries } from './lib/useQueries';
export { default as Actions } from './lib/Actions';
export { locationsAreEqual } from './lib/LocationUtils';
