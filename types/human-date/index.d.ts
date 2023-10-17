export interface PrettyPrintOptions {
    showTime?: boolean;
}

export interface RelativeTimeOptions {
    futureSuffix?: string;
    pastSuffix?: string;
    presentText?: string;
    returnObject?: boolean;
    allUnits?: boolean;
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
    arg?: string | Date | number,
    options?: PrettyPrintOptions,
): string;

// relativeTime
export function relativeTime(
    arg: string | Date | number,
    options?: RelativeTimeOptions & { returnObject?: false },
): string;

export function relativeTime(
    arg: string | Date | number,
    options: RelativeTimeOptions & { returnObject: true },
): RelativeTimeReturns;

// monthName
export function monthName(arg: string | Date | number): string;

// toUTC
export function toUTC(arg?: string | Date | number): Date;
