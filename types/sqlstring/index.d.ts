// Type definitions for sqlstring 2.3
// Project: https://github.com/mysqljs/sqlstring
// Definitions by: Marvin Hagemeister <https://github.com/marvinhagemeister>
//                 koooge <https://github.com/koooge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export function escapeId(value: any, forbidQualified?: boolean): string;
export function escape(value: any, stringifyObjects?: boolean, timeZone?: string): string;
export function format(sql: string, args?: object | any[], stringifyObjects?: boolean, timeZone?: string): string;
export function raw(sql: string): { toSqlString: () => string };
