// Type definitions for raf-schd 4.0
// Project: https://github.com/alexreardon/raf-schd
// Definitions by: Adam Bergman <https://github.com/adambrgmn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

type ScheduledFn<T extends (...args: any[]) => void> = T & { cancel(): void };

declare function rafSchd<T extends (...args: any[]) => void>(fn: T): ScheduledFn<T>;

export = rafSchd;
