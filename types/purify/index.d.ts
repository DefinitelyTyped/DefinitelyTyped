export as namespace purify;

export function alphaNumeric<T = string>(rawValue: string | number, defaultValue?: T): string | T;
export function alphaNumericWithDot<T = string>(rawValue: string | number, defaultValue?: T): string | T;
export function boolean(rawValue: boolean | string, defaultValue?: boolean): boolean;
export function domain<T = string>(rawValue: string, defaultValue?: T): string | T;
export function domainIdn<T = string>(rawValue: string, defaultValue?: T): string | T;
export function email<T = string>(rawValue: string, defaultValue?: T): string | T;
export function emailIdn<T = string>(rawValue: string, defaultValue?: T): string | T;
export function float<T = number>(rawValue: string | number, defaultValue?: T): number | T;
export function integer<T = any>(rawValue: string | number, defaultValue?: T): number | T;
export function integerInRange<T = number>(
    rawValue: string | number,
    lower: number,
    upper: number,
    defaultValue?: T,
): number | T;
export function json<T = any>(rawValue: string, defaultValue?: T): T;
export function lowerCaseUuid<T = string>(rawValue: string, defaultValue?: T): string | T;
export function nonEmptyAlphaNumeric<T = string>(rawValue: string | number, defaultValue?: T): string | T;
export function nonEmptyAlphaNumericWithDot<T = string>(rawValue: string | number, defaultValue?: T): string | T;
export function nonEmptyPrintableAscii<T = string>(rawValue: string, defaultValue?: T): string | T;
export function nonEmptyPrintableUnicode<T = string>(rawValue: string, defaultValue?: T): string | T;
export function nonEmptyVisibleAscii<T = string>(rawValue: string, defaultValue?: T): string | T;
export function nonEmptyVisibleUnicode<T = string>(rawValue: string, defaultValue?: T): string | T;
export function positiveFloat<T = number>(rawValue: string | number, defaultValue?: T): number | T;
export function positiveFloatOrZero<T = number>(rawValue: string | number, defaultValue?: T): number | T;
export function positiveInteger<T = number>(rawValue: string | number, defaultValue?: T): number | T;
export function positiveIntegerOrZero<T = number>(rawValue: string | number, defaultValue?: T): number | T;
export function printableAscii<T = string>(rawValue: string, defaultValue?: T): string | T;
export function printableUnicode<T = string>(rawValue: string, defaultValue?: T): string | T;
export function upperCaseUuid<T = string>(rawValue: string, defaultValue?: T): string | T;
export function url<T = string>(rawValue: string, defaultValue?: T): string | T;
export function urlWithLocalhost<T = string>(rawValue: string, defaultValue?: T): string | T;
export function uuid<T = string>(rawValue: string, defaultValue?: T): string | T;
export function visibleAscii<T = string>(rawValue: string, defaultValue?: T): string | T;
export function visibleUnicode<T = string>(rawValue: string, defaultValue?: T): string | T;

export const domainName: typeof domain;
export const domainNameIdn: typeof domainIdn;
export const emailAddress: typeof email;
export const emailAddressIdn: typeof emailIdn;
