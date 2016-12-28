// Type definitions for history v4.5.0
// Project: https://github.com/mjackson/history
// Definitions by: Sergey Buturlakin <https://github.com/sergey-buturlakin>, Nathan Brown <https://github.com/ngbrown>, Young Rok Kim <https://github.com/rokoroku>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export as namespace History;

export type Action = 'PUSH' | 'POP' | 'REPLACE';
export type UnregisterCallback = () => void;

export interface History {
    length: number,
    action: Action,
    location: Location,
    push(path: Path, state?: LocationState): void;
    push(location: LocationDescriptor): void;
    replace(path: Path, state?: LocationState): void;
    replace(location: LocationDescriptor): void;
    go(n: number): void;
    goBack(): void;
    goForward(): void;
    block(prompt?: boolean): UnregisterCallback,
    listen(listener: LocationListener): UnregisterCallback;
    createHref(location: LocationDescriptor): Path;
}

export type Location = {
    pathname: Pathname;
    search: Search;
    state: LocationState;
    hash: Hash;
    key: LocationKey;
};

export type LocationDescriptorObject = {
    pathname?: Pathname;
    search?: Search;
    state?: LocationState;
    hash?: Hash;
    key?: LocationKey;
};

export namespace History {
    export type LocationDescriptor = LocationDescriptorObject;
    export type LocationKey = string;
    export type LocationListener = (location: Location, action: Action) => void;
    export type LocationState = Object;
    export type Path = string;
    export type Pathname = string;
    export type Search = string;
    export type TransitionHook = (location: Location, callback: (result: any) => void) => any
    export type Hash = string;
}

// Back-compat aliases
export type LocationDescriptor = History.LocationDescriptor;
export type LocationKey = History.LocationKey;
export type LocationListener = History.LocationListener;
export type LocationState = History.LocationState;
export type Path = History.Path;
export type Pathname = History.Pathname;
export type Search = History.Search;
export type TransitionHook = History.TransitionHook;
export type Hash = History.Hash;

import { default as createBrowserHistory } from "./createBrowserHistory";
import { default as createHashHistory } from "./createHashHistory";
import { default as createMemoryHistory } from "./createMemoryHistory";
import { createLocation, locationsAreEqual } from "./LocationUtils";
import { parsePath, createPath } from "./PathUtils";

// Global usage, without modules, needs the small trick, because lib.d.ts
// already has `history` and `History` global definitions:
// var createHistory = ((window as any).History as HistoryModule.Module).createHistory;
export interface Module {
    createBrowserHistory: typeof createBrowserHistory;
    createHashHistory: typeof createHashHistory;
    createMemoryHistory: typeof createMemoryHistory;
    createLocation: typeof createLocation;
    locationsAreEqual: typeof locationsAreEqual;
    parsePath: typeof parsePath;
    createPath: typeof createPath;
}

export * from "./createBrowserHistory";
export * from "./createHashHistory";
export * from "./createMemoryHistory";
export { createLocation, locationsAreEqual } from "./LocationUtils";
export { parsePath, createPath } from "./PathUtils";
export { createBrowserHistory, createHashHistory, createMemoryHistory };
