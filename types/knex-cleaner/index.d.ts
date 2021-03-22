// Type definitions for knex-cleaner 1.3
// Project: https://github.com/steven-ferguson/knex-cleaner
// Definitions by: Karol Goraus <https://github.com/Szarlus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import * as Knex from 'knex';

export interface KnexCleanerOptions {
    /**
     * Choose between simply deleting all rows from table or truncating it completely. Default is 'truncate'
     */
    mode?: 'truncate' | 'delete';

    /**
     * Used to tell PostgresSQL to reset the ID counter, default is true
     */
    restartIdentity?: boolean;

    /**
     * List of tables to ignore. Empty array by default.
     */
    ignoreTables?: string[];
}

export function clean(knex: Knex, options?: KnexCleanerOptions): Promise<void>;
