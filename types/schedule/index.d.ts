// Type definitions for schedule 0.5
// Project: https://reactjs.org/
// Definitions by: Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Deadline {
  timeRemaining(): number;
  didTimeout: boolean;
}
export type FrameCallbackType = (deadline: Deadline) => void;
export interface CallbackNode {
  callback: FrameCallbackType;
  timesOutAt: number;
  next: CallbackNode | null;
  prev: CallbackNode | null;
}

export function unstable_scheduleWork(callback: FrameCallbackType, options?: { timeout: number }): CallbackNode;
export function unstable_cancelScheduledWork(callbackNode: CallbackNode): void;
export function unstable_now(): number;
