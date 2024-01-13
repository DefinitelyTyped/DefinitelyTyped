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
