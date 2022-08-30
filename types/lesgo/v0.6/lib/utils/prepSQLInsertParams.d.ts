import { SQLValue } from './prepSQLParams';

export interface SQLInsertParams {
    insertColumns: string;
    insertValues: string;
    insertFields: Record<string, SQLValue>;
}

declare function prepSQLInsertParams<T extends Record<string, SQLValue>>(
    params: T,
    columns: Array<{ key: keyof T | string }>,
): SQLInsertParams;

export default prepSQLInsertParams;
