// Type definitions for human-date 1.4
// Project: https://github.com/montanaflynn/human-date
// Definitions by: Rico Sandyca Novenza <https://github.com/ricosandyca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Arg = string | Date | number;

export type PrettyPrintOptions = {
    showTime: boolean
};

export type RelativeTimeOptions = {
    futureSuffix: string
    pastSuffix: string
    presentText: string
    returnObject: boolean
    allUnits: boolean
};

export type RelativeTimeReturns = {
    seconds: number
    hours: number
    days: number
    years: number
    past: boolean
};

// prettyPrint
export function prettyPrint (
    arg: Arg,
    options?: PrettyPrintOptions
): string;

// relativeTime
export function relativeTime (
    arg: Arg,
    options?: RelativeTimeOptions
): string | RelativeTimeReturns;

// monthName
export function monthName (arg: Arg): string;

// toUTC
export function toUTC (arg: Arg): Date;
