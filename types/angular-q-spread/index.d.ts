// Type definitions for angular-q-spread module
// Project: https://www.npmjs.com/package/angular-q-spread
// Definitions by: rafw87 <https://github.com/rafw87>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as a from "angular";

declare module "angular" {
    interface IPromise<T> {
        /**
         This method can be used as a replacement for then. Similarly, it takes two parameters, a callback when all promises are resolved and a callback for failure. The resolve callback is going to be called with the result of the list of promises passed to $q.all as separate parameters instead of one parameters which is an array.
         * @param successCallback Callback for resolved promise, similar to then's one, but takes multiple parameters instead of single array parameter
         * @param errorCallback Callback for error, the same as for then
         */
        spread<TResult>(successCallback: (...promiseValues: any[]) => IPromise<TResult>|TResult, errorCallback?: (reason: any) => any): IPromise<TResult>;
    }
}
