// Type definitions for react-bootstrap v1.0.0
// Project: https://github.com/remojansen/redux-bootstrap
// Definitions by: Remo H. Jansen <https://github.com/remojansen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />
/// <reference path="../react/react.d.ts" />
/// <reference path="../react-router-redux/react-router-redux.d.ts" />

declare module "redux-bootstrap" {

    interface BootstrapOptions {
        routes: JSX.Element;
        reducers: ReducersOption;
        middlewares?: Redux.Middleware[];
        initialState?: any;
        container?: string;
    }

    interface BootstrapResult {
        store: Redux.Store<any>;
        history: ReactRouterRedux.ReactRouterReduxHistory;
        root: JSX.Element;
    }

    interface ReducersOption {
        [index: string]: Redux.Reducer<any>;
    }

    export default function bootstrap(options: BootstrapOptions): BootstrapResult;
}
