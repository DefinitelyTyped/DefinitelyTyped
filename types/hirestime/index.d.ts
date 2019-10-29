// Type definitions for hirestime 3.2
// Project: https://github.com/seriousManual/hirestime
// Definitions by: Junxiao Shi <https://github.com/yoursunny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export = hirestime;

declare namespace hirestime {
    const S = "s";
    const MS = "ms";
    const NS = "ns";
}

type returnedFunction = (unit?: "s"|"ms"|"ns") => number;

declare function hirestime(): returnedFunction;
