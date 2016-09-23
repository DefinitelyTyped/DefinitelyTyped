// Type definitions for react-bootstrap v1.0.0
// Project: https://github.com/remojansen/redux-bootstrap
// Definitions by: Remo H. Jansen <https://github.com/remojansen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="redux" />
/// <reference types="react" />

declare module "redux-bootstrap" {
    import ReactRouterRedux = require("react-router-redux");

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
