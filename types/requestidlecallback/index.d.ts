// Type definitions for requestidlecallback 0.1
// Project: https://w3c.github.io/requestidlecallback/
// Definitions by: 贺师俊 <https://github.com/hax>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function requestIdleCallback(callback: IdleRequestCallback, options?: IdleRequestOptions): IdleCallbackHandle;
export function cancelIdleCallback(handle: IdleCallbackHandle): void;

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
