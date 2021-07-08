// Type definitions for human-date 1.4
// Project: https://github.com/montanaflynn/human-date
// Definitions by: Rico Sandyca Novenza <https://github.com/ricosandyca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface PrettyPrintOptions {
    showTime?: boolean | undefined;
}

export interface RelativeTimeOptions {
    futureSuffix?: string | undefined;
    pastSuffix?: string | undefined;
    presentText?: string | undefined;
    returnObject?: boolean | undefined;
    allUnits?: boolean | undefined;
}

export interface RelativeTimeReturns {
    seconds: number;
    hours: number;
    days: number;
    years: number;
    past: boolean;
}

// prettyPrint
export function prettyPrint(
    arg: string | Date | number,
    options?: PrettyPrintOptions
): string;

// relativeTime
export function relativeTime(
    arg: string | Date | number,
    options?: RelativeTimeOptions & { returnObject?: false | undefined }
): string;

export function relativeTime(
    arg: string | Date | number,
    options: RelativeTimeOptions & { returnObject: true }
): RelativeTimeReturns;

// monthName
export function monthName(arg: string | Date | number): string;

// toUTC
export function toUTC(arg: string | Date | number): Date;
