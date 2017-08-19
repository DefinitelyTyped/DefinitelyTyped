// Type definitions for fecha 2.3
// Project: https://github.com/taylorhakes/fecha
// Definitions by: Goh Yisheng <https://github.com/9y5>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Days = [string, string, string, string, string, string, string];

export type Months = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
];

export interface i18nSettings {
    amPm: [string, string];
    dayNames: Days;
    dayNamesShort: Days;
    monthNames: Months;
    monthNamesShort: Months;
    DoFn(D: number): string;
}

export interface Masks {
    default: string;
    fullDate: string;
    longDate: string;
    longTime: string;
    mediumDate: string;
    mediumTime: string;
    shortDate: string;
    shortTime: string;
    [myMask: string]: string;
}

export let masks: Masks;

export let i18n: i18nSettings;

export function format(dateObj: Date | number, mask: string, i18nSettings?: i18nSettings): string;

export function parse(dateStr: string, format: string, i18nSettings?: i18nSettings): Date;

export as namespace Fecha;
