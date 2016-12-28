// Back-compat declarations for history 2.0

import { History, Location, LocationDescriptorObject } from './index';

export type LocationDescriptor = History.LocationDescriptor;
export type LocationKey = History.LocationKey;
export type LocationListener = History.LocationListener;
export type LocationState = History.LocationState;
export type Path = History.Path;
export type Pathname = History.Pathname;
export type Search = History.Search;
export type TransitionHook = History.TransitionHook;
export type Hash = History.Hash;
export type Href = Path;
export type Query = any;
export type QueryString = string;

export interface HistoryBeforeUnload {
  listenBeforeUnload(hook: TransitionHook): () => void;
}

export interface LocationDescriptorObject extends LocationDescriptorObject {
  query?: Query;
}

export interface Location extends Location {
  query?: Query;
}

export interface HistoryQueries {
  pushState(state: LocationState, pathname: Pathname | Path, query?: Query): void;
  replaceState(state: LocationState, pathname: Pathname | Path, query?: Query): void;
  createPath(path: Path, query?: Query): Path;
  createHref(path: Path, query?: Query): Href;
}

export interface HistoryOptions {
  getCurrentLocation?: () => Location;
  finishTransition?: (nextLocation: Location) => boolean;
  saveState?: (key: LocationKey, state: LocationState) => void;
  go?: (n: number) => void;
  getUserConfirmation?: (message: string, callback: (result: boolean) => void) => void;
  keyLength?: number;
  queryKey?: string | boolean;
  stringifyQuery?: (obj: any) => string;
  parseQueryString?: (str: string) => any;
  basename?: string;
  entries?: string | [any];
  current?: number;
}

export type CreateHistory<T> = (options?: HistoryOptions) => T;

export type CreateHistoryEnhancer<T, E> = (createHistory: CreateHistory<T>) => CreateHistory<T & E>;
