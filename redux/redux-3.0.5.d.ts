// Type definitions for Redux v3.0.5
// Project: https://github.com/rackt/redux
// Definitions by: William Buchwalter <https://github.com/wbuchwalter/>, Vincent Prouillet <https://github.com/Keats/>, Michael Bennett <https://github.com/bennett000/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare let Redux: Redux.ReduxStatic;

declare module 'redux' {
  export = Redux;
}

declare module Redux {

  interface IAction {}

  interface Action extends IAction{
    type: string;
    payload?: any;
    error?: boolean;
    meta?: any;
  }

  interface ActionAsync extends IAction {
    (...args: any[]):any;
  }

  interface Map<T> {
    [id: string]: T;
  }

  interface ActionCreator {
    (...args: any[]): IAction;
  }

  interface Listener {
    (): void;
  }

  interface Unsubscribe {
    (): void;
  }

  interface Reducer<T> {
    (state: T, action: Action): T;
  }

  interface Dispatch {
    (action: IAction): IAction;
  }

  interface PartialDispatch {
    (): IAction;
  }

  interface MiddlewareArg<T> {
    dispatch: Dispatch;
    getState: T;
  }

  interface Middleware<T> {
    (obj: MiddlewareArg<T>): Function;
  }

  interface Store<T> {
    replaceReducer(nextReducer: Reducer<T>): void;
    dispatch(action: IAction): IAction;
    getState(): T;
    subscribe(listener: Listener): Unsubscribe;
  }

  interface CreateStore<T> {
    (reducer: Reducer<T>, initialState?: T): Store<T>;
  }

  interface ReduxStatic {
    createStore<T>(reducer: Reducer<T>, initialState?: T): Store<T>;
    bindActionCreators<T extends Map<ActionCreator>,
      TP extends Map<PartialDispatch>>(actionCreators: T,
                                       dispatch: Dispatch): TP;
    bindActionCreators(actionCreator: ActionCreator,
                          dispatch: Dispatch): ActionCreator;
    combineReducers<T>(reducers: Map<Reducer<any>>): Reducer<T>;
    applyMiddleware<T>(...middlewares: Middleware<T>[]): CreateStore<T>;
    compose<T extends Function>(...functions: Function[]): T;
  }
}
