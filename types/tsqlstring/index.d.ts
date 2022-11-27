// Type definitions for tsqlstring 1.0
// Project: https://github.com/kylefarris/tsqlstring
// Definitions by: Dong Joon Seo <https://github.com/srencat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function escapeId(value: any, forbidQualified?: boolean): string;
export function escape(value: any, stringifyObjects?: boolean, timeZone?: string): string;
export function format(sql: string, args?: object | any[], stringifyObjects?: boolean, timeZone?: string): string;
export function raw(sql: string): { toSqlString: () => string };
export function arrayToList(array: string[], timeZone: string): string;
export function dateToString(date: string | number | Date, timeZone: string): string;
export function bufferToString(buffer: any): string;
export function objectToValues(object: object, timeZone: string): string;
