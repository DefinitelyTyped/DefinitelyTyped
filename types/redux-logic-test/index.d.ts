// Type definitions for redux-logic-test 2.0
// Project: https://github.com/jeffbski/redux-logic-test
// Definitions by: Felipe Plets <https://github.com/felipeplets>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Middleware, Reducer, Store } from 'redux';

import { Action, Logic, LogicMiddleware } from 'redux-logic';

export interface MockStore<State extends object, Actions extends Action> extends Store<State, Actions> {
    resetActions(): void;
    whenComplete(callback: () => void): ReturnType<LogicMiddleware['whenComplete']>;

    actions: {
        enumerable: true;
        get(): Actions[];
    };
    logicMiddleware: LogicMiddleware;
}

export interface CreateMockStoreOptions<State extends object, Dependency extends object> {
    initialState?: State;
    reducer?: Reducer;
    logic?: Array<Logic<State, Dependency>>;
    injectedDeps?: Dependency;
    middleware?: Middleware[];
}

export interface CreateMockStore {
    <State extends object>(
        options?: CreateMockStoreOptions<State, object> | CreateMockStoreOptions<State, {}>,
    ): MockStore<State, Action>;
}

export const createMockStore: CreateMockStore;
