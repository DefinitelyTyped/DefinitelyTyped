// Type definitions for time-span 2.0
// Project: https://github.com/sindresorhus/time-span#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 Mike Dvorscak <https://github.com/mdvorscak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace timeSpan {
    type end = () => number;

    interface TimeSpanObject {
        rounded(): number;
        sec(): number;
        nano(): number;
    }
}

declare function timeSpan(): timeSpan.end & timeSpan.TimeSpanObject;

export = timeSpan;
