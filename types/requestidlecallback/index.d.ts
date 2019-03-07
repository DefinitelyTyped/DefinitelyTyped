// Type definitions for requestidlecallback 0.30
// Project: https://w3c.github.io/requestidlecallback/, https://github.com/afarkas/requestidlecallback
// Definitions by: 贺师俊 <https://github.com/hax>
//                 Tobias Ebnöther <https://github.com/ebi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function request(callback: IdleRequestCallback): IdleCallbackHandle;
export function cancel(handle: IdleCallbackHandle): void;

export type DOMHighResTimeStamp = number;
export type IdleCallbackHandle = number;

export type IdleRequestCallback = (deadline: IdleDeadline) => void;

export interface IdleDeadline {
	timeRemaining(): DOMHighResTimeStamp;
	readonly didTimeout: boolean;
}
