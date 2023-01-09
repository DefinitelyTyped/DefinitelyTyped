// Type definitions for better-sqlite3 7.6
// Project: https://github.com/JoshuaWise/better-sqlite3
// Definitions by: Ben Davies <https://github.com/Morfent>
//                 Mathew Rumsey <https://github.com/matrumz>
//                 Santiago Aguilar <https://github.com/sant123>
//                 Alessandro Vergani <https://github.com/loghorn>
//                 Andrew Kaiser <https://github.com/andykais>
//                 Mark Stewart <https://github.com/mrkstwrt>
//                 Florian Stamer <https://github.com/stamerf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

/// <reference types="node" />

type VariableArgFunction = (...params: any[]) => any;
type ArgumentTypes<F extends VariableArgFunction> = F extends (...args: infer A) => any ? A : never;

declare namespace BetterSqlite3 {
    interface Statement<BindParameters extends any[]> {
        database: Database;
        source: string;
        reader: boolean;
        readonly: boolean;
        busy: boolean;

        run(...params: BindParameters): Database.RunResult;
        get(...params: BindParameters): any;
        all(...params: BindParameters): any[];
        iterate(...params: BindParameters): IterableIterator<any>;
        pluck(toggleState?: boolean): this;
        expand(toggleState?: boolean): this;
        raw(toggleState?: boolean): this;
        bind(...params: BindParameters): this;
        columns(): ColumnDefinition[];
        safeIntegers(toggleState?: boolean): this;
    }

    interface ColumnDefinition {
        name: string;
        column: string | null;
        table: string | null;
        database: string | null;
        type: string | null;
    }

    interface Transaction<F extends VariableArgFunction> {
        (...params: ArgumentTypes<F>): ReturnType<F>;
        default(...params: ArgumentTypes<F>): ReturnType<F>;
        deferred(...params: ArgumentTypes<F>): ReturnType<F>;
        immediate(...params: ArgumentTypes<F>): ReturnType<F>;
        exclusive(...params: ArgumentTypes<F>): ReturnType<F>;
    }

    interface VirtualTableOptions {
        rows: () => Generator;
        columns: string[];
        parameters?: string[] | undefined;
        safeIntegers?: boolean | undefined;
        directOnly?: boolean | undefined;
    }

    interface Database {
        memory: boolean;
        readonly: boolean;
        name: string;
        open: boolean;
        inTransaction: boolean;

        prepare<BindParameters extends any[] | {} = any[]>(
            source: string,
        ): BindParameters extends any[] ? Statement<BindParameters> : Statement<[BindParameters]>;
        transaction<F extends VariableArgFunction>(fn: F): Transaction<F>;
        exec(source: string): this;
        pragma(source: string, options?: Database.PragmaOptions): any;
        function(name: string, cb: (...params: any[]) => any): this;
        function(name: string, options: Database.RegistrationOptions, cb: (...params: any[]) => any): this;
        aggregate(name: string, options: Database.AggregateOptions): this;
        loadExtension(path: string): this;
        close(): this;
        defaultSafeIntegers(toggleState?: boolean): this;
        backup(destinationFile: string, options?: Database.BackupOptions): Promise<Database.BackupMetadata>;
        table(name: string, options: VirtualTableOptions): this;
        unsafeMode(unsafe?: boolean): this;
        serialize(options?: Database.SerializeOptions): Buffer;
    }

    interface DatabaseConstructor {
        new (filename: string | Buffer, options?: Database.Options): Database;
        (filename: string, options?: Database.Options): Database;
        prototype: Database;

        SqliteError: typeof SqliteError;
    }
}

declare class SqliteError extends Error {
    name: string;
    message: string;
    code: string;
    constructor(message: string, code: string);
}

declare namespace Database {
    interface RunResult {
        changes: number;
        lastInsertRowid: number | bigint;
    }

    interface Options {
        readonly?: boolean | undefined;
        fileMustExist?: boolean | undefined;
        timeout?: number | undefined;
        verbose?: ((message?: any, ...additionalArgs: any[]) => void) | undefined;
        nativeBinding?: string | undefined;
    }

    interface SerializeOptions {
        attached?: string;
    }

    interface PragmaOptions {
        simple?: boolean | undefined;
    }

    interface RegistrationOptions {
        varargs?: boolean | undefined;
        deterministic?: boolean | undefined;
        safeIntegers?: boolean | undefined;
        directOnly?: boolean | undefined;
    }

    interface AggregateOptions extends RegistrationOptions {
        start?: any;
        step: (total: any, next: any) => any;
        inverse?: ((total: any, dropped: any) => any) | undefined;
        result?: ((total: any) => any) | undefined;
    }

    interface BackupMetadata {
        totalPages: number;
        remainingPages: number;
    }
    interface BackupOptions {
        progress: (info: BackupMetadata) => number;
    }

    type SqliteError = typeof SqliteError;
    type Statement<BindParameters extends any[] | {} = any[]> = BindParameters extends any[]
        ? BetterSqlite3.Statement<BindParameters>
        : BetterSqlite3.Statement<[BindParameters]>;
    type ColumnDefinition = BetterSqlite3.ColumnDefinition;
    type Transaction<T extends VariableArgFunction = VariableArgFunction> = BetterSqlite3.Transaction<T>;
    type Database = BetterSqlite3.Database;
}

declare const Database: BetterSqlite3.DatabaseConstructor;
export = Database;
