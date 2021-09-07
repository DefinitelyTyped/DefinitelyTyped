// Type definitions for better-sqlite3 7.4
// Project: http://github.com/JoshuaWise/better-sqlite3
// Definitions by: Ben Davies <https://github.com/Morfent>
//                 Mathew Rumsey <https://github.com/matrumz>
//                 Santiago Aguilar <https://github.com/sant123>
//                 Alessandro Vergani <https://github.com/loghorn>
//                 Andrew Kaiser <https://github.com/andykais>
//                 Mark Stewart <https://github.com/mrkstwrt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

type VariableArgFunction = (...params: any[]) => any;
type ArgumentTypes<F extends VariableArgFunction> = F extends (...args: infer A) => any ? A : never;

declare namespace BetterSqlite3 {
    interface NamespacedDict {
        [key: string]: object;
    }

    interface Statement<BindParameters extends any[]> {
        database: Database;
        source: string;
        reader: boolean;

        run(...params: BindParameters): Database.RunResult;
        get(...params: BindParameters): any;
        all(...params: BindParameters): any[];
        iterate(...params: BindParameters): IterableIterator<any>;
        pluck(toggleState?: boolean): this;
        expand(toggleState?: boolean): this;
        raw(toggleState?: boolean): this;
        columns(): ColumnDefinition[];
        safeIntegers(toggleState?: boolean): this;
    }

    interface NormalStatement<BindParameters extends any[], Row extends object, RowTypes extends any[] | {}>
        extends Statement<BindParameters> {
        get(...params: BindParameters): Row | undefined;
        all(...params: BindParameters): Row[];
        iterate(...params: BindParameters): IterableIterator<Row>;
        pluck(toggleState?: true): PluckedStatement<BindParameters, Row, RowTypes>;
        pluck(toggleState: false): this;
        expand(toggleState?: true): ExpandedStatement<BindParameters, Row, RowTypes>;
        expand(toggleState: false): this;
        raw(toggleState?: true): RawStatement<BindParameters, Row, RowTypes>;
        raw(toggleState: false): this;
        bind(...params: BindParameters): NormalStatement<[], Row, RowTypes>;
    }

    interface PluckedStatement<BindParameters extends any[], Row extends object, RowTypes extends any[] | {}>
        extends Statement<BindParameters> {
        get(...params: BindParameters): (RowTypes extends any[] ? RowTypes[0] : RowTypes) | undefined;
        all(...params: BindParameters): RowTypes extends any[] ? Array<RowTypes[0]> : RowTypes[];
        iterate(...params: BindParameters): IterableIterator<RowTypes extends any[] ? RowTypes[0] : RowTypes>;
        pluck(toggleState?: true): this;
        pluck(toggleState: false): NormalStatement<BindParameters, Row, RowTypes>;
        expand(toggleState?: true): ExpandedStatement<BindParameters, Row, RowTypes>;
        expand(toggleState: false): this;
        raw(toggleState?: true): RawStatement<BindParameters, Row, RowTypes>;
        raw(toggleState: false): this;
        bind(...params: BindParameters): PluckedStatement<[], Row, RowTypes>;
    }

    interface ExpandedStatement<BindParameters extends any[], Row extends object, RowTypes extends any[] | {}>
        extends Statement<BindParameters> {
        get(...params: BindParameters): NamespacedDict | undefined;
        all(...params: BindParameters): NamespacedDict[];
        iterate(...params: BindParameters): IterableIterator<NamespacedDict>;
        pluck(toggleState?: true): PluckedStatement<BindParameters, Row, RowTypes>;
        pluck(toggleState: false): this;
        expand(toggleState?: true): this;
        expand(toggleState: false): NormalStatement<BindParameters, Row, RowTypes>;
        raw(toggleState?: true): RawStatement<BindParameters, Row, RowTypes>;
        raw(toggleState: false): this;
        bind(...params: BindParameters): ExpandedStatement<[], Row, RowTypes>;
    }

    interface RawStatement<BindParameters extends any[], Row extends object, RowTypes extends any[] | {}>
        extends Statement<BindParameters> {
        get(...params: BindParameters): (RowTypes extends any[] ? RowTypes : [RowTypes, {}]) | undefined;
        all(...params: BindParameters): RowTypes extends any[] ? RowTypes[] : Array<[RowTypes, {}]>;
        iterate(...params: BindParameters): IterableIterator<RowTypes extends any[] ? RowTypes : [RowTypes, {}]>;
        pluck(toggleState?: true): PluckedStatement<BindParameters, Row, RowTypes>;
        pluck(toggleState: false): this;
        expand(toggleState?: true): ExpandedStatement<BindParameters, Row, RowTypes>;
        expand(toggleState: false): this;
        raw(toggleState?: true): this;
        raw(toggleState: false): NormalStatement<BindParameters, Row, RowTypes>;
        bind(...params: BindParameters): RawStatement<[], Row, RowTypes>;
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

        prepare<
            BindParameters extends any[] | {} = any[],
            Row extends object = object,
            RowTypes extends any[] | {} = any[],
        >(
            source: string,
        ): BindParameters extends any[]
            ? NormalStatement<BindParameters, Row, RowTypes>
            : NormalStatement<[BindParameters], Row, RowTypes>;
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
    }

    interface DatabaseConstructor {
        new (filename: string, options?: Database.Options): Database;
        (filename: string, options?: Database.Options): Database;
        prototype: Database;

        SqliteError: typeof SqliteError;
    }
}

declare class SqliteError implements Error {
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
    }

    interface PragmaOptions {
        simple?: boolean | undefined;
    }

    interface RegistrationOptions {
        varargs?: boolean | undefined;
        deterministic?: boolean | undefined;
        safeIntegers?: boolean | undefined;
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
    type Statement<
        BindParameters extends any[] | {} = any[],
        Row extends object = object,
        RowTypes extends any[] | {} = any[],
    > = BindParameters extends any[]
        ? BetterSqlite3.NormalStatement<BindParameters, Row, RowTypes>
        : BetterSqlite3.NormalStatement<[BindParameters], Row, RowTypes>;
    type ColumnDefinition = BetterSqlite3.ColumnDefinition;
    type Transaction = BetterSqlite3.Transaction<VariableArgFunction>;
    type Database = BetterSqlite3.Database;
}

declare const Database: BetterSqlite3.DatabaseConstructor;
export = Database;
