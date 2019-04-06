// Type definitions for non-npm package @ember/test 3.0
// Project: https://emberjs.com/api/ember/3.4/modules/@ember%2Ftest
// Definitions by: Mike North <https://github.com/mike-north>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import Application from '@ember/application';

/**
 * `registerHelper` is used to register a test helper that will be injected
 * when `App.injectTestHelpers` is called.
 */
export function registerHelper(
    name: string,
    helperMethod: (app: Application, ...args: any[]) => any,
    options?: object
): any;
/**
 * `registerAsyncHelper` is used to register an async test helper that will be injected
 * when `App.injectTestHelpers` is called.
 */
export function registerAsyncHelper(
    name: string,
    helperMethod: (app: Application, ...args: any[]) => any
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
export function registerWaiter(callback: () => boolean): any;
export function registerWaiter<Context>(
    context: Context,
    callback: (this: Context) => boolean
): any;
/**
 * `unregisterWaiter` is used to unregister a callback that was
 * registered with `registerWaiter`.
 */
export function unregisterWaiter(callback: () => boolean): any;
export function unregisterWaiter<Context>(
    context: Context,
    callback: (this: Context) => boolean
): any;
