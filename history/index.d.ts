// Type definitions for history v4.3.0
// Project: https://github.com/mjackson/history
// Definitions by: Viacheslav Slinko <https://github.com/vslinko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace History;

export type Action = 'PUSH' | 'REPLACE' | 'POP';
export type Basename = string;
export type Pathname = string;
export type Search = string;
export type Hash = string;
export type LocationState = any;
export type Key = string;

export type Path = string; // Pathname + Search + Hash

export interface LocationDescriptorObject {
  pathname?: Pathname;
  search?: Search;
  hash?: Hash;
  state?: LocationState;
}

export type LocationDescriptor = Path | LocationDescriptorObject;

export interface Location {
  pathname: Pathname;
  search: Search;
  hash: Hash;
  state?: LocationState;
  key?: Key;
}

export interface Listener {
  (location: Location, action: Action): void;
}

export interface ConfirmationFn {
  (message: string, callback: (result: boolean) => void): void;
}

export type PromptMessage = string;

export interface PromptFn {
  (location: Location, action: Action): PromptMessage | void;
}

export type Prompt = PromptMessage | PromptFn | boolean;

export interface BrowserHistoryOptions {
  basename?: Basename;
  forceRefresh?: boolean;
  getUserConfirmation?: ConfirmationFn;
  keyLength?: number;
}

export interface HashHistoryOptions {
  basename?: Basename;
  getUserConfirmation?: ConfirmationFn;
  hashType?: 'hashbang' | 'noslash' | 'slash';
}

export interface MemoryHistoryOptions {
  getUserConfirmation?: ConfirmationFn;
  initialEntries?: LocationDescriptor[];
  initialIndex?: number;
  keyLength?: number;
}

export interface History {
  length: number;
  action: Action;
  location: Location;
  push(path: LocationDescriptor, state?: LocationState): void;
  replace(path: LocationDescriptor, state?: LocationState): void;
  go(n: number): void;
  goBack(): void;
  goForward(): void;
  block(prompt?: Prompt): () => void;
  listen(listener: Listener): () => void;
}

export interface MemoryHistroryMixin {
  index: number;
  entries: Location[];
  canGo(n: number): boolean;
}

export type BrowserHistory = History;
export type HashHistory = History;
export type MemoryHistory = History & MemoryHistroryMixin;

export interface TransitionManager {
  setPrompt(prompt: Prompt): () => void;
  confirmTransitionTo(
    location: Location,
    action: Action,
    getUserConfirmation: ConfirmationFn | void,
    callback: (result: boolean) => void
  ): void;
  appendListener(listener: Listener): () => void;
  notifyListeners(location: Location, action: Action): void;
}

export interface CreateHistory<THistory, THistoryOptions> {
  (options?: THistoryOptions): THistory;
}

export { default as createBrowserHistory } from './createBrowserHistory';
export { default as createHashHistory } from './createHashHistory';
export { default as createMemoryHistory } from './createMemoryHistory';
export { createLocation, locationsAreEqual } from './LocationUtils';
export { parsePath, createPath } from './PathUtils';
