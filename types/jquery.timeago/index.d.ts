/// <reference types="jquery"/>

interface TimeagoSetings {
    refreshMillis?: number | undefined;
    allowFuture?: boolean | undefined;
    strings?: {
        prefixAgo?: string | undefined;
        prefixFromNow?: string | undefined;
        suffixAgo?: string | undefined;
        suffixFromNow?: string | undefined;

        // Those can be string or Function
        seconds?: any;
        minute?: any;
        minutes?: any;
        hour?: any;
        hours?: any;
        day?: any;
        days?: any;
        month?: any;
        months?: any;
        year?: any;
        years?: any;

        wordSeparator?: string | undefined;
        numbers?: any[] | undefined;
    } | undefined;
}

interface TimeagoStatic {
    (timestamp: Date): string;
    (timestamp: number): string;
    (timestamp: string): string;
    (timestamp: Element): string;
    (timestamp: JQuery): string;
    settings: TimeagoSetings;
    inWords(distanceMillis: Date): string;
    inWords(distanceMillis: number): string;
    parse(iso8601: string): Date;
    datetime(element: Element): Date;
    datetime(element: JQuery): Date;
    isTime(element: Element): boolean;
    isTime(element: JQuery): boolean;
}

interface Timeago {
    (): JQuery;
}

interface JQueryStatic {
    timeago: TimeagoStatic;
}

interface JQuery {
    timeago: Timeago;
}
