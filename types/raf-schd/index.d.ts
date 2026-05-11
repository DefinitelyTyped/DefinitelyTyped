type ScheduledFn<T extends (...args: any[]) => void> = T & { cancel(): void };

declare function rafSchd<T extends (...args: any[]) => void>(fn: T): ScheduledFn<T>;

export = rafSchd;
