// Type definitions for deasync 0.1
// Project: https://github.com/abbr/deasync
// Definitions by: Matt Rollins <https://github.com/Sicilica>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export = deasync;

declare function deasync(fn: (...args: any[]) => void): (...args: any[]) => any;
declare namespace deasync {
    function loopWhile(pred: () => boolean): void;
    function runLoopOnce(): void;
    function sleep(ms: number): void;
}
