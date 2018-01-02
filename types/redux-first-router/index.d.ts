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
    StoreEnhancer
} from 'redux';
import { History } from 'history';

export type Nullable<T> = T | null | undefined;

export type StateGetter<TState = any> = () => TState;

export type RouteString = string;

export type RouteThunk<TState = any> = (
    dispatch: Dispatch<TState>,
    getState: StateGetter<TState>,
) => any | Promise<any>;

export type RouteObject<TKeys = {}, TState = any> = TKeys & {
    capitalizedWords?: boolean;
    navKey?: string;
    path: string;
    thunk?: RouteThunk<TState>;
    fromPath?(path: string, key?: string): string;
    toPath?(param: string, key?: string): string;
};

export type Route<TKeys = {}, TState = any> = RouteString | RouteObject<TKeys, TState>;

export interface RoutesMap<TKeys = {}, TState = any> {
    [key: string]: Route<TKeys, TState>;
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

export interface LocationState<TKeys = {}, TState = any> {
    pathname: string;
    type: string;
    payload: Payload;
    query?: object;
    search?: string;
    prev: Location;
    kind: Nullable<string>;
    history: Nullable<HistoryData>;
    routesMap: RoutesMap<TKeys, TState>;
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

export interface Router<TState = any> {
    getStateForActionOriginal(
        action: object,
        state: Nullable<TState>
    ): Nullable<TState>;
    getStateForAction(
        action: object,
        state: Nullable<TState>
    ): Nullable<TState>;
    getPathAndParamsForState(
        state: TState
    ): { path: Nullable<string>; params: Nullable<Params> };
    getActionForPathAndParams(path: string): Nullable<object>;
}

export interface Navigator<TState = any> {
    router: Router<TState>;
}

export interface Navigators<TState = any> {
    [key: string]: Navigator<TState>;
}

export type SelectLocationState<TKeys = {}, TState = any> = (state: TState) => LocationState<TKeys, TState>;
export type SelectTitleState<TState = any> = (state: TState) => string;

export interface QuerySerializer {
    stringify(params: Params): string;
    parse(queryString: string): object;
}

export interface NavigatorsConfig<TKeys = {}, TState = any> {
    navigators: Navigators<TState>;
    patchNavigators(navigators: Navigators<TState>): void;

    actionToNavigation(
        navigators: Navigators<TState>,
        action: object, // TODO check this
        navigationAction: Nullable<NavigationAction>,
        route: Nullable<Route<TKeys, TState>>
    ): object;
    navigationToAction(
        navigators: Navigators<TState>,
        store: Store<TState>,
        routesMap: RoutesMap<TKeys, TState>,
        action: object
    ): {
            action: object;
            navigationAction: Nullable<NavigationAction>;
        };
}

export interface Options<TKeys = {}, TState = any> {
    title?: string | SelectTitleState<TState>;
    location?: string | SelectLocationState<TKeys, TState>;
    notFoundPath?: string;
    scrollTop?: boolean;
    onBeforeChange?(dispatch: Dispatch<TState>, getState: StateGetter<TState>): void;
    onAfterChange?(dispatch: Dispatch<TState>, getState: StateGetter<TState>): void;
    onBackNext?(dispatch: Dispatch<TState>, getState: StateGetter<TState>): void;
    restoreScroll?(history: History): ScrollBehavior;
    initialDispatch?: boolean;
    querySerializer?: QuerySerializer;
    navigators?: NavigatorsConfig<TKeys, TState>;
}

export type Params = object;
export type Payload = object;

export type ScrollUpdater = (performedByUser: boolean) => void;

export const NOT_FOUND: '@@redux-first-router/NOT_FOUND';

export function actionToPath<TKeys = {}, TState = any>(
    action: ReceivedAction,
    routesMap: RoutesMap<TKeys, TState>,
    querySerializer?: QuerySerializer
): string;

export function back(): void;

export function canGo(n: number): boolean;

export function canGoBack(): boolean;

export function canGoForward(): boolean;

export function connectRoutes<TKeys = {}, TState = any>(
    history: History,
    routesMap: RoutesMap<TKeys, TState>,
    options?: Options<TKeys, TState>
): {
        reducer: Reducer<LocationState<TKeys, TState>>;
        middleware: Middleware;
        thunk<ThunkState = TState>(store: Store<ThunkState>): Promise<Nullable<RouteThunk<ThunkState>>>;
        enhancer: StoreEnhancer<TState>;
        initialDispatch?(): void;
    };

export function go(n: number): void;

export function history(): History;

export function isLocationAction(action: any): boolean;

export function next(): void;

export function nextPath(): string | void;

export function pathToAction<TKeys = {}, TState = any>(
    pathname: string,
    routesMap: RoutesMap<TKeys, TState>
): ReceivedAction;

export function prevPath(): string | void;

export function push(pathname: string): void;

export function redirect(action: Action): Action;

export function replace(pathname: string): void;

export function scrollBehavior(): ScrollBehavior | void;

export function setKind(action: Action, kind: string): Action;

export function updateScroll(): void;
