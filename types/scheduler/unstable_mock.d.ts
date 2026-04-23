export * from ".";

export function log(value: unknown): void;
export function reset(): void;
export function unstable_advanceTime(ms: number): void;
export function unstable_clearLog(): unknown[];
export function unstable_flushAll(): void;
export function unstable_flushAllWithoutAsserting(): boolean;
export function unstable_flushExpired(): void;
export function unstable_flushNumberOfYields(count: number): void;
export function unstable_flushUntilNextPaint(): boolean;
export function unstable_hasPendingWork(): boolean;
export function unstable_setDisableYieldValue(newValue: boolean): void;
