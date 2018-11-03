// Type definitions for scheduler 0.10
// Project: https://reactjs.org/
// Definitions by: Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export interface Deadline {
  timeRemaining(): number;
  didTimeout: boolean;
}
export type FrameCallbackType = (deadline: Deadline) => FrameCallbackType | void;
export interface CallbackNode {
  callback: FrameCallbackType;
  priorityLevel: number;
  expirationTime: number;
  next: CallbackNode | null;
  prev: CallbackNode | null;
}

export const unstable_ImmediatePriority = 1;
export const unstable_UserBlockingPriority = 2;
export const unstable_NormalPriority = 3;
export const unstable_IdlePriority = 4;
export function unstable_runWithPriority<T>(priorityLevel: number, eventHandler: () => T): T | undefined;
export function unstable_scheduleCallback(callback: FrameCallbackType, deprecated_options?: { timeout: number}): CallbackNode;
export function unstable_cancelCallback(callbackNode: CallbackNode): void;
export function unstable_wrapCallback(callback: FrameCallbackType): () => FrameCallbackType | undefined;
export function unstable_getCurrentPriorityLevel(): number;
export function unstable_now(): number;
