// Type definitions for redux-promise-listener 1.1
// Project: https://github.com/erikras/redux-promise-listener
// Definitions by: hikiko4ern <https://github.com/hikiko4ern>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { AnyAction, Middleware } from 'redux';

export default ReduxPromiseListener.createListener;

declare namespace ReduxPromiseListener {
    type ActionMatcher = (action: AnyAction) => boolean;

    interface Config {
        start: string;
        resolve: string | ActionMatcher;
        reject: string | ActionMatcher;
        setPayload?: (action: AnyAction, payload: any) => AnyAction;
        getPayload?: (action: AnyAction) => any;
        getError?: (action: AnyAction) => any;
    }

    interface AsyncFunction {
        asyncFunction: (payload?: any) => Promise<any>;
        unsubscribe: () => void;
    }

    interface PromiseListener {
        middleware: Middleware<{}, AnyAction>;
        createAsyncFunction: (config: Config) => AsyncFunction;
    }

    function createListener(): PromiseListener;
}
