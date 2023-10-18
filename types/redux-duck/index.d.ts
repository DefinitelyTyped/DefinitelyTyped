// See redux-duck-tests.ts for an example application!

import { Action, AnyAction, Reducer } from "redux";
// import { FSA } from 'flux-standard-action';
// flux-standard-action contains mostly types so it is not a dependency of redux-duck javascript package
// flux-standard-action is written in javascript but the types are included in the same package
// flux-standard-action is not part of types-publisher dependencywhitelist
// https://github.com/redux-utilities/flux-standard-action/issues/119
// below is a minimalistic implementation that should work until the above questions are answered
export type FSAHack = Action<string> & {
    payload?: any;
};

export type AppName = string;
export type DuckName = string;
export type ActionName = string;

export type ActionType = string; // AppName/DuckName/ActionName or just DuckName/ActionName

// Ducks define FSA actions
export type ActionCreator<A extends FSAHack> = A extends { payload: any } ? (a: A["payload"]) => A
    : () => A;

// Ducks can listen for any actions (FSA or not)
export type ActionHandlers<S = any, A extends Action = AnyAction> = {
    [T in A["type"]]?: (x: S, y: Extract<A, { type: T }>) => S;
};

export interface DuckBuilder<AppAction extends Action = AnyAction> {
    defineType: (a: ActionName) => ActionType;
    createAction: <T extends string & AppAction["type"]>(a: T) => ActionCreator<Extract<AppAction, { type: T }>>;
    createReducer: <S>(a: ActionHandlers<S, AppAction>, b: S) => Reducer<S, AppAction>;
}

export function createDuck(a: DuckName, b?: AppName): DuckBuilder;
