import { SQLValue } from "./prepSQLParams";

export interface SQLUpdateParams {
    updateColumnValues: string;
    wherePrimaryKey: string;
    updateFields: Record<string, SQLValue>;
}

declare function prepSQLUpdateParams<T extends Record<string, SQLValue>>(
    params: T,
    columns: Array<{ key: keyof T }>,
): SQLUpdateParams;

export default prepSQLUpdateParams;
