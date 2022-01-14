export default SQL;
/**
 * SQL module for DataFrame, providing SQL-like syntax for data exploration in DataFrames.
 */
declare class SQL {
    /**
     * Request on a SQL query.
     * @param {String} query A SQL query to request.
     * @returns The result of the query.
     * @example
     * DataFrame.request('SELECT * FROM tmp');
     */
    static request(query: string): any;
    /**
     * Drop or remove all registered tables.
     * @example
     * DataFrame.dropTables();
     */
    static dropTables(): void;
    /**
     * Drop or remove a registered table.
     * @param {String} tableName The registered table to drop.
     * @example
     * DataFrame.dropTable('tmp1');
     */
    static dropTable(tableName: string): void;
    /**
     * Rename a registered table.
     * @param {String} tableName The registered table to rename.
     * @param {String} replacement The new table name.
     * @param {Boolean} [overwrite=false] Overwrite if the table already exists.
     * @example
     * DataFrame.renameTable('tmp1', 'notTmp1');
     */
    static renameTable(tableName: string, replacement: string, overwrite?: boolean): void;
    /**
     * List all registered tables.
     * @returns {Array} A list of the registered tables.
     * @example
     * DataFrame.listTables();
     */
    static listTables(): any[];
    /**
     * Register a DataFrame as a temporary table.
     * @param {DataFrame} df The DataFrame to register.
     * @param {String} tableName The temporary table name.
     * @param {Boolean} [overwrite=false] Overwrite if the table already exists.
     * @example
     * DataFrame.registerTable('tmp', df);
     */
    static registerTable(df: DataFrame, tableName: string, overwrite?: boolean): void;
    /**
     * Start the SQL module.
     * @param {DataFrame} df An instance of DataFrame.
     */
    constructor(df: DataFrame);
    df: DataFrame;
    name: string;
    /**
     * Register the DataFrame as temporary table.
     * @param {String} tableName The name of the table.
     * @param {Boolean} [overwrite=false] Overwrite if the table already exists.
     * @example
     * df.sql.register('tmp');
     */
    register(tableName: string, overwrite?: boolean): DataFrame;
}
declare namespace SQL {
    export const tables: {};
}
import DataFrame from "../../dataframe";
