export const STRING = 'string';
export const MEMO = 'memo';
export const INT32 = 'int32';
export const INT64 = 'int64';
export const NUMBER = 'number';
export const DATE = 'date';
export const DATETIME = 'datetime';
export const BOOLEAN = 'boolean';

export type DataSetFieldType =
    | typeof STRING
    | typeof MEMO
    | typeof INT32
    | typeof INT64
    | typeof NUMBER
    | typeof DATE
    | typeof DATETIME
    | typeof BOOLEAN;
