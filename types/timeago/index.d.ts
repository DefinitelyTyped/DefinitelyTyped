/// <reference types="jquery" />

declare namespace Timeago {
    type DynamicMessage = (n: number, distanceMillis: number) => string;

    interface LocalizedStrings {
        prefixAgo: string | null;
        prefixFromNow: string | null;
        suffixAgo: string | null;
        suffixFromNow: string | null;
        inPast: string;
        seconds: string | DynamicMessage;
        minute: string | DynamicMessage;
        minutes: string | DynamicMessage;
        hour: string | DynamicMessage;
        hours: string | DynamicMessage;
        day: string | DynamicMessage;
        days: string | DynamicMessage;
        month: string | DynamicMessage;
        months: string | DynamicMessage;
        year: string | DynamicMessage;
        years: string | DynamicMessage;
        wordSeparator: string;
        numbers: string[];
    }

    interface Settings {
        refreshMillis: number;
        allowPast: boolean;
        allowFuture: boolean;
        localeTitle: boolean;
        cutoff: number;
        autoDispose: boolean;
        strings: LocalizedStrings;
    }

    interface TimeagoStatic {
        (timestamp: Date | string | number | Element): string;
        parse(timestamp: string): Date;
        inWords(distanceMillis: number): string;
        datetime(elem: Element): Date;
        isTime(elem: Element): boolean;
        settings: Settings;
    }
}

interface JQuery {
    timeago(action: "update", timestamp: Date | string): this;
    timeago(action?: "init" | "updateFromDOM" | "dispose"): this;
}

interface JQueryStatic {
    timeago: Timeago.TimeagoStatic;
}
