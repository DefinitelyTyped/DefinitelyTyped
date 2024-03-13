import { Middleware, Reducer, Store } from "redux";

import { Action, Logic, LogicMiddleware } from "redux-logic";

export interface MockStore<State extends object, Actions extends Action> extends Store<State, Actions> {
    resetActions(): void;
    whenComplete(callback: () => void): ReturnType<LogicMiddleware["whenComplete"]>;

    actions: {
        enumerable: true;
        get(): Actions[];
    };
    logicMiddleware: LogicMiddleware;
}

export interface CreateMockStoreOptions<State extends object, Dependency extends object> {
    initialState?: State | undefined;
    reducer?: Reducer | undefined;
    logic?: Array<Logic<State, Dependency>> | undefined;
    injectedDeps?: Dependency | undefined;
    middleware?: Middleware[] | undefined;
}

export interface CreateMockStore {
    <State extends object>(
        options?: CreateMockStoreOptions<State, object> | CreateMockStoreOptions<State, {}>,
    ): MockStore<State, Action>;
}

export const createMockStore: CreateMockStore;
