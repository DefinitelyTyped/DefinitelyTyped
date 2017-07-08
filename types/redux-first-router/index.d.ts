// Type definitions for redux-first-router 1.4
// Project: https://github.com/faceyspacey/redux-first-router#readme
// Definitions by: Valbrand <https://github.com/Valbrand>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import {
    Dispatch,
    Store,
    Reducer,
    Middleware,
    GenericStoreEnhancer
} from 'redux';
import { History } from 'history';

export type Nullable<T> = T | null | undefined;

export type StateGetter = () => object;

export type RouteString = string;

export type RouteThunk = <S>(dispatch: Dispatch<S>, getState: StateGetter) => any | Promise<any>;

export interface RouteObject {
    path: string;
    capitalizedWords?: boolean;
    toPath?(param: string, key?: string): string;
    fromPath?(path: string, key?: string): string;
    thunk?: RouteThunk;
    navKey?: string;
}

export type Route = RouteString | RouteObject;

export interface RoutesMap {
    [key: string]: Route;
}

export interface ReceivedAction {
    type: string;
    payload: object;
    meta?: object;
    navKey?: string | null;
}

export interface HistoryData {
    entries: Array<{ pathname: string }>;
    index: number;
    length: number;
}

export interface Location {
    pathname: string;
    type: string;
    payload: object;
}

export interface LocationState {
    pathname: string;
    type: string;
    payload: object;
    prev: Location;
    kind: Nullable<string>;
    history: Nullable<HistoryData>;
    routesMap: RoutesMap;
    hasSSR?: boolean;
}

export interface ActionMetaLocation {
    current: Location;
    prev: Location;
    kind: Nullable<string>;
    history: Nullable<HistoryData>;
}

export interface NavigationAction {
    type: string;
    key?: Nullable<string>;
    navKey?: Nullable<string>;
    routeName?: string;
    actions?: NavigationAction[];
    action?: NavigationAction;
    params?: object;
    meta?: object;
}

export interface Meta {
    location: ActionMetaLocation;
    notFoundPath?: string;
    navigation?: NavigationAction;
}

export interface Action {
    type: string;
    payload: object;
    meta: Meta;
    navKey?: string;
}

export interface HistoryLocation {
    pathname: string;
}

export type HistoryAction = string;

export type Listener = (location: HistoryLocation, action: HistoryAction) => void;

export type ScrollBehavior = object;

export interface Router {
    getStateForActionOriginal(action: object, state: Nullable<object>): Nullable<object>;
    getStateForAction(action: object, state: Nullable<object>): Nullable<object>;
    getPathAndParamsForState(state: object): { path: Nullable<string>, params: Nullable<object> };
    getActionForPathAndParams(path: string): Nullable<object>;
}

export interface Navigator {
    router: Router;
}

export interface Navigators {
    [key: string]: Navigator;
}

export interface NavigatorsConfig {
    navigators: Navigators;
    patchNavigators(navigators: Navigators): void;

    actionToNavigation(
        navigators: Navigators,
        action: object, // TODO check this
        navigationAction: Nullable<NavigationAction>,
        route: Nullable<Route>
    ): object;
    navigationToAction<S>(
        navigators: Navigators,
        store: Store<S>,
        routesMap: RoutesMap,
        action: object
    ): {
        action: object,
        navigationAction: Nullable<NavigationAction>
    };
}

export interface Options {
    title?: string;
    location?: string;
    notFoundPath?: string;
    scrollTop?: boolean;
    onBeforeChange?<S>(dispatch: Dispatch<S>, getState: StateGetter): void;
    onAfterChange?<S>(dispatch: Dispatch<S>, getState: StateGetter): void;
    onBackNext?<S>(dispatch: Dispatch<S>, getState: StateGetter): void;
    restoreScroll?(history: History): ScrollBehavior;
    navigators?: NavigatorsConfig;
}

export type ScrollUpdater = (performedByUser: boolean) => void;

export const NOT_FOUND: string;

export function actionToPath(action: ReceivedAction, routesMap: RoutesMap): string;

export function back(): void;

export function canGo(n: number): boolean;

export function canGoBack(): boolean;

export function canGoForward(): boolean;

export function connectRoutes(history: History, routesMap: RoutesMap, options?: Options): {
    reducer: Reducer<LocationState>
    middleware: Middleware,
    thunk<S>(store: Store<S>): Promise<Nullable<RouteThunk>>,
    enhancer: GenericStoreEnhancer
};

export function go(n: number): void;

export function history(): History;

export function isLocationAction(action: any): boolean;

export function next(): void;

export function nextPath(): string | void;

export function pathToAction(pathname: string, routesMap: RoutesMap): ReceivedAction;

export function prevPath(): string | void;

export function push(pathname: string): void;

export function redirect(action: Action): Action;

export function replace(pathname: string): void;

export function scrollBehavior(): ScrollBehavior | void;

export function setKind(action: Action, kind: string): Action;

export function updateScroll(): void;
