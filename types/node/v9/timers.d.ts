declare module "timers" {
    export function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timer;
    export namespace setTimeout {
        export function __promisify__(ms: number): Promise<void>;
        export function __promisify__<T>(ms: number, value: T): Promise<T>;
    }
    export function clearTimeout(timeoutId: NodeJS.Timer): void;
    export function setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timer;
    export function clearInterval(intervalId: NodeJS.Timer): void;
    export function setImmediate(callback: (...args: any[]) => void, ...args: any[]): any;
    export namespace setImmediate {
        export function __promisify__(): Promise<void>;
        export function __promisify__<T>(value: T): Promise<T>;
    }
    export function clearImmediate(immediateId: any): void;
}
