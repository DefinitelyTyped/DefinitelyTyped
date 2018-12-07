// Type definitions for sort-array 2.0
// Project: https://github.com/75lb/sort-array#readme
// Definitions by: mrmlnc <https://github.com/mrmlnc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

type ColumnNames<T> = keyof T | Array<keyof T>;
type CustomOrderTypes<T> = Array<T[keyof T]>;
type CustomOrder<T> = Record<keyof T, CustomOrderTypes<T>>;

declare function sortArray<T>(recordset: T[], columnNames: ColumnNames<T>, customOrder?: Partial<CustomOrder<T>>): T[];
declare function sortArray(recordset: object[], columnNames: string | string[], customOrder?: Record<string, any[]>): object[];

export = sortArray;
