// Type definitions for node-pg-migrate 2.3
// Project: https://github.com/theoephraim/node-pg-migrate#readme
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface ColumnDefinition {
    type: string;
    unique?: boolean;
    primaryKey?: boolean;
    notNull?: boolean;
    check?: string;
    references?: string;
    onDelete?: string;
    onUpdate?: string;
}

export interface ColumnOptions {
    type?: string;
    default?: string | PgLiteral | null;
    notNull?: boolean;
    allowNull?: boolean;
}

export interface CreateIndexOptions {
    name?: string;
    unique?: boolean;
    where?: string;
    concurrently?: boolean;
    method?: 'btree' | 'hash' | 'gist' | 'spgist' | 'gin';
}

export interface ColumnDefinitions {
    [name: string]: ColumnDefinition;
}

export type TableDescriptor = string | { schema: string, name: string };

export interface MigrationBuilder {
    addExtension(extension: string | string[]): void;
    createExtension(extension: string | string[]): void;
    dropExtension(extension: string | string[]): void;

    createTable(tableName: TableDescriptor, columns: ColumnDefinitions, options?: { inherits?: string }): void;
    dropTable(tableName: TableDescriptor): void;
    renameTable(tablename: TableDescriptor, new_tablename: TableDescriptor): void;

    addColumn(tablename: TableDescriptor, new_columns: ColumnDefinitions): void;
    addColumns(tablename: TableDescriptor, new_columns: ColumnDefinitions): void;
    dropColumn(tablename: TableDescriptor, columns: string[] | { [name: string]: any }): void;
    dropColumns(tablename: TableDescriptor, columns: string[] | { [name: string]: any }): void;
    renameColumn(tablename: TableDescriptor, old_column_name: string, new_column_name: string): void;
    alterColumn(tableName: TableDescriptor, columnName: string, options: ColumnOptions): void;

    addConstraint(tablename: TableDescriptor, constraint_name: string, expression: string): void;
    createConstraint(tablename: TableDescriptor, constraint_name: string, expression: string): void;
    dropConstraint(tablename: TableDescriptor, constraint_name: string): void;

    addType(type_name: string, values: string[] | { [name: string]: string }): void;
    createType(type_name: string, values: string[] | { [name: string]: string }): void;
    dropType(type_name: string): void;

    createIndex(tableName: TableDescriptor, columns: string | string[], options?: CreateIndexOptions): void;
    dropIndex(tableName: TableDescriptor, columns: string | string[], options?: CreateIndexOptions): void;
    addIndex(tableName: TableDescriptor, columns: string | string[], options?: CreateIndexOptions): void;

    sql(sql: string, args?: object): void;
    func(sql: string): PgLiteral;

    noTransaction(): void;
}

export default function(options: any): Promise<void>;

export class PgLiteral {
    static create(str: string): PgLiteral;
    constructor(str: string);
}
