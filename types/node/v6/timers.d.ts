declare module "timers" {
    export function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timer;
    export function clearTimeout(timeoutId: NodeJS.Timer): void;
    export function setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timer;
    export function clearInterval(intervalId: NodeJS.Timer): void;
    export function setImmediate(callback: (...args: any[]) => void, ...args: any[]): any;
    export function clearImmediate(immediateId: any): void;
}
