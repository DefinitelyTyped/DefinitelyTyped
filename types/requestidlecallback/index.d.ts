// Type definitions for requestidlecallback 0.3
// Project: https://w3c.github.io/requestidlecallback/, https://github.com/afarkas/requestidlecallback
// Definitions by: 贺师俊 <https://github.com/hax>, Vladimir Grenaderov <https://github.com/VladimirGrenaderov>, Max Boguslavskiy <https://github.com/maxbogus>, Teramoto Daiki <https://github.com/teramotodaiki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function request(callback: IdleRequestCallback, options?: IdleRequestOptions): IdleCallbackHandle;
export function cancel(handle: IdleCallbackHandle): void;

export type DOMHighResTimeStamp = number;
export type IdleCallbackHandle = number;

export type IdleRequestCallback = (deadline: IdleDeadline) => void;

export interface IdleDeadline {
    timeRemaining(): DOMHighResTimeStamp;
    readonly didTimeout: boolean;
}

export interface IdleRequestOptions {
    timeout: number;
}

export interface Window {
    requestIdleCallback(callback: IdleRequestCallback, options?: IdleRequestOptions): IdleCallbackHandle;
    cancelIdleCallback(handle: number): void;
}
