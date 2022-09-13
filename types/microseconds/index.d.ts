// Type definitions for microseconds 0.2
// Project: https://github.com/kamicane/microseconds
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ParsedTimeStamp {
    microseconds: number;
    milliseconds: number;
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
    toString(): string;
}

export function now(): number;

export function parse(timestamp: number): ParsedTimeStamp;

export function since(timestamp: number): number;
