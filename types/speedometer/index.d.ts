// Type definitions for speedometer 1.1
// Project: https://github.com/mafintosh/speedometer#readme
// Definitions by: dylan <https://github.com/Dylan-G>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Speedometer = (delta: number) => number

export default function (bufferTime?: number): Speedometer
