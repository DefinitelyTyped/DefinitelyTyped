declare module 'timers' {
    import { Abortable } from 'events';
    import { setTimeout as setTimeoutPromise, setImmediate as setImmediatePromise, setInterval as setIntervalPromise } from 'timers/promises';

    interface TimerOptions extends Abortable {
        /**
         * Set to `false` to indicate that the scheduled `Timeout`
         * should not require the Node.js event loop to remain active.
         * @default true
         */
        ref?: boolean | undefined;
    }

    let setTimeout: typeof global.setTimeout;
    let clearTimeout: typeof global.clearTimeout;
    let setInterval: typeof global.setInterval;
    let clearInterval: typeof global.clearInterval;
    let setImmediate: typeof global.setImmediate;
    let clearImmediate: typeof global.clearImmediate;

    global {
        namespace NodeJS {
            // compatibility with older typings
            interface Timer extends RefCounted {
                hasRef(): boolean;
                refresh(): this;
                [Symbol.toPrimitive](): number;
            }

            interface Immediate extends RefCounted {
                hasRef(): boolean;
                _onImmediate: Function; // to distinguish it from the Timeout class
            }

            interface Timeout extends Timer {
                hasRef(): boolean;
                refresh(): this;
                [Symbol.toPrimitive](): number;
            }
        }

        function setTimeout<TArgs extends any[]>(callback: (...args: TArgs) => void, ms?: number, ...args: TArgs): NodeJS.Timeout;
        namespace setTimeout {
            const __promisify__: typeof setTimeoutPromise;
        }
        function clearTimeout(timeoutId: NodeJS.Timeout): void;

        function setInterval<TArgs extends any[]>(callback: (...args: TArgs) => void, ms?: number, ...args: TArgs): NodeJS.Timer;
        namespace setInterval {
            const __promisify__: typeof setIntervalPromise;
        }
        function clearInterval(intervalId: NodeJS.Timeout): void;

        function setImmediate<TArgs extends any[]>(callback: (...args: TArgs) => void, ...args: TArgs): NodeJS.Immediate;
        namespace setImmediate {
            const __promisify__: typeof setImmediatePromise;
        }
        function clearImmediate(immediateId: NodeJS.Immediate): void;

        function queueMicrotask(callback: () => void): void;
    }
}

declare module 'node:timers' {
    export * from 'timers';
}

declare module 'timers/promises' {
    import { TimerOptions } from 'timers';

    /**
     * Returns a promise that resolves after the specified delay in milliseconds.
     * @param delay defaults to 1
     */
    function setTimeout<T = void>(delay?: number, value?: T, options?: TimerOptions): Promise<T>;

    /**
     * Returns a promise that resolves in the next tick.
     */
    function setImmediate<T = void>(value?: T, options?: TimerOptions): Promise<T>;

    /**
     *
     * Returns an async iterator that generates values in an interval of delay ms.
     * @param delay defaults to 1
     */
    function setInterval<T = void>(delay?: number, value?: T, options?: TimerOptions): AsyncIterable<T>;
}

declare module 'node:timers/promises' {
    export * from 'timers/promises';
}
