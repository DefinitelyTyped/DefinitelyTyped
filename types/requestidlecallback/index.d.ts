// Type definitions for requestidlecallback 0.3
// Project: https://w3c.github.io/requestidlecallback/, https://github.com/afarkas/requestidlecallback
// Definitions by: 贺师俊 <https://github.com/hax>
//                 Max Boguslavskiy <https://github.com/maxbogus>
//                 Teramoto Daiki <https://github.com/teramotodaiki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference lib="dom" />

interface IdleDeadline {
    timeRemaining(): DOMHighResTimeStamp;
    readonly didTimeout: boolean;
}

interface IdleRequestOptions {
    timeout?: number | undefined;
}

type IdleCallbackHandle = number;

interface Window {
    requestIdleCallback(callback: (deadline: IdleDeadline) => void, options?: IdleRequestOptions): IdleCallbackHandle;
    cancelIdleCallback(handle: number): void;
}

declare function requestIdleCallback(callback: (deadline: IdleDeadline) => void, options?: IdleRequestOptions): number;
declare function cancelIdleCallback(handle: number): void;

declare function request(callback: (deadline: IdleDeadline) => void, options?: IdleRequestOptions): IdleCallbackHandle;
declare function cancel(handle: IdleCallbackHandle): void;
