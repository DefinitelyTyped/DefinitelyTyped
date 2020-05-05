// Type definitions for hirestime 4.0
// Project: https://github.com/seriousManual/hirestime
// Definitions by: Junxiao Shi <https://github.com/yoursunny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export = hirestime;

interface getElapsed {
    (): number;
    s(): number;
    seconds(): number;
    ms(): number;
    milliseconds(): number;
    ns(): number;
    nanoseconds(): number;
}

declare function hirestime(): getElapsed;
