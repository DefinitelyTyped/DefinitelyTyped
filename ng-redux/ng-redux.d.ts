// Type definitions for ng-redux 2.0.1
// Project: https://github.com/wbuchwalter/ng-redux
// Definitions by: Dror Weiss <https://github.com/droritos>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module ngRedux {

    interface Reducer extends Function {
        (state: any, action: any): any;
    }

    interface Dispatch extends Function {
        (action: any): any;
    }

    interface MiddlewareArg {
        dispatch: Dispatch;
        getState: Function;
    }

    interface Middleware extends Function {
        (obj: MiddlewareArg): Function;
    }

    interface INgRedux {
        getReducer(): Reducer;
        replaceReducer(nextReducer: Reducer): void;
        dispatch(action: any): any;
        getState(): any;
        subscribe(listener: Function): Function;
        connect(
            mapStateToTarget: (state: any) => Object,
            mapDispatchToTarget?: Object | ((dispatch: Function) => Object)
        ): (target: Function | Object) => () => void;
    }

    interface INgReduxProvider {
        createStoreWith(reducer: Reducer, middlewares?: Array<Middleware | string>, storeEnhancers?: Function[]): void;
    }
}

declare module "ngRedux" {
    export = ngRedux;
}
