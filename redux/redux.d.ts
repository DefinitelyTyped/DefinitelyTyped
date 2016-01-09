// Type definitions for Redux v1.0.0
// Project: https://github.com/rackt/redux
// Definitions by: William Buchwalter <https://github.com/wbuchwalter/>, Vincent Prouillet <https://github.com/Keats/>, Ivo Gabe de Wolff <https://github.com/ivogabe/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Redux {
    interface Action<TType> {
        type: TType
    }

    type Reducer<TState, TAction extends Action<{}>> = (state: TState, action: TAction) => TState;
    type Dispatch<TAction> = (action: TAction) => void;

    interface MiddlewareArg<TState, TAction extends Action<{}>> {
        dispatch: Dispatch<TAction>;
        getState(): TState;
    }

    type Middleware<TState, TAction extends Action<{}>> = (obj: MiddlewareArg<TState, TAction>) => (next: Dispatch<TAction>) => (action: TAction) => void;

    interface Store<TState, TAction extends Action<{}>> {
        getReducer(): Reducer<TState, TAction>;
        replaceReducer(nextReducer: Reducer<TState, TAction>): void;
        dispatch<U extends TAction>(action: U): U;
        getState(): TState;
        subscribe(listener: () => void): () => void;
    }

    function createStore<TState, TAction extends Action<{}>>(reducer: Reducer<TState, TAction>, initialState?: TState): Store<TState, TAction>;

    function combineReducers<TState, TAction extends Action<string>>(reducers: { [type: string]: Reducer<TState, TAction> }): Reducer<TState, TAction>;
    function combineReducers<TState, TAction extends Action<number>>(reducers: { [type: number]: Reducer<TState, TAction> }): Reducer<TState, TAction>;

    function applyMiddleware<TState, TAction extends Action<{}>>(...middlewares: Middleware<TState, TAction>[]): (create: (reducer: Reducer<TState, TAction>, initialState?: TState) => Store<TState, TAction>) => (reducer: Reducer<TState, TAction>, initialState?: TState) => Store<TState, TAction>

    function bindActionCreators<T, TAction extends Action<{}>>(actionCreators: T & { [name: string]: (...args: any[]) => TAction }, dispatch: Dispatch<TAction>): T & { [name: string]: (...args: any[]) => TAction };

    function compose<T>(...functions: ((value: T) => T)[]): (value: T) => T;
}

declare module "redux" {
    export = Redux;
}
