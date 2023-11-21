/// <reference types="node" />

// FIXME: Is this `any` really necessary?
type VariableArgFunction = (...params: any[]) => unknown;
type ArgumentTypes<F extends VariableArgFunction> = F extends (...args: infer A) => unknown ? A : never;
type ElementOf<T> = T extends Array<infer E> ? E : T;

declare namespace BetterSqlite3 {
    interface Statement<BindParameters extends unknown[]> {
        database: Database;
        source: string;
        reader: boolean;
        readonly: boolean;
        busy: boolean;

        run(...params: BindParameters): Database.RunResult;
        get(...params: BindParameters): unknown;
        all(...params: BindParameters): unknown[];
        iterate(...params: BindParameters): IterableIterator<unknown>;
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

        prepare<BindParameters extends unknown[] | {} = unknown[]>(
            source: string,
        ): BindParameters extends unknown[] ? Statement<BindParameters> : Statement<[BindParameters]>;
        transaction<F extends VariableArgFunction>(fn: F): Transaction<F>;
        exec(source: string): this;
        pragma(source: string, options?: Database.PragmaOptions): unknown;
        function(name: string, cb: (...params: unknown[]) => unknown): this;
        function(name: string, options: Database.RegistrationOptions, cb: (...params: unknown[]) => unknown): this;
        aggregate<T>(
            name: string,
            options: Database.RegistrationOptions & {
                start?: T | (() => T);
                // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
                step: (total: T, next: ElementOf<T>) => T | void;
                inverse?: ((total: T, dropped: T) => T) | undefined;
                result?: ((total: T) => unknown) | undefined;
            },
        ): this;
        loadExtension(path: string): this;
        close(): this;
        defaultSafeIntegers(toggleState?: boolean): this;
        backup(destinationFile: string, options?: Database.BackupOptions): Promise<Database.BackupMetadata>;
        table(name: string, options: VirtualTableOptions): this;
        unsafeMode(unsafe?: boolean): this;
        serialize(options?: Database.SerializeOptions): Buffer;
    }

    interface DatabaseConstructor {
        new(filename: string | Buffer, options?: Database.Options): Database;
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
        verbose?: ((message?: unknown, ...additionalArgs: unknown[]) => void) | undefined;
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

    type AggregateOptions = Parameters<BetterSqlite3.Database["aggregate"]>[1];

    interface BackupMetadata {
        totalPages: number;
        remainingPages: number;
    }
    interface BackupOptions {
        progress: (info: BackupMetadata) => number;
    }

    type SqliteError = typeof SqliteError;
    type Statement<BindParameters extends unknown[] | {} = unknown[]> = BindParameters extends unknown[]
        ? BetterSqlite3.Statement<BindParameters>
        : BetterSqlite3.Statement<[BindParameters]>;
    type ColumnDefinition = BetterSqlite3.ColumnDefinition;
    type Transaction<T extends VariableArgFunction = VariableArgFunction> = BetterSqlite3.Transaction<T>;
    type Database = BetterSqlite3.Database;
}

declare const Database: BetterSqlite3.DatabaseConstructor;
export = Database;
