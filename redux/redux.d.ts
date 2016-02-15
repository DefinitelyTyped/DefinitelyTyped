// Type definitions for Redux v3.3.1
// Project: https://github.com/reactjs/redux
// Definitions by: Jakub Strojewski <https://github.com/ulfryk>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Redux {

    // Interfaces

    interface IAction {
        type: any;
    }

    interface IReducer<S> extends Function {
        <S>(state: S, action: IAction): S;
    }

    interface IReducersMapObject<S> {
        [key: string]: IReducer<S>
    }

    interface IDispatch extends Function {
        <A extends IAction>(action: A): A;
    }

    interface IStoreCreator extends Function {
        <S>(reducer: IReducer<S>): Store<S>;
        <S>(reducer: IReducer<S>, enhancer: IStoreEnhancer<S>): Store<S>;
        <S>(reducer: IReducer<S>, initialState: S): Store<S>;
        <S>(reducer: IReducer<S>, initialState: S, enhancer: IStoreEnhancer<S>): Store<S>;
    }

    interface IActionCreator<A extends IAction> extends Function {
        (...args: any[]): A;
    }

    interface IActionCreatorsMapObject {
        [key: string]: <A extends IAction>(...args: any[]) => A;
    }

    interface IActionCreatorsBinder {
        <A extends IAction>(actionCreator: IActionCreator<A>, dispatch: IDispatch): IActionCreator<A>;
        (actionCreators: IActionCreatorsMapObject, dispatch: IDispatch): IActionCreatorsMapObject;
    }

    interface IStoreEnhancer<S> extends Function {
        (createStore: IStoreCreator): IStoreCreator;
    }

    interface IUnsubscribe extends Function {
        (): void;
    }

    interface IMiddleware<S> extends Function {
        (store: Store<S>): (next: IDispatch) => IDispatch;
    }

    interface IComposable extends Function {
        (...args: any[]): any;
    }

    // Concrete

    class Store<S> {
        replaceReducer(nextReducer: IReducer<S>): IAction;
        dispatch<A extends IAction>(action: A): A;
        getState(): S;
        subscribe(listener: () => void): IUnsubscribe;
    }

    const createStore: IStoreCreator;
    const bindActionCreators: IActionCreatorsBinder;
    function combineReducers<S>(reducers: IReducersMapObject<S>): IReducer<S>;
    function applyMiddleware<S>(...middlewares: IMiddleware<S>[]): IStoreEnhancer<S>;
    function compose<F extends Function>(...functions: IComposable[]): F;
}

declare module "redux" {
    export = Redux;
}

