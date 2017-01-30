// Type definitions for react-router-redux 3.x
// Project: https://github.com/rackt/react-router-redux
// Definitions by: Isman Usoh <http://github.com/isman-usoh>, Noah Shipley <https://github.com/noah79>, Dimitri Rosenberg <https://github.com/rosendi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as Redux from "redux";
import * as History from "history";


export const TRANSITION: string;
export const UPDATE_LOCATION: string;

export const push: PushAction;
export const replace: ReplaceAction;
export const go: GoAction;
export const goBack: GoForwardAction;
export const goForward: GoBackAction;
export const routeActions: RouteActions;

export type LocationDescriptor = History.LocationDescriptor;
export type PushAction = (nextLocation: LocationDescriptor) => void;
export type ReplaceAction = (nextLocation: LocationDescriptor) => void;
export type GoAction = (n: number) => void;
export type GoForwardAction = () => void;
export type GoBackAction = () => void;

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


