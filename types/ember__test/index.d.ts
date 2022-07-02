// Type definitions for non-npm package @ember/test 4.0
// Project: https://emberjs.com/api/ember/4.0/modules/@ember%2Ftest
// Definitions by: Chris Krycho <https://github.com/chriskrycho>
//                 Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

import Application from '@ember/application';

/**
 * `registerHelper` is used to register a test helper that will be injected
 * when `App.injectTestHelpers` is called.
 */
export function registerHelper(
    name: string,
    helperMethod: (app: Application, ...args: any[]) => unknown,
    options?: object
): unknown;
/**
 * `registerAsyncHelper` is used to register an async test helper that will be injected
 * when `App.injectTestHelpers` is called.
 */
export function registerAsyncHelper(
    name: string,
    helperMethod: (app: Application, ...args: any[]) => unknown
): void;

/**
 * Remove a previously added helper method.
 */
export function unregisterHelper(name: string): void;

/**
 * This allows ember-testing to play nicely with other asynchronous
 * events, such as an application that is waiting for a CSS3
 * transition or an IndexDB transaction. The waiter runs periodically
 * after each async helper (i.e. `click`, `andThen`, `visit`, etc) has executed,
 * until the returning result is truthy. After the waiters finish, the next async helper
 * is executed and the process repeats.
 */
export function registerWaiter(callback: () => boolean): unknown;
export function registerWaiter<Context>(
    context: Context,
    callback: (this: Context) => boolean
): unknown;
/**
 * `unregisterWaiter` is used to unregister a callback that was
 * registered with `registerWaiter`.
 */
export function unregisterWaiter(callback: () => boolean): unknown;
export function unregisterWaiter<Context>(
    context: Context,
    callback: (this: Context) => boolean
): unknown;
