// Type definitions for better-sqlite3 7.4
// Project: http://github.com/JoshuaWise/better-sqlite3
// Definitions by: Ben Davies <https://github.com/Morfent>
//                 Mathew Rumsey <https://github.com/matrumz>
//                 Santiago Aguilar <https://github.com/sant123>
//                 Alessandro Vergani <https://github.com/loghorn>
//                 Andrew Kaiser <https://github.com/andykais>
//                 Mark Stewart <https://github.com/mrkstwrt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.2

/// <reference types="node"/>

type VariableArgFunction = (...params: any[]) => any;
type ArgumentTypes<F extends VariableArgFunction> = F extends (...args: infer A) => any ? A : never;

declare namespace BetterSqlite3 {
    type ValueType = bigint | number | string | Buffer | null;
    type Dict = Record<string, ValueType>;
    type NamespacedDict = Record<string, Dict>;
    type OrderedParameterType = ValueType | ValueType[];
    type ParameterTypes =
        | [OrderedParameterType]
        | OrderedParameterType[]
        | [object, ...OrderedParameterType[]]
        | [...OrderedParameterType[], object]
        | [object];
    type StrictDict<T> = Pick<T, { [Key in keyof T]-?: [T[Key]] extends [ValueType] ? Key : never }[keyof T]>;

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

    interface NormalStatement<
        BindParameters extends ParameterTypes,
        Row extends object,
        RowTypes extends ValueType[] | ValueType,
    > extends Statement<BindParameters> {
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

    interface PluckedStatement<
        BindParameters extends ParameterTypes,
        Row extends object,
        RowTypes extends ValueType[] | ValueType,
    > extends Statement<BindParameters> {
        get(...params: BindParameters): (RowTypes extends ValueType[] ? RowTypes[0] : RowTypes) | undefined;
        all(...params: BindParameters): RowTypes extends ValueType[] ? Array<RowTypes[0]> : RowTypes[];
        iterate(...params: BindParameters): IterableIterator<RowTypes extends ValueType[] ? RowTypes[0] : RowTypes>;
        pluck(toggleState?: true): this;
        pluck(toggleState: false): NormalStatement<BindParameters, Row, RowTypes>;
        expand(toggleState?: true): ExpandedStatement<BindParameters, Row, RowTypes>;
        expand(toggleState: false): this;
        raw(toggleState?: true): RawStatement<BindParameters, Row, RowTypes>;
        raw(toggleState: false): this;
        bind(...params: BindParameters): PluckedStatement<[], Row, RowTypes>;
    }

    interface ExpandedStatement<
        BindParameters extends ParameterTypes,
        Row extends object,
        RowTypes extends ValueType[] | ValueType,
    > extends Statement<BindParameters> {
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

    interface RawStatement<
        BindParameters extends ParameterTypes,
        Row extends object,
        RowTypes extends ValueType[] | ValueType,
    > extends Statement<BindParameters> {
        get(...params: BindParameters): (RowTypes extends ValueType[] ? RowTypes : [RowTypes, ValueType]) | undefined;
        all(...params: BindParameters): RowTypes extends ValueType[] ? RowTypes[] : Array<[RowTypes, ValueType]>;
        iterate(
            ...params: BindParameters
        ): IterableIterator<RowTypes extends ValueType[] ? RowTypes : [RowTypes, ValueType]>;
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
            BindParameters extends
                | ValueType
                | OrderedParameterType[]
                | [...OrderedParameterType[], object]
                | [object, ...OrderedParameterType[]]
                | object = any,
            Row extends object = Dict,
            RowTypes extends ValueType[] | ValueType = ValueType[],
        >(
            source: string,
        ): BindParameters extends ValueType
            ? NormalStatement<[BindParameters], StrictDict<Row>, RowTypes>
            : BindParameters extends OrderedParameterType[]
            ? NormalStatement<BindParameters, StrictDict<Row>, RowTypes>
            : BindParameters extends [...infer Ordered, infer Named]
            ? Ordered extends OrderedParameterType[]
                ? NormalStatement<[...Ordered, StrictDict<Named>], StrictDict<Row>, RowTypes>
                : BindParameters extends [infer Named, ...infer Ordered]
                ? Ordered extends OrderedParameterType[]
                    ? NormalStatement<[StrictDict<Named>, ...Ordered], StrictDict<Row>, RowTypes>
                    : never
                : never
            : BindParameters extends object
            ? NormalStatement<[StrictDict<BindParameters>], StrictDict<Row>, RowTypes>
            : NormalStatement<
                  | [ValueType]
                  | [Dict]
                  | OrderedParameterType[]
                  | [...OrderedParameterType[], Dict]
                  | [Dict, ...OrderedParameterType[]],
                  StrictDict<Row>,
                  RowTypes
              >;
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
        BindParameters extends
            | BetterSqlite3.ValueType
            | BetterSqlite3.OrderedParameterType[]
            | [...BetterSqlite3.OrderedParameterType[], object]
            | [object, ...BetterSqlite3.OrderedParameterType[]]
            | object = any,
        Row extends object = BetterSqlite3.Dict,
        RowTypes extends BetterSqlite3.ValueType[] | BetterSqlite3.ValueType = BetterSqlite3.ValueType[],
    > = BindParameters extends BetterSqlite3.ValueType
        ? BetterSqlite3.NormalStatement<[BindParameters], BetterSqlite3.StrictDict<Row>, RowTypes>
        : BindParameters extends BetterSqlite3.OrderedParameterType[]
        ? BetterSqlite3.NormalStatement<BindParameters, BetterSqlite3.StrictDict<Row>, RowTypes>
        : BindParameters extends [...infer Ordered, infer Named]
        ? Ordered extends BetterSqlite3.OrderedParameterType[]
            ? BetterSqlite3.NormalStatement<
                  [...Ordered, BetterSqlite3.StrictDict<Named>],
                  BetterSqlite3.StrictDict<Row>,
                  RowTypes
              >
            : BindParameters extends [infer Named, ...infer Ordered]
            ? Ordered extends BetterSqlite3.OrderedParameterType[]
                ? BetterSqlite3.NormalStatement<
                      [BetterSqlite3.StrictDict<Named>, ...Ordered],
                      BetterSqlite3.StrictDict<Row>,
                      RowTypes
                  >
                : never
            : never
        : BindParameters extends object
        ? BetterSqlite3.NormalStatement<
              [BetterSqlite3.StrictDict<BindParameters>],
              BetterSqlite3.StrictDict<Row>,
              RowTypes
          >
        : BetterSqlite3.NormalStatement<
              | [BetterSqlite3.ValueType]
              | BetterSqlite3.OrderedParameterType[]
              | [...BetterSqlite3.OrderedParameterType[], BetterSqlite3.Dict]
              | [BetterSqlite3.Dict, ...BetterSqlite3.OrderedParameterType[]]
              | [BetterSqlite3.Dict],
              BetterSqlite3.StrictDict<Row>,
              RowTypes
          >;
    type ColumnDefinition = BetterSqlite3.ColumnDefinition;
    type Transaction = BetterSqlite3.Transaction<VariableArgFunction>;
    type Database = BetterSqlite3.Database;
}

declare const Database: BetterSqlite3.DatabaseConstructor;
export = Database;
