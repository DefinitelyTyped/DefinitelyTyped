// Type definitions for tryer 1.0
// Project: https://gitlab.com/philbooth/tryer
// Definitions by: Ben Grynhaus <https://github.com/bengry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare const tryer: tryer.TryerStatic;
export = tryer;
export as namespace tryer;

declare namespace tryer {
    interface Options {
        /**
         * The function that you want to invoke.
         * If action returns a promise, iterations will not end until the promise is resolved or rejected.
         * Alternatively, action may take a callback argument, done, to signal that it is asynchronous. In that case, you are responsible for calling done when the action is finished.
         *
         * If action is not set, it defaults to an empty function.
         */
        action?: (() => Promise<any>) | ((done: () => void) => any);

        /**
         * when: A predicate that tests the pre-condition for invoking action.
         * Until when returns true (or a truthy value), action will not be called.
         * Defaults to a function that immediately returns true.
         */
        when?: () => boolean;

        /**
         * until: A predicate that tests the post-condition for invoking action.
         * After until returns true (or a truthy value), action will no longer be called.
         * Defaults to a function that immediately returns true.
         */
        until?: () => boolean;

        /**
         * fail: The error handler.
         * A function that will be called if limit falsey values are returned by when or until.
         * Defaults to an empty function.
         */
        fail?: (err: Error) => void;

        /**
         * pass: Success handler.
         * A function that will be called after until has returned truthily.
         * Defaults to an empty function.
         */
        pass?: () => void;

        /**
         * limit: Failure limit, representing the maximum number of falsey returns from when or until that will be permitted before invocation is deemed to have failed.
         * A negative number indicates that the attempt should never fail, instead continuing for as long as when and until have returned truthy values.
         * Defaults to -1.
         */
        limit?: number;

        /**
         * interval: The retry interval, in milliseconds.
         * A negative number indicates that each subsequent retry should wait for twice the interval from the preceding iteration (i.e. exponential backoff).
         * The default value is -1000, signifying that the initial retry interval should be one second and that each subsequent attempt should wait for double the length of the previous interval.
         */
        interval?: number;
    }

    type TryerStatic = (options: Readonly<Options>) => void;
}
