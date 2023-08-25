// Type definitions for speedometer 1.1
// Project: https://github.com/mafintosh/speedometer#readme
// Definitions by: Dylan Grandjean <https://github.com/Dylan-G>
//                 François Arki <https://github.com/f-arki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace speedometer {
    type Speedometer = (delta: number) => number;
}
declare function speedometer(bufferTime: number): speedometer.Speedometer;

export = speedometer;
