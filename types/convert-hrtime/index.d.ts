// Type definitions for convert-hrtime 2.0
// Project: https://github.com/sindresorhus/convert-hrtime#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = convertHrtime;

declare function convertHrtime(hrtime: [number, number]): convertHrtime.HRTime;

declare namespace convertHrtime {
    interface HRTime {
        seconds: number;
        milliseconds: number;
        nanoseconds: number;
    }
}
