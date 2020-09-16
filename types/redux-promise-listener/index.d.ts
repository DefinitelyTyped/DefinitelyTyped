// Type definitions for redux-promise-listener 1.1
// Project: https://github.com/erikras/redux-promise-listener
// Definitions by: hikiko4ern <https://github.com/hikiko4ern>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { AnyAction, Middleware } from 'redux';

export default ReduxPromiseListener.createListener;

declare namespace ReduxPromiseListener {
    type ActionMatcher = (action: AnyAction) => boolean;

    interface Config<
        StartAction extends AnyAction,
        ResolveAction extends AnyAction,
        RejectAction extends AnyAction,
        TReturn
    > {
        start: string;
        resolve: string | ActionMatcher;
        reject: string | ActionMatcher;
        setPayload?: (action: StartAction, payload: any) => AnyAction;
        getPayload?: (action: ResolveAction) => TReturn;
        getError?: (action: RejectAction) => any;
    }

    interface AsyncFunction<TReturn> {
        asyncFunction: (payload?: any) => Promise<TReturn>;
        unsubscribe: () => void;
    }

    interface PromiseListener {
        middleware: Middleware<{}, AnyAction>;
        createAsyncFunction: <
            StartAction extends AnyAction,
            ResolveAction extends AnyAction,
            RejectAction extends AnyAction,
            TReturn = ResolveAction['payload']
        >(
            // tslint:disable-next-line no-unnecessary-generics
            config: Config<StartAction, ResolveAction, RejectAction, TReturn>,
        ) => AsyncFunction<TReturn>;
    }

    function createListener(): PromiseListener;
}
