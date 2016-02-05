// Type definitions for Redux v3.1.0
// Project: https://github.com/rackt/redux
// Definitions by: William Buchwalter <https://github.com/wbuchwalter/>, Vincent Prouillet <https://github.com/Keats/>, Daniel Lytkin <https://github.com/aikoven>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Redux {

    interface ActionCreator {
        (...args: any[]): any;
    }

    type Reducer<S> = (state: S, action: any) => S;

    type Dispatch = (action: any) => any;

    interface MiddlewareAPI<S> {
        dispatch: Dispatch;
        getState: () => S;
    }

    interface Middleware {
        <S>(api: MiddlewareAPI<S>): (next: Dispatch) => Dispatch;
    }

    class Store<S> {
        dispatch: Dispatch;
        getState: () => S;
        subscribe: (listener: () => void) => () => void;
        replaceReducer: (reducer: Reducer<S>) => void;
    }

    type StoreCreator<S> = (reducer: Reducer<S>, initialState?: S) => Store<S>;

    type StoreEnhancer = <S>(next: StoreCreator<S>) => StoreCreator<S>;

    function createStore<S>(reducer: Reducer<S>, initialState?: S,
                            enhancer?: StoreEnhancer): Store<S>;

    function bindActionCreators
    <T extends ActionCreator|{[key: string]: ActionCreator}>(
      actionCreators: T, dispatch: Dispatch
    ): T;

    function combineReducers<S>(reducers: {[key: string]: Reducer<any>}): Reducer<S>;
    function applyMiddleware<S>(...middlewares: Middleware[]): StoreEnhancer;

    // from compose-function/compose-function.d.ts
    // Hardcoded signatures for 2-4 parameters
    function compose<A, B, C>(
      f1: (b: B) => C,
      f2: (a: A) => B
    ): (a: A) => C;
    function compose<A, B, C, D>(
      f1: (b: C) => D,
      f2: (a: B) => C,
      f3: (a: A) => B
    ): (a: A) => D;
    function compose<A, B, C, D, E>(
      f1: (b: D) => E,
      f2: (a: C) => D,
      f3: (a: B) => C,
      f4: (a: A) => B
    ): (a: A) => E;

    // Minimal typing for more than 4 parameters
    function compose<Result>(
      f1: (a: any) => Result,
      ...functions: Function[]
    ): (a: any) => Result;
}

declare module "redux" {
    export = Redux;
}
