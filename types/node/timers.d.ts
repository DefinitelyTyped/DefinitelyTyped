declare module "timers" {
    function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timeout;
    namespace setTimeout {
        function __promisify__(ms: number): Promise<void>;
        function __promisify__<T>(ms: number, value: T): Promise<T>;
    }
    function clearTimeout(timeoutId: NodeJS.Timeout): void;
    function setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timeout;
    function clearInterval(intervalId: NodeJS.Timeout): void;
    function setImmediate(callback: (...args: any[]) => void, ...args: any[]): NodeJS.Immediate;
    namespace setImmediate {
        function __promisify__(): Promise<void>;
        function __promisify__<T>(value: T): Promise<T>;
    }
    function clearImmediate(immediateId: NodeJS.Immediate): void;

    global {
        function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timeout;
        namespace setTimeout {
            function __promisify__(ms: number): Promise<void>;
            function __promisify__<T>(ms: number, value: T): Promise<T>;
        }
        function clearTimeout(timeoutId: NodeJS.Timeout): void;
        function setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timeout;
        function clearInterval(intervalId: NodeJS.Timeout): void;
        function setImmediate(callback: (...args: any[]) => void, ...args: any[]): NodeJS.Immediate;
        namespace setImmediate {
            function __promisify__(): Promise<void>;
            function __promisify__<T>(value: T): Promise<T>;
        }
        function clearImmediate(immediateId: NodeJS.Immediate): void;

        namespace NodeJS {
            interface Global {
                clearImmediate: (immediateId: Immediate) => void;
                clearInterval: (intervalId: Timeout) => void;
                clearTimeout: (timeoutId: Timeout) => void;

                setImmediate: (callback: (...args: any[]) => void, ...args: any[]) => Immediate;
                setInterval: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => Timeout;
                setTimeout: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => Timeout;
            }

            interface RefCounted {
                ref(): this;
                unref(): this;
            }

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
    }
}
