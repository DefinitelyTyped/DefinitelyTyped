import { Knex } from "knex";

export interface KnexCleanerOptions {
    /**
     * Choose between simply deleting all rows from table or truncating it completely. Default is 'truncate'
     */
    mode?: "truncate" | "delete" | undefined;

    /**
     * Used to tell PostgresSQL to reset the ID counter, default is true
     */
    restartIdentity?: boolean | undefined;

    /**
     * List of tables to ignore. Empty array by default.
     */
    ignoreTables?: string[] | undefined;
}

export function clean(knex: Knex, options?: KnexCleanerOptions): Promise<void>;
