declare module 'timers' {
    import { Abortable } from 'node:events';
    import { setTimeout as setTimeoutPromise, setImmediate as setImmediatePromise, setInterval as setIntervalPromise } from 'node:timers/promises';

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
        // util.promisify no rest args compability
        // tslint:disable-next-line void-return
        function setTimeout(callback: (args: void) => void): NodeJS.Timeout;
        namespace setTimeout {
            const __promisify__: typeof setTimeoutPromise;
        }
        function clearTimeout(timeoutId: NodeJS.Timeout): void;

        function setInterval<TArgs extends any[]>(callback: (...args: TArgs) => void, ms?: number, ...args: TArgs): NodeJS.Timer;
        // util.promisify no rest args compability
        // tslint:disable-next-line void-return
        function setInterval(callback: (args: void) => void, ms?: number): NodeJS.Timer;
        namespace setInterval {
            const __promisify__: typeof setIntervalPromise;
        }
        function clearInterval(intervalId: NodeJS.Timeout): void;

        function setImmediate<TArgs extends any[]>(callback: (...args: TArgs) => void, ...args: TArgs): NodeJS.Immediate;
        // util.promisify no rest args compability
        // tslint:disable-next-line void-return
        function setImmediate(callback: (args: void) => void): NodeJS.Immediate;
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
