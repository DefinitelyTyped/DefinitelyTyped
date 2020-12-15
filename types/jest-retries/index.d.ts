// Type definitions for jest-retries 1.0
// Project: https://github.com/bluzi/jest-retries#readme
// Definitions by: Florent Jaby <https://github.com/Floby>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type DoneCallback = (...args: any[]) => any;
type ProvidesCallback = (done?: DoneCallback) => any;
declare function JestRetries(desc: string, retries: number, fn?: ProvidesCallback, timeout?: number): void;
export = JestRetries;
