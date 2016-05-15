// Type definitions for Redux v3.3.1
// Project: https://github.com/rackt/redux
// Definitions by: William Buchwalter <https://github.com/wbuchwalter/>, Vincent Prouillet <https://github.com/Keats/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Redux {

    interface ActionCreator extends Function {
        (...args: any[]): any;
    }

    interface Reducer<S> extends Function {
        (state: S, action: any): S;
    }

    interface Dispatch extends Function {
        (action: any): any;
    }

    interface StoreMethods {
        dispatch: Dispatch;
        getState(): any;
    }


    interface MiddlewareArg {
        dispatch: Dispatch;
        getState: Function;
    }

    interface Middleware extends Function {
        (obj: MiddlewareArg): Function;
    }

    class Store<S> {
        getReducer(): Reducer<S>;
        replaceReducer(nextReducer: Reducer<S>): void;
        dispatch(action: any): any;
        getState(): any;
        subscribe(listener: Function): Function;
    }

    function createStore<S>(reducer: Reducer<S>, initialState?: any, enhancer?: Function): Store<S>;
    function bindActionCreators<T>(actionCreators: T, dispatch: Dispatch): T;
    function combineReducers<S>(reducers: any): Reducer<S>;
    function applyMiddleware(...middlewares: Middleware[]): Function;
    function compose<T extends Function>(...functions: Function[]): T;
}

declare module "redux" {
    export = Redux;
}
