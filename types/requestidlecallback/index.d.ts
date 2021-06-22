// Type definitions for requestidlecallback 0.3
// Project: https://w3c.github.io/requestidlecallback/, https://github.com/afarkas/requestidlecallback
// Definitions by: 贺师俊 <https://github.com/hax>
//                 Vladimir Grenaderov <https://github.com/VladimirGrenaderov>
//                 Max Boguslavskiy <https://github.com/maxbogus>
//                 Teramoto Daiki <https://github.com/teramotodaiki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference lib="dom" />

interface IdleDeadline {
    timeRemaining(): DOMHighResTimeStamp;
    readonly didTimeout: boolean;
}

interface IdleRequestOptions {
    timeout: number;
}

type IdleCallbackHandle = number;

type IdleRequestCallback = (deadline: IdleDeadline) => void;

interface Window {
    requestIdleCallback(callback: IdleRequestCallback, options?: IdleRequestOptions): IdleCallbackHandle;
    cancelIdleCallback(handle: number): void;
}

declare function requestIdleCallback(callback: IdleRequestCallback, options?: IdleRequestOptions): number;
declare function cancelIdleCallback(handle: number): void;

declare function request(callback: IdleRequestCallback, options?: IdleRequestOptions): IdleCallbackHandle;
declare function cancel(handle: IdleCallbackHandle): void;
