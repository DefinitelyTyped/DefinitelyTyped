export function escapeId(value: any, forbidQualified?: boolean): string;
export function escape(value: any, stringifyObjects?: boolean, timeZone?: string): string;
export function format(sql: string, args?: object | any[], stringifyObjects?: boolean, timeZone?: string): string;
export function raw(sql: string): { toSqlString: () => string };
