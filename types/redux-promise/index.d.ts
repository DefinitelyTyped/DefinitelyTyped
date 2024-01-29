import * as Redux from "redux";

declare const promise: ReduxPromise.Promise;
export = promise;

declare namespace ReduxPromise {
    export interface Promise extends Redux.Middleware {}
}

declare module "redux" {
    type PromiseAction<S> = (dispatch: Redux.Dispatch<S>, getState?: () => S) => any;

    interface Dispatch<S> {
        <R>(asyncAction: PromiseAction<S>): R;
    }
}
