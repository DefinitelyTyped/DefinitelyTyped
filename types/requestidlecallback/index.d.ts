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
