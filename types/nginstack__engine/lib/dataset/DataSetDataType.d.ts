export const STRING = 'string';
export const MEMO = 'memo';
export const INT32 = 'int32';
export const INT64 = 'int64';
export const NUMBER = 'number';
export const DATE = 'date';
export const DATETIME = 'datetime';
export const BOOLEAN = 'boolean';

/**
 * Tipos de dados suportados por campos de DataSet.
 *
 * Veja hhttps://nginstack.com/docs/databases/ para mais detalhes de como os tipos das
 * colunas da base de dados são mapeadas para campos em um DataSet.
 * @enum {string}
 * @see module:@nginstack/engine/lib/database/DatabaseDataType
 * @see module:@nginstack/engine/lib/database/databaseToDataSetDataType
 */
export type DataSetFieldType =
    | typeof STRING
    | typeof MEMO
    | typeof INT32
    | typeof INT64
    | typeof NUMBER
    | typeof DATE
    | typeof DATETIME
    | typeof BOOLEAN;
