// Type definitions for redux-first-routing 0.3
// Project: https://github.com/mksarge/redux-first-routing
// Definitions by: Tomek Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import createBrowserHistory from 'history/createBrowserHistory';
import { History, Pathname, Search, Hash, Path, LocationDescriptorObject } from 'history';
import { Action, Store, Reducer, Middleware } from 'redux';

export { createBrowserHistory };

export function startListener(history: History, store: Store): void;

// constants
export const PUSH: 'ROUTER/PUSH';
export const REPLACE: 'ROUTER/REPLACE';
export const GO: 'ROUTER/GO';
export const GO_BACK: 'ROUTER/GO_BACK';
export const GO_FORWARD: 'ROUTER/GO_FORWARD';
export const LOCATION_CHANGE: 'ROUTER/LOCATION_CHANGE';

// actions
export interface pushAction<T extends Path | LocationDescriptorObject> extends Action<typeof PUSH> {
    payload: T;
}
export function push<T extends Path | LocationDescriptorObject>(href: T): pushAction<T>;

export interface replaceAction<T extends Path | LocationDescriptorObject> extends Action<typeof REPLACE> {
    payload: T;
}
export function replace<T extends Path | LocationDescriptorObject>(href: T): replaceAction<T>;

export interface goAction<T extends number> extends Action<typeof GO> {
    payload: T;
}
export function go<T extends number>(index: T): goAction<T>;

export type goBackAction = Action<typeof GO_BACK>;
export function goBack(): goBackAction;

export type goForwardAction = Action<typeof GO_FORWARD>;
export function goForward(): goForwardAction;

export interface locationChangeAction<P extends Pathname, S extends Search, H extends Hash> extends Action<typeof LOCATION_CHANGE> {
    payload: {
        pathname: P;
        search: S;
        queries: any,
        hash: H,
    };
}
export function locationChange<P extends Pathname, S extends Search, H extends Hash>(_: { pathname: P, search: S, hash: H }): locationChangeAction<P, S, H>;

export interface State {
    pathname: Pathname;
    search: Search;
    queries: any;
    hash: Hash;
}

export const routerReducer: Reducer<State>;

export function routerMiddleware(history: History): Middleware<any, State>;
