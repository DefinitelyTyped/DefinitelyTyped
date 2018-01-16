// Type definitions for redux-first-router 1.10
// Project: https://github.com/faceyspacey/redux-first-router#readme
// Definitions by: Valbrand <https://github.com/Valbrand>
//                 viggyfresh <https://github.com/viggyfresh>
//                 janb87 <https://github.com/janb87>
//                 corydeppen <https://github.com/corydeppen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

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

export type RouteThunk = (
    dispatch: Dispatch<any>,
    getState: StateGetter
) => any | Promise<any>;

export type RouteObject<TKeys> = TKeys & {
    capitalizedWords?: boolean;
    navKey?: string;
    path: string;
    thunk?: RouteThunk;
    fromPath?(path: string, key?: string): string;
    toPath?(param: string, key?: string): string;
};

export type Route<TKeys = {}> = RouteString | RouteObject<TKeys>;

export interface RoutesMap<TKeys = {}> {
    [key: string]: Route<TKeys>;
}

export interface ReceivedAction {
    type: string;
    payload: Payload;
    meta?: object;
    query?: object;
    search?: string;
    navKey?: Nullable<string>;
}

export interface ReceivedActionMeta {
    type: string;
    payload: Payload;
    query?: object;
    navKey?: Nullable<string>;
    meta: {
        notFoundPath?: string;
        query?: object;
        search?: string;
    };
}

export interface HistoryData {
    entries: Array<{ pathname: string }>;
    index: number;
    length: number;
}

export interface Location {
    pathname: string;
    type: string;
    payload: Payload;
    query?: object;
    search?: string;
}

export interface LocationState {
    pathname: string;
    type: string;
    payload: Payload;
    query?: object;
    search?: string;
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
    params?: Params;
    meta?: object;
}

export interface Meta {
    location: ActionMetaLocation;
    notFoundPath?: string;
    navigation?: NavigationAction;
    query?: object;
    search?: string;
}

export interface Action {
    type: string;
    payload?: Payload;
    meta?: Meta;
    query?: object;
    navKey?: Nullable<string>;
}

export interface HistoryLocation {
    pathname: string;
    search?: string;
}

export type HistoryAction = string;

export type Listener = (
    location: HistoryLocation,
    action: HistoryAction
) => void;

export type ScrollBehavior = object;

export interface Router {
    getStateForActionOriginal(
        action: object,
        state: Nullable<object>
    ): Nullable<object>;
    getStateForAction(
        action: object,
        state: Nullable<object>
    ): Nullable<object>;
    getPathAndParamsForState(
        state: object
    ): { path: Nullable<string>; params: Nullable<Params> };
    getActionForPathAndParams(path: string): Nullable<object>;
}

export interface Navigator {
    router: Router;
}

export interface Navigators {
    [key: string]: Navigator;
}

export type SelectLocationState = (state: object) => LocationState;
export type SelectTitleState = (state: object) => string;

export interface QuerySerializer {
    stringify(params: Params): string;
    parse(queryString: string): object;
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
    navigationToAction(
        navigators: Navigators,
        store: Store<any>,
        routesMap: RoutesMap,
        action: object
    ): {
        action: object;
        navigationAction: Nullable<NavigationAction>;
    };
}

export interface Options {
    title?: string | SelectTitleState;
    location?: string | SelectLocationState;
    notFoundPath?: string;
    scrollTop?: boolean;
    onBeforeChange?(dispatch: Dispatch<any>, getState: StateGetter): void;
    onAfterChange?(dispatch: Dispatch<any>, getState: StateGetter): void;
    onBackNext?(dispatch: Dispatch<any>, getState: StateGetter): void;
    restoreScroll?(history: History): ScrollBehavior;
    initialDispatch?: boolean;
    querySerializer?: QuerySerializer;
    navigators?: NavigatorsConfig;
}

export type Params = object;
export type Payload = object;

export type ScrollUpdater = (performedByUser: boolean) => void;

export const NOT_FOUND: '@@redux-first-router/NOT_FOUND';

export function actionToPath(
    action: ReceivedAction,
    routesMap: RoutesMap,
    querySerializer?: QuerySerializer
): string;

export function back(): void;

export function canGo(n: number): boolean;

export function canGoBack(): boolean;

export function canGoForward(): boolean;

export function connectRoutes(
    history: History,
    routesMap: RoutesMap,
    options?: Options
): {
    reducer: Reducer<LocationState>;
    middleware: Middleware;
    thunk(store: Store<any>): Promise<Nullable<RouteThunk>>;
    enhancer: GenericStoreEnhancer;
    initialDispatch?(): void;
};

export function go(n: number): void;

export function history(): History;

export function isLocationAction(action: any): boolean;

export function next(): void;

export function nextPath(): string | void;

export function pathToAction(
    pathname: string,
    routesMap: RoutesMap
): ReceivedAction;

export function prevPath(): string | void;

export function push(pathname: string): void;

export function redirect(action: Action): Action;

export function replace(pathname: string): void;

export function scrollBehavior(): ScrollBehavior | void;

export function setKind(action: Action, kind: string): Action;

export function updateScroll(): void;
