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
