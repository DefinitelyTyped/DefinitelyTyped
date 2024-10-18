import { AnyAction, Middleware } from "redux";

export default ReduxPromiseListener.createListener;

declare namespace ReduxPromiseListener {
    type ActionMatcher = (action: AnyAction) => boolean;

    interface Config<
        StartAction extends AnyAction,
        ResolveAction extends AnyAction,
        RejectAction extends AnyAction,
        TReturn,
    > {
        start: string;
        resolve: string | ActionMatcher;
        reject: string | ActionMatcher;
        setPayload?: ((action: StartAction, payload: any) => AnyAction) | undefined;
        getPayload?: ((action: ResolveAction) => TReturn) | undefined;
        getError?: ((action: RejectAction) => any) | undefined;
    }

    interface AsyncFunction<TReturn> {
        asyncFunction: (payload?: any) => Promise<TReturn>;
        unsubscribe: () => void;
    }

    interface PromiseListener {
        middleware: Middleware<{}, AnyAction>;
        createAsyncFunction: <
            // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
            StartAction extends AnyAction,
            // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
            ResolveAction extends AnyAction,
            // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
            RejectAction extends AnyAction,
            TReturn = ResolveAction["payload"],
        >(
            config: Config<StartAction, ResolveAction, RejectAction, TReturn>,
        ) => AsyncFunction<TReturn>;
    }

    function createListener(): PromiseListener;
}
