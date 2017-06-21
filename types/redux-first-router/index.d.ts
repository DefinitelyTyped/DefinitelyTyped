// Type definitions for redux-first-router 1.4
// Project: https://github.com/faceyspacey/redux-first-router#readme
// Definitions by: Valbrand <https://github.com/Valbrand>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Dispatch, Store } from 'redux'

interface StateGetter {
    <S>(): S
}

export type RouteString = string

export interface RouteObject {
    path: string
    capitalizedWords?: boolean
    toPath?: (param: string, key?: string) => string
    fromPath?: (path: string, key?: string) => string
    thunk?: <S>(dispatch: Dispatch<S>, getState: StateGetter) => any | Promise<any>
    navKey?: string
}

export type Route = RouteString | RouteObject

export type RoutesMap = {
    [key: string]: Route
}

export interface ReceivedAction {
    type: string
    payload: Object
    meta?: Object
    navKey?: string | null
}

export interface HistoryData {
    entries: Array<{ pathname: string }>
    index: number
    length: number
}

export interface Location {
    pathname: string
    type: string
    payload: Object
}

export interface ActionMetaLocation {
    current: Location
    prev: Location
    kind: string | void
    history: HistoryData | void
}

export interface NavigationAction {
    type: string
    key?: string | void
    navKey?: string | void
    routeName?: string
    actions?: Array<NavigationAction>
    action?: NavigationAction
    params?: Object
    meta?: Object
}

export interface Meta {
    location: ActionMetaLocation
    notFoundPath?: string
    navigation?: NavigationAction
}

export interface Action {
    type: string
    payload: Object
    meta: Meta
    navKey?: string
}

// FIXME
export interface History {

}

export type ScrollBehavior = Object

export interface Router {
    getStateForActionOriginal: (action: Object, state: Object | void) => Object | void
    getStateForAction: (action: Object, state: Object | void) => Object | void
    getPathAndParamsForState: (state: Object) => { path: string | void, params: Object | void }
    getActionForPathAndParams: (path: string) => Object | void
}

export interface Navigator {
    router: Router
}

export interface Navigators {
    [key: string]: Navigator
}

export interface NavigatorsConfig {
    navigators: Navigators
    patchNavigators: (navigators: Navigators) => void
    
    actionToNavigation: (
        navigators: Navigators,
        action: Object, // TODO check this
        navigationAction: NavigationAction | void,
        route: Route | void
    ) => Object
    navigationToAction: <S>(
        navigators: Navigators,
        store: Store<S>,
        routesMap: RoutesMap,
        action: Object
    ) => {
        action: Object,
        navigationAction: NavigationAction | void
    }
}

export interface Options {
    title?: string
    location?: string
    notFoundPath?: string
    scrollTop?: boolean
    onBeforeChange?: <S>(dispatch: Dispatch<S>, getState: StateGetter) => void
    onAfterChange?: <S>(dispatch: Dispatch<S>, getState: StateGetter) => void
    onBackNext?: <S>(dispatch: Dispatch<S>, getState: StateGetter) => void
    restoreScroll?: (history: History) => ScrollBehavior
    navigators?: NavigatorsConfig
}

export type ScrollUpdater = (performedByUser: boolean) => void

export const NOT_FOUND: string

export function actionToPath(action: ReceivedAction, routesMap: RoutesMap): string;

export function back(): void;

export function canGo(n: number): boolean;

export function canGoBack(): boolean;

export function canGoForward(): boolean;

// FIXME
export function connectRoutes(history: History, routesMap: RoutesMap, options: Options): any;

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
