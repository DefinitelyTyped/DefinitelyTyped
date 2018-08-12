// Type definitions for @mysql/xdevapi 8.0
// Project: https://github.com/mysql/mysql-connector-nodejs (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Andrew Rioux <https://github.com/r-a303931>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export type DataModel = number;
export type DocumentOrJSON = any;
export type ParserOptions = DataModel;
export type SearchConditionStr = string;

export enum LockContention {
	DEFAULT = 0,
	NOWAIT = 1,
	SKIP_LOCKED = 2
}

export interface CollectionAddOptions {
	upsert: boolean;
}

export interface CreateCollectionOptions {
	ReuseExistingObject?: boolean;
}

export interface FieldDefinition {
	field: string;
	type: string;
	required?: boolean;
	options?: number;
	srid?: number;
}

export interface IndexDefinition {
	type?: 'INDEX' | 'SPATIAL';
	fields: FieldDefinition[];
}

export interface SocketFactory {
	// tslint:disable-next-line
	createSocket: Function;
}

export interface URI {
	host?: string;
	port?: number;
	password?: string;
	user?: string;
	auth?: string;
	socketFactory?: SocketFactory;
	ssl?: boolean;
	sslOptions?: any;
}

export interface Warning {
	level: number;
	code: number;
	msg: string;
}

export interface Binding<T> {
	bind(parameter: any): Binding<T>;
	bind(parameter: string, value: any): Binding<T>;
}

export interface CollectionOrdering {
	sort(...SortExprStr: string[]): CollectionOrdering;
	sort(SortExprStr: string | ReadonlyArray<string>): CollectionOrdering;
}

export interface DatabaseObject {
	getSession(): Session;
}

export interface Grouping {
	groupBy(...GroupByExprStr: string[]): Grouping;
	groupBy(GroupByExprStr: string | ReadonlyArray<string>): Grouping;

	having(expr: SearchConditionStr): Grouping;
}

export interface Limiting {
	limit(count: number, offset?: number): Limiting;

	offset(value: number): Limiting;
}

export interface Locking {
	lockExclusive(mode?: LockContention): Locking;

	lockShared(mode?: LockContention): Locking;
}

export interface Statement {
	addArgs(args: ReadonlyArray<any>): Statement;

	getArgs(): any[];

	getNamespace(): string;

	getRawStatement(): string;

	getSession(): Session;
}

export interface TableFiltering {
	where(criteria: string): TableFiltering;
}

export interface TableOrdering {
	orderBy(SortExprStr: string | ReadonlyArray<string>): TableOrdering;
}

export class Collection<T = {}> implements DatabaseObject {
	add(expr: T): CollectionAdd<T>;

	addOrReplaceOne(id: string, data: T): Promise<Result>;

	count(): Promise<number>;

	createIndex(
		name: string,
		constraint: IndexDefinition
	): Promise<boolean>;

	dropIndex(name: string): Promise<boolean>;

	existsInDatabase(): Promise<boolean>;

	find(expr: SearchConditionStr): CollectionFind<T>;

	getName(): string;

	getOne(id: string): T;

	getSchema(): Schema;

	inspect(): { schema: string; collection: string };

	modify(expr: SearchConditionStr): CollectionModify<T>;

	remove(expr: SearchConditionStr): CollectionRemove<T>;

	removeOne(id: string): Promise<Result>;

	replaceOne(id: string, data: T): Promise<Result>;

	getSession(): Session;
}

export class CollectionAdd<T> {
	add(input: T | ReadonlyArray<T>): CollectionAdd<T>;

	execute(): Promise<Result>;
}

export class CollectionFind<T>
	implements Binding<T>, CollectionOrdering, Grouping, Limiting, Locking {
	execute(callback: (fields: T) => void): Promise<Result>;

	fields(projections: ReadonlyArray<string> | string): CollectionFind<T>;

	// tslint:disable-next-line
	bind(parameter: any): CollectionFind<T>;
	// tslint:disable-next-line
	bind(parameter: string, value: any): CollectionFind<T>;

	sort(...SortExprStr: string[]): CollectionFind<T>;
	sort(SortExprStr: string | ReadonlyArray<string>): CollectionFind<T>;

	groupBy(...GroupByExprStr: string[]): CollectionFind<T>;
	groupBy(GroupByExprStr: string | ReadonlyArray<string>): CollectionFind<T>;

	having(expr: SearchConditionStr): CollectionFind<T>;

	limit(count: number, offset?: number): CollectionFind<T>;

	offset(value: number): CollectionFind<T>;

	lockExclusive(mode: LockContention): CollectionFind<T>;

	lockShared(mode: LockContention): CollectionFind<T>;
}

export class CollectionModify<T> implements Binding<T>, CollectionOrdering, Limiting {
	arrayAppend<
		K extends keyof T = keyof T,
		// tslint:disable-next-line:no-unnecessary-generics
		J extends keyof T[K] = keyof T[K]
		// tslint:disable-next-line:no-unnecessary-generics
	>(field: K, any: T[K][J]): CollectionModify<T>;

	arrayInsert<
		K extends keyof T = keyof T,
		// tslint:disable-next-line:no-unnecessary-generics
		J extends keyof T[K] = keyof T[K]
		// tslint:disable-next-line:no-unnecessary-generics
	>(field: K, any: T[K][J]): CollectionModify<T>;

	execute(): Promise<Result>;

	getClassName(): string;

	patch(properties: Partial<T>): CollectionModify<T>;

	set<K extends keyof T = keyof T>(field: K, any: T[K]): CollectionModify<T>;

	unset(fields: string | ReadonlyArray<string>): CollectionModify<T>;

	// tslint:disable-next-line
	bind(parameter: any): CollectionModify<T>;
	// tslint:disable-next-line
	bind(parameter: string, value: any): CollectionModify<T>;

	sort(...SortExprStr: string[]): CollectionModify<T>;
	sort(SortExprStr: string | ReadonlyArray<string>): CollectionModify<T>;

	limit(count: number, offset?: number): CollectionModify<T>;

	offset(value: number): CollectionModify<T>;
}

export class CollectionRemove<T> implements Binding<T>, CollectionOrdering, Limiting {
	execute(): Promise<Result>;

	// tslint:disable-next-line
	bind(parameter: any): CollectionRemove<T>;
	// tslint:disable-next-line
	bind(parameter: string, value: any): CollectionRemove<T>;

	sort(...SortExprStr: string[]): CollectionRemove<T>;
	sort(SortExprStr: string | ReadonlyArray<string>): CollectionRemove<T>;

	limit(count: number, offset?: number): CollectionRemove<T>;

	offset(value: number): CollectionRemove<T>;
}

export class Result {
	getAffectedItemsCount(): number;

	getAffectedRowsCount(): number;

	getAutoIncrementValue(): number;

	getGeneratedIds(): string[];

	getWarnings(): Promise<Warning[]>;

	getWarningsCount(): number;
}

export class Schema implements DatabaseObject {
	// tslint:disable-next-line
	createCollection<T>(
		name: string,
		options: CreateCollectionOptions
	// tslint:disable-next-line
	): Promise<Collection<T>>;

	dropCollection(name: string): Promise<boolean>;

	existsInDatabase(): Promise<boolean>;

	getClassName(): string;

	// tslint:disable-next-line:no-unnecessary-generics
	getCollection<T = {}>(name: string): Collection<T>;

	// tslint:disable-next-line:no-unnecessary-generics
	getCollectionAsTable<T = {}>(name: string): Table<T>;

	getCollections(): Promise<Collection[]>;

	getName(): string;

	// tslint:disable-next-line:no-unnecessary-generics
	getTable<T = {}>(name: string): Table<T>;

	getTables(): Promise<Table[]>;

	inspect(): { name: string };

	getSession(): Session;
}

export class Session {
	/**
	 * Constructor for a X Plugin Session
	 * @param opts
	 */
	constructor(opts?: URI);

	/**
	 * Close the server connection
	 */
	close(): Promise<void>;

	/**
	 * Commit a transaction
	 *
	 * This will commit a transaction on the server. On success, the returned Promise will resolve to true, else the Promise will be rejected with an Error
	 */
	commit(): Promise<boolean>;

	/**
	 * Connect to the database
	 */
	connect(): Promise<Session>;

	/**
	 * Create a schema in the database
	 */
	createSchema(schema: string): Promise<Schema>;

	/**
	 * Drop a schema (without failing even if it does not exist)
	 */
	dropSchema(schema: string): Promise<boolean>;

	/**
	 * Execute a raw SQL statement
	 *
	 * @deprecated since version 8.0.12. Will be removed in future versions. Use {@link Session#sql|Session.sql()} instead
	 */
	executeSql(sql: string, args?: any): SqlExecute;

	/**
	 * Get the default schema instance
	 */
	getDefaultSchema(): Schema;

	/**
	 * Get instance of Schema object for a specific database schema This will always succeed, even if the schema doesn't exist.
	 * Use Schema#existsInDatabase on the returned object to verify the schema exists.
	 */
	getSchema(name: string): Schema;

	/**
	 * Get schemas
	 */
	getSchemas(): Promise<Schema[]>;

	inspect(depth: number): any;

	/**
	 * Release a transaction savepoint with a given name
	 */
	releaseSavePoint(name?: string): Promise<void>;

	/**
	 * Rollback a transaction This will rollback the current transaction. On success the returned Promise will resolve to true,
	 * else the Promise will be rejected with an Error. Create a Schema in the database
	 */
	rollback(): Promise<boolean>;

	/**
	 * Rollback to a transaction savepoint with a given name
	 */
	rollbackTo(name?: string): Promise<void>;

	/**
	 * Create a new transaction savepoint. If a name is not provided, one will be generated using the connector-nodejs- format.
	 */
	setSavepoint(name?: string): Promise<string>;

	/**
	 * Execute a raw SQL statement.
	 */
	sql(sql: string): SqlExecute;

	startTransaction(): Promise<boolean>;
}

export class SqlExecute implements Statement {
	bind(values: string | ReadonlyArray<string>): SqlExecute;

	execute(
		rowcb: (items: any) => void,
		metacb?: (metadata: any) => void
	): Promise<void>;

	addArgs(args: ReadonlyArray<any>): SqlExecute;

	getArgs(): any[];

	getNamespace(): string;

	getRawStatement(): string;

	getSession(): Session;
}

export class Table<T = {}> {
	/**
	 * Retrieve the total number of rows in the table
	 *
	 * @deprecated since version 8.0.12. Will be removed in future versions
	 */
	count(): Promise<number>;

	delete(expr: SearchConditionStr): TableDelete<T>;

	exiistsInDatabase(): Promise<boolean>;

	getName(): string;

	getSchema(): Schema;

	insert(fields: string | Array<keyof T> | T): TableInsert<T>;

	inspect(): { schema: string; table: string };

	isView(): Promise<boolean>;

	select(expr?: string | ReadonlyArray<string>): TableSelect<T>;
	select(...expr: string[]): TableSelect<T>;

	update(expr: string): TableUpdate<T>;
}

export class TableDelete<T> implements Binding<T>, Limiting, TableOrdering {
	execute(): Promise<Result>;

	// tslint:disable-next-line
	bind(parameters: any): TableDelete<T>;
	// tslint:disable-next-line
	bind(parameter: string, value: any): TableDelete<T>;

	limit(count: number, offset?: number): TableDelete<T>;

	offset(value: number): TableDelete<T>;

	orderBy(SortExprStr: string | ReadonlyArray<string>): TableDelete<T>;
}

export class TableInsert<T> {
	execute(): Promise<Result>;

	values(ExprOrLiteral: string | ReadonlyArray<string>): TableInsert<T>;
}

export class TableSelect<T>
	implements Binding<T>, Grouping, Limiting, Locking, TableFiltering, TableOrdering {
	execute(
		rowcb?: (item: T) => void,
		metacb?: (metadata: any) => void
	): Promise<Result>;

	getViewDefinition(): string;

	// tslint:disable-next-line
	bind(parameter: any): TableSelect<T>;
	// tslint:disable-next-line
	bind(parameter: string, value: any): TableSelect<T>;

	sort(...SortExprStr: string[]): TableSelect<T>;
	sort(SortExprStr: string | ReadonlyArray<string>): TableSelect<T>;

	groupBy(...GroupByExprStr: string[]): TableSelect<T>;
	groupBy(GroupByExprStr: string | ReadonlyArray<string>): TableSelect<T>;

	having(expr: SearchConditionStr): TableSelect<T>;

	limit(count: number, offset?: number): TableSelect<T>;

	offset(value: number): TableSelect<T>;

	lockExclusive(mode: LockContention): TableSelect<T>;

	lockShared(mode: LockContention): TableSelect<T>;

	orderBy(SortExprStr: string | ReadonlyArray<string>): TableSelect<T>;

	where(criteria: string): TableSelect<T>;
}

export class TableUpdate<T> implements Binding<T>, Limiting, TableOrdering {
	execute(): Promise<Result>;

	getClassName(): string;

	set<K extends keyof T = keyof T>(field: K, expr: T[K]): TableUpdate<T>;

	// tslint:disable-next-line
	bind(parameter: any): TableUpdate<T>;
	// tslint:disable-next-line
	bind(parameter: string, value: any): TableUpdate<T>;

	limit(count: number, offset?: number): TableUpdate<T>;

	offset(value: number): TableUpdate<T>;

	orderBy(SortExprStr: string | ReadonlyArray<string>): TableUpdate<T>;
}

/**
 * Load a new or existing session
 */
export function getSession(options: string | URI): Promise<Session>;

/**
 * Retrieve the connector version number (from package.json)
 */
export function getVersion(): string;
