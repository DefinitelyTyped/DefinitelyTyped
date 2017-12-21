declare namespace adone {
    /**
     * promise helpers
     */
    namespace promise {
        namespace I {
            interface Deferred<T = any> {
                /**
                 * Resolves the promise
                 */
                resolve(value?: T): void;

                /**
                 * Rejects the promise
                 */
                reject(value?: any): void;

                promise: Promise<T>;
            }
        }

        /**
         * Creates a promise and returns an interface to control the state
         */
        export function defer(): I.Deferred;

        /**
         * Creates a promise that will be resolved after given milliseconds
         *
         * @param ms delay in milliseconds
         * @param value resolving value
         */
        export function delay<T>(ms: number, value?: T): Promise<T>;

        /**
         * Creates a promise that will be rejected after given milliseconds if the given promise is not fulfilled
         *
         * @param ms timeout in milliseconds
         */
        export function timeout<T>(promise: Promise<T>, ms: number): Promise<T>;

        /**
         * Converts a promise to node.js style callback
         */
        export function nodeify<T>(promise: Promise<T>, callback: (err?: any, value?: T) => void): Promise<T>;

        /**
         * Converts a function that returns promises to a node.js style callback function
         *
         * @param fn Function
         * @returns the original promise
         */
        export function callbackify<R>(fn: () => Promise<R>): (callback: (err?: any, result?: R) => void) => Promise<R>;
        export function callbackify<T, R>(fn: (a: T) => Promise<R>): (a: T, callback: (err?: any, result?: R) => void) => Promise<R>;
        export function callbackify<T1, T2, R>(fn: (a: T1, b: T2) => Promise<R>): (a: T1, b: T2, callback: (err?: any, result?: R) => void) => Promise<R>;
        export function callbackify<T1, T2, T3, R>(fn: (a: T1, b: T2, c: T3) => Promise<R>): (a: T1, b: T2, c: T3, callback: (err?: any, result?: R) => void) => Promise<R>;
        export function callbackify<T1, T2, T3, T4, R>(fn: (a: T1, b: T2, c: T3, d: T4) => Promise<R>): (a: T1, b: T2, c: T3, d: T4, callback: (err?: any, result?: R) => void) => Promise<R>;
        export function callbackify<R>(fn: (...args: any[]) => Promise<R>): (...args: any[]) => Promise<R>;

        namespace I {
            interface PromisifyOptions {
                /**
                 * Context to bind to new function
                 */
                context?: object;
            }
        }

        /**
         * Converts a callback function to a promise-based function
         */
        export function promisify<R>(fn: (callback: (err?: any, result?: R) => void) => void, options?: I.PromisifyOptions): () => Promise<R>;
        export function promisify<T, R>(fn: (a: T, callback: (err?: any, result?: R) => void) => void, options?: I.PromisifyOptions): (a: T) => Promise<R>;
        export function promisify<T>(fn: (a: T, callback: (err?: any) => void) => void, options?: I.PromisifyOptions): (a: T) => Promise<void>;
        export function promisify<T1, T2, R>(fn: (a: T1, b: T2, callback: (err?: any, result?: R) => void) => void, options?: I.PromisifyOptions): (a: T1, b: T2) => Promise<R>;
        export function promisify<T1, T2>(fn: (a: T1, b: T2, callback: (err?: any) => void) => void, options?: I.PromisifyOptions): (a: T1, b: T2) => Promise<void>;
        export function promisify<T1, T2, T3, R>(fn: (a: T1, b: T2, c: T3, callback: (err?: any, result?: R) => void) => void, options?: I.PromisifyOptions): (a: T1, b: T2, c: T3) => Promise<R>;
        export function promisify<T1, T2, T3>(fn: (a: T1, b: T2, c: T3, callback: (err?: any) => void) => void, options?: I.PromisifyOptions): (a: T1, b: T2, c: T3) => Promise<void>;
        export function promisify<T1, T2, T3, T4, R>(
            fn: (a: T1, b: T2, c: T3, d: T4, callback: (err?: any, result?: R) => void) => void,
            options?: I.PromisifyOptions
        ): (a: T1, b: T2, c: T3, d: T4) => Promise<R>;
        export function promisify<T1, T2, T3, T4>(
            fn: (a: T1, b: T2, c: T3, d: T4, callback: (err?: any) => void) => void,
            options?: I.PromisifyOptions
        ): (a: T1, b: T2, c: T3, d: T4) => Promise<void>;
        export function promisify<T1, T2, T3, T4, T5, R>(
            fn: (a: T1, b: T2, c: T3, d: T4, e: T5, callback: (err?: any, result?: R) => void) => void,
            options?: I.PromisifyOptions
        ): (a: T1, b: T2, c: T3, d: T4, e: T5) => Promise<R>;
        export function promisify<T1, T2, T3, T4, T5>(
            fn: (a: T1, b: T2, c: T3, d: T4, e: T5, callback: (err?: any) => void) => void,
            options?: I.PromisifyOptions
        ): (a: T1, b: T2, c: T3, d: T4, e: T5) => Promise<void>;
        export function promisify(fn: (...args: any[]) => void, options?: I.PromisifyOptions): (...args: any[]) => Promise<any>;

        namespace I {
            interface PromisifyAllOptions {
                /**
                 * Suffix to use for keys
                 */
                suffix?: string;

                /**
                 * Function to filter keys
                 */

                filter?(key: string): boolean;
                /**
                 * Context to bind to new functions
                 */
                context?: object;
            }
        }

        /**
         * Promisifies entire object
         */
        export function promisifyAll(source: object, options?: I.PromisifyAllOptions): object;

        /**
         * Executes a function after promise fulfillment
         *
         * @returns the original promise
         */
        function _finally<T>(promise: Promise<T>, onFinally?: (...args: any[]) => void): Promise<T>;
        export { _finally as finally };
    }
}
