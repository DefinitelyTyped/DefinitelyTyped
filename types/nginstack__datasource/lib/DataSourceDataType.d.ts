export const STRING = "string";
export const CHAR = "char";
export const DATE = "date";
export const INT32 = "int32";
export const INT64 = "int64";
export const NUMBER = "number";
export const ARRAY = "array";
export const MEMO = "memo";
export const COMBO = "combo";
export const MASTER_DETAIL = "masterdetail";
export const BOOLEAN = "boolean";
export const PHONE = "phone";
export const FILE = "file";
export const PASSWORD = "password";
export const TIME = "time";
export const DATETIME = "datetime";
export const CEP = "cep";
export const LATITUDE = "latitude";
export const LONGITUDE = "longitude";
export const ANGLE = "angle";
export const GRID = "grid";
export const INTEGER = "integer";

export type DataSourceDataType =
    | typeof STRING
    | typeof CHAR
    | typeof DATE
    | typeof INT32
    | typeof INT64
    | typeof NUMBER
    | typeof ARRAY
    | typeof MEMO
    | typeof COMBO
    | typeof MASTER_DETAIL
    | typeof BOOLEAN
    | typeof PHONE
    | typeof FILE
    | typeof PASSWORD
    | typeof TIME
    | typeof DATETIME
    | typeof CEP
    | typeof LATITUDE
    | typeof LONGITUDE
    | typeof ANGLE
    | typeof GRID
    | typeof INTEGER;
