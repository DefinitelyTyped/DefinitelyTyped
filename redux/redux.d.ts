// Type definitions for Redux v3.0.0
// Project: https://github.com/rackt/redux
// Definitions by: William Buchwalter <https://github.com/wbuchwalter/>,
//                 Vincent Prouillet <https://github.com/Keats/>,
//                 Michael Tiller <https://github.com/xogeny/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Redux {
    // Minimalist Action definition
    interface Action {
        type: string;
    }

    // Not used...?
    interface ActionCreator extends Function {
        (...args: any[]): Action;
    }

    // Also not used here...
    interface StoreMethods<S,A extends Action> {
        dispatch: Dispatch;
        getState(): S;
    }

    // Reducer is a function that takes a state of type S and an
    // action and returns a new state, also of type S
    interface Reducer<S> extends Function {
        (state: S, action: any): S;
    }

    // Dispatch is a function that takes an action of type A and
    // returns an instance of that same action (still of type A)
    interface Dispatch extends Function {
        <A extends Action>(action: A): any;
    }

    // MiddlewareArg is an instance of middleware that provides a
    // dispatch method and a getState method.  The type parameter S is
    // the type of the state.  No type parameter is provided on
    // Dispatch because the middleware generally needs to be able to
    // handle any type of action.
    interface MiddlewareArg<S> {
        dispatch: Dispatch;
        getState: () => S;
    }

    // Middleware is constructed from an instance of MiddlewareArg<S> where
    // S is the type of the state.
    interface Middleware<S> extends Function {
        (obj: MiddlewareArg<S>): Function;
    }

    // Store manages the state of the system.  The state of the system
    // should be of type S.
    class Store<S> {
        getReducer(): Reducer<S>;
        replaceReducer(nextReducer: Reducer<S>): void;
        dispatch<A extends Action>(action: A): any;
        getState(): S;
        subscribe(listener: () => void): () => void;
    }

    // StoreCreator describes any function that can be used to create
    // a Store<S> (where S is the type of the state).  This type is
    // used to describe the return type of applyMiddleware since
    // produces special function that can be used to create a store
    // that integrates a collection of middleware.
    interface StoreCreator<S> extends Function {
        (reducer: Reducer<S>, initialState?: S): Store<S>;
    }

    function createStore<S>(reducer: Reducer<S>, initialState?: S): Store<S>;
    function bindActionCreators<C>(actionCreators: C, dispatch: Dispatch): C;
    function combineReducers<S>(reducers: { [key: string]: Reducer<S> }): Reducer<S>;
    function applyMiddleware<S>(...middlewares: Middleware<S>[]): (c: StoreCreator<S>) => StoreCreator<S>;
    function compose<F extends Function>(...functions: Function[]): F;
}

declare module "redux" {
    export = Redux;
}
