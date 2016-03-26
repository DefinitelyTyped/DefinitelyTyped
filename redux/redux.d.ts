// Type definitions for Redux v1.0.0
// Project: https://github.com/rackt/redux
// Definitions by: William Buchwalter <https://github.com/wbuchwalter/>, Vincent Prouillet <https://github.com/Keats/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Redux {

    interface ActionBase {
        type: string;
    }

    interface ActionCreator<TAction> {
        (...args: any[]): TAction;
    }

    interface Reducer<TState> {
        (state: TState, action: ActionBase): TState;
    }

    interface MiddlewareDispatch {
        <TMiddlewareAction, TMiddlewareActionResult>(action: TMiddlewareAction): TMiddlewareActionResult;
    }

    interface Dispatch extends MiddlewareDispatch {
        (action: ActionBase): ActionBase;
    }

    interface MiddlewareArg {
        dispatch: Dispatch;
        getState<T>(): T;
    }

    interface Middleware {
        (obj: MiddlewareArg): (next: MiddlewareDispatch) => MiddlewareDispatch;
    }

    interface UnsubscribeFn {
        (): void;
    }

    interface CreateStore<TState> {
        (reducer: Reducer<TState>, initialState?: TState, enhancer?: StoreEnhancer<TState>): Store<TState>;
    }

    interface StoreEnhancer<TState> {
         (createStore: CreateStore<TState>): (reducer: Reducer<TState>, initialState?: TState) => Store<TState>;
    }

    class Store<TState> {
        getReducer(): Reducer<TState>;
        replaceReducer(nextReducer: Reducer<TState>): void;
        dispatch: Dispatch;
        getState(): TState;
        subscribe(listener: () => any): UnsubscribeFn;
    }

    interface ReducerMap<TState> {
        [key: string]: Reducer<TState>;
    }

    function createStore<TState>(reducer: Reducer<TState>, initialState?: TState, enhancer?: StoreEnhancer<TState>): Store<TState>;
    function bindActionCreators<T>(actionCreators: T, dispatch: Dispatch): T;
    function combineReducers<TState>(reducers: ReducerMap<TState>): Reducer<TState>;
    function applyMiddleware<TState>(...middlewares: Middleware[]): StoreEnhancer<TState>;
    function compose<T extends Function>(...functions: Function[]): T;
}

declare module "redux" {
    export = Redux;
}
