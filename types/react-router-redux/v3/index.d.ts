import * as History from "history";
import * as Redux from "redux";

export const TRANSITION: string;
export const UPDATE_LOCATION: string;

export const push: PushAction;
export const replace: ReplaceAction;
export const go: GoAction;
export const goBack: GoForwardAction;
export const goForward: GoBackAction;
export const routeActions: RouteActions;

export type LocationDescriptor = History.LocationDescriptor;
export type PushAction = (nextLocation: LocationDescriptor) => any;
export type ReplaceAction = (nextLocation: LocationDescriptor) => any;
export type GoAction = (n: number) => any;
export type GoForwardAction = () => any;
export type GoBackAction = () => any;

export interface RouteActions {
    push: PushAction;
    replace: ReplaceAction;
    go: GoAction;
    goForward: GoForwardAction;
    goBack: GoBackAction;
}

export interface HistoryMiddleware extends Redux.Middleware {
    listenForReplays(store: Redux.Store<any>, selectLocationState?: Function): void;
    unsubscribe(): void;
}

export function routeReducer(state?: any, options?: any): Redux.Reducer<any>;
export function syncHistory(history: History.History): HistoryMiddleware;
