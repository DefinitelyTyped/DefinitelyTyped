// Type definitions for yesql 3.2
// Project: https://github.com/pihvi/yesql#readme
// Definitions by: Lluís Ulzurrun de Asanza Sáez <https://github.com/Sumolari>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

type AnyParams = Record<string, any>;

type Type = 'pg' | 'mysql';

/**
 * A map of a file name (e.g. `foo.sql`) to the file contents.
 */
type SqlFilesStatements = Record<string, string>;

interface PgPreparedStatement<TParams> {
    text: string;
    values: Array<TParams[keyof TParams]>;
}
type PgPreparedStatementFactoryGeneric<TParams> = (params: TParams) => PgPreparedStatement<TParams>;
type PgPreparedStatementFactory = <TParams = AnyParams>(params: TParams) => PgPreparedStatement<TParams>;

interface MySqlPreparedStatement<TParams> {
    sql: string;
    values: Array<TParams[keyof TParams]>;
}
type MySqlPreparedStatementFactoryGeneric<TParams> = (params: TParams) => MySqlPreparedStatement<TParams>;
type MySqlPreparedStatementFactory = <TParams = AnyParams>(params: TParams) => MySqlPreparedStatement<TParams>;

type PreparedStatementFactory<T extends Type> = {
    pg: PgPreparedStatementFactory;
    mysql: MySqlPreparedStatementFactory;
}[T];

/**
 * Foo
 * @example
 * ```typescript
 * declare const queries: ExecutableQueries<'pg', 'foo'>;
 * const { text, values } = queries.foo<{ baz: string }>({ baz: '' });
 * ```
 */
type ExecutableQueries<T extends Type, FnNames extends string> = Record<FnNames, PreparedStatementFactory<Type>>;

declare function readSqlFiles<T extends Type, FnNames extends string = never>(
    dir: string,
    options?: {
        pg?: boolean;
        type?: T;
    },
): SqlFilesStatements & ExecutableQueries<T, FnNames>;

declare namespace readSqlFiles {
    function pg<TParams extends object = AnyParams>(
        query: string,
    ): PgPreparedStatementFactoryGeneric<TParams> | PgPreparedStatementFactory;
    function mysql<TParams extends object = AnyParams>(
        query: string,
    ): MySqlPreparedStatementFactoryGeneric<TParams> | MySqlPreparedStatementFactory;
}

export = readSqlFiles;
