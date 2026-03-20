import type { FrameCallbackType } from ".";

export type { FrameCallbackType } from ".";

export interface CallbackNode {
    _controller: {
        readonly signal: unknown;
        abort(reason?: unknown): void;
    };
}

export const unstable_ImmediatePriority = 1;
export const unstable_UserBlockingPriority = 2;
export const unstable_NormalPriority = 3;
export const unstable_IdlePriority = 5;
export const unstable_LowPriority = 4;
export const unstable_Profiling: null;
export function unstable_runWithPriority<T>(priorityLevel: number, eventHandler: () => T): T;
export function unstable_scheduleCallback(
    priorityLevel: number,
    callback: FrameCallbackType,
    options?: { delay?: number | undefined },
): CallbackNode;
export function unstable_next<T>(eventHandler: () => T): T;
export function unstable_cancelCallback(callbackNode: CallbackNode): void;
export function unstable_wrapCallback(callback: FrameCallbackType): () => FrameCallbackType;
export function unstable_forceFrameRate(fps: number): void;
export function unstable_getCurrentPriorityLevel(): number;
export function unstable_shouldYield(): boolean;
export function unstable_now(): number;
export function unstable_requestPaint(): void;
