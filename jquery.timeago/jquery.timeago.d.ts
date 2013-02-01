// Type definitions for jQuery.timeago.js 1.0.2
// Project: http://timeago.yarp.com/
// Definitions by: François Guillot <http://fguillot.developpez.com/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface TimeagoSetings {
    refreshMillis?: number;
    allowFuture?: bool;
    strings?: {
        prefixAgo?: string;
        prefixFromNow?: string;
        suffixAgo?: string;
        suffixFromNow?: string;

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
        
        wordSeparator?: string;
        numbers?: any[];
    };
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
    isTime(element: Element): bool;
    isTime(element: JQuery): bool;
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