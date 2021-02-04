// Type definitions for redux-logic-test 2.0.0
// Project: https://github.com/jeffbski/redux-logic-test
// Definitions by: Felipe Plets <https://github.com/felipeplets>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'redux-logic-test' {
    import { Middleware, Reducer, Store } from 'redux';

    import { Action, Logic, LogicMiddleware } from 'redux-logic';

    type Callback = () => void;

    export interface MockStore<State extends object, Actions extends Action> extends Store<State, Actions> {
        resetActions(): void;
        whenComplete(callback: Callback): ReturnType<LogicMiddleware['whenComplete']>;

        actions: {
            enumerable: true;
            get(): Actions[];
        };
        logicMiddleware: LogicMiddleware;
    }

    export interface CreateMockStoreOptions<State extends object, Dependency extends object> {
        initialState?: State;
        reducer?: Reducer;
        logic?: Logic<State, Dependency>[];
        injectedDeps?: Dependency;
        middleware?: Middleware[];
    }

    export interface CreateMockStore {
        <State extends object, Dependency extends object, Actions extends Action>(
            options?: CreateMockStoreOptions<State, Dependency>,
        ): MockStore<State, Actions>;

        <State extends object, Actions extends Action>(options?: CreateMockStoreOptions<State, {}>): MockStore<
            State,
            Actions
        >;
    }

    export const createMockStore: CreateMockStore;
}
