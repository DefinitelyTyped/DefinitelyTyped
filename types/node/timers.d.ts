declare module 'timers' {
    import { Abortable } from 'events';

    interface TimerOptions extends Abortable {
        /**
         * Set to `false` to indicate that the scheduled `Timeout`
         * should not require the Node.js event loop to remain active.
         * @default true
         */
        ref?: boolean;
    }

    function setTimeout<T extends any[]>(callback: (...args: T) => void, ms?: number, ...args: T): NodeJS.Timeout;
    namespace setTimeout {
        function __promisify__(ms: number): Promise<void>;
        function __promisify__<T>(ms: number, value: T, options?: TimerOptions): Promise<T>;
    }
    function clearTimeout(timeoutId: NodeJS.Timeout): void;
    function setInterval<T extends any[]>(callback: (...args: T) => void, ms?: number, ...args: T): NodeJS.Timeout;
    function clearInterval(intervalId: NodeJS.Timeout): void;
    function setImmediate<T extends any[]>(callback: (...args: T) => void, ...args: T): NodeJS.Immediate;
    namespace setImmediate {
        function __promisify__(): Promise<void>;
        function __promisify__<T>(value: T, options?: TimerOptions): Promise<T>;
    }
    function clearImmediate(immediateId: NodeJS.Immediate): void;
}
