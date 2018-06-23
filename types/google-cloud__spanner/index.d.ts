// Type definitions for Google Cloud Spanner 1.4
// Project: https://github.com/googleapis/nodejs-spanner
// Definitions by: Jamie Talbot <https://github.com/majelbstoat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

/// <reference types="node"/>

declare module "@google-cloud/spanner" {
	export type SpannerDate = object;
	export type SpannerFloat64 = object;
	export type SpannerInt64 = object;

	class Spanner {
		COMMIT_TIMESTAMP: string;
		constructor(options?: SpannerClientOptions);
		date(value: string | Date): SpannerDate;
		float(value: string | number): SpannerFloat64;
		int(value: string | number): SpannerInt64;
		createInstanceRequest(
			name: string,
			config: CreateInstanceRequest,
			callback?: CreateInstanceCallback
		): Promise<CreateInstanceResponse>;
		getDatabasesStream(query?: GetDatabasesRequest): NodeJS.ReadableStream;
		getInstanceConfigs(
			query?: GetInstanceConfigsRequest,
			callback?: GetInstanceConfigsCallback
		): Promise<GetInstanceConfigsResponse>;
		getInstanceConfigsStream(
			query?: GetInstanceConfigsRequest
		): NodeJS.ReadableStream;
		getInstances(
			query?: GetInstancesRequest,
			callback?: GetInstancesCallback
		): Promise<GetInstancesResponse>;
		getInstancesStream(query?: GetInstancesRequest): NodeJS.ReadableStream;
		instance(name: string): Instance;
		operation(name: string): Operation;
	}

	export class Instance {
		id: string;
		constructor(spanner: Spanner, name: string);
		create(
			config: CreateInstanceRequest,
			callback: CreateInstanceCallback
		): Promise<CreateInstanceResponse>;
		createDatabase(
			name: string,
			options?: CreateDatabaseRequest,
			callback?: CreateDatabaseCallback
		): Promise<CreateDatabaseResponse>;
		database(database: string, poolOptions?: SessionPoolOptions): Database;
		delete(
			callback?: DeleteInstanceCallback
		): Promise<DeleteInstanceResponse>;
		exists(
			callback?: InstanceExistsCallback
		): Promise<InstanceExistsResponse>;
		get(
			options?: InstanceGetOptions,
			callback?: GetInstanceCallback
		): Promise<GetInstanceResponse>;
		getDatabases(
			query?: GetDatabasesRequest,
			callback?: GetDatabasesCallback
		): Promise<GetDatabasesResponse>;
		getMetadata(
			callback?: GetInstanceMetadataCallback
		): Promise<GetInstanceMetadataResponse>;
		setMetadata(
			metadata: object,
			callback?: LongRunningOperationCallback
		): Promise<LongRunningOperationResponse>;
	}

	export class Database {
		constructor(name: string, options: SessionPoolOptions);
		batchTransaction(
			identifier: TransactionIdentifier,
			options: TransactionOptions
		): BatchTransaction;
		close(callback?: CloseDatabaseCallback): Promise<any>;
		create(
			options?: CreateDatabaseRequest,
			callback?: CreateDatabaseCallback
		): Promise<CreateDatabaseResponse>;
		createBatchTransaction(
			options?: TransactionOptions,
			callback?: CreateTransactionCallback
		): Promise<CreateTransactionResponse>;
		createTable(
			schema: string,
			callback?: CreateTableCallback
		): Promise<CreateTableResponse>;
		delete(callback?: BasicCallback): Promise<BasicResponse>;
		exists(
			callback?: DatabaseExistsCallback
		): Promise<DatabaseExistsResponse>;
		get(
			options?: DatabaseGetOptions,
			callback?: GetDatabaseCallback
		): Promise<GetDatabaseResponse>;
		getMetadata(
			callback?: GetDatabaseMetadataCallback
		): Promise<GetDatabaseMetadataResponse>;
		getSchema(callback?: GetSchemaCallback): Promise<GetSchemaResponse>;
		getSessions(
			options?: GetSessionsRequest,
			callback?: GetSessionsCallback
		): Promise<GetSessionsResponse>;
		getTransaction(
			options?: TransactionOptions,
			callback?: GetTransactionCallback
		): Promise<GetTransactionResponse>;
		run(query: Query, callback?: RunCallback): Promise<RunResponse>;
		runTransaction(
			options?: TransactionOptions | RunTransactionCallback,
			callback?: RunTransactionCallback
		): void;
		table(name: string): Table;
		updateSchema(
			statements: string | string[] | UpdateDatabaseDDLRequest,
			callback?: LongRunningOperationCallback
		): Promise<LongRunningOperationResponse>;
	}

	class TransactionRequest {
		constructor(options: object);
		createReadStream(
			table: string,
			query: ReadStreamRequestOptions
		): NodeJS.ReadableStream;
		deleteRows(
			keys: KeyArg | KeyArg[],
			callback?: BasicCallback
		): Promise<BasicResponse>;
		insert(
			table: string,
			keyVals: KeyVal | KeyVal[],
			callback?: BasicCallback
		): Promise<BasicResponse>;
		insert(
			keyVals: KeyVal | KeyVal[],
			callback?: BasicCallback
		): Promise<BasicResponse>;
		read(
			query: TableReadRequestOptions,
			options?: TransactionOptions,
			callback?: TableReadCallback
		): Promise<TableReadResponse>;
		read(
			table: string,
			query: TableReadRequestOptions,
			options?: TransactionOptions,
			callback?: TableReadCallback
		): Promise<TableReadResponse>;
		replace(
			keyVals: KeyVal | KeyVal[],
			callback?: BasicCallback
		): Promise<BasicResponse>;
		update(
			keyVals: KeyVal | KeyVal[],
			callback?: BasicCallback
		): Promise<BasicResponse>;
		update(
			table: string,
			keyVals: KeyVal | KeyVal[],
			callback?: BasicCallback
		): Promise<BasicResponse>;
		upsert(
			keyVals: KeyVal | KeyVal[],
			callback?: BasicCallback
		): Promise<BasicResponse>;
	}

	export class Table extends TransactionRequest {
		database: Database;
		name: string;
		constructor(database: Database, name: string);
		create(
			schema: string,
			callback?: CreateTableCallback
		): Promise<CreateTableResponse>;
		delete(
			callback?: LongRunningOperationCallback
		): Promise<LongRunningOperationResponse>;
	}

	export class Transaction extends TransactionRequest {
		session: Session;
		constructor(session: Session, options: TransactionOptions);
		commit(callback?: BasicCallback): Promise<BasicResponse>;
		end(callback?: () => void): void;
		rollback(callback?: BasicCallback): Promise<BasicResponse>;
		run(
			query: string | Query,
			callback?: RunCallback
		): Promise<RunResponse>;
		runStream(query: string | Query): NodeJS.ReadableStream;
	}

	export class BatchTransaction extends Transaction {
		close(callback?: BasicCallback): Promise<BasicResponse>;
	}

	class Session {}

	type KeyVal = { [key: string]: string };
	type KeyArg = string | string[] | number | number[];

	export interface ReadStreamRequestOptions {
		columns: string[];
		keys: KeyArg | KeyArg[];
		index?: string;
		limit?: number;
	}
	export interface TableReadRequestOptions {
		columns: string[];
		keys?: KeyArg | KeyArg[];
		index?: string;
		json?: boolean;
		jsonOptions?: JSONOptions;
		keySet?: { all: boolean };
		limit?: number;
	}
	type TableReadResponse = [Row[]];
	type TableReadCallback = (err: Error | null, rows: Row[]) => void;

	export interface TransactionIdentifier {
		session: string;
		transaction: string;
		readTimestamp: string | Date;
	}
	export interface TransactionOptions {
		timeout?: number;
		readOnly?: boolean;
		exactStaleness?: number;
		readTimestamp?: Date;
		returnTimestamp?: boolean;
		strong?: boolean;
	}

	export interface InstanceGetOptions {
		autoCreate?: boolean;
	}

	export interface DatabaseGetOptions {
		autoCreate?: boolean;
	}

	export interface CreateInstanceRequest {
		config: string;
		nodes: number;
	}
	type CreateInstanceResponse = [Instance, Operation, object];
	type CreateInstanceCallback = (
		err: Error | null,
		instance: Instance,
		operation: Operation,
		apiResponse: object
	) => void;

	export interface GetDatabasesRequest {
		autoPaginate?: boolean;
		maxApiCalls?: number;
		maxResults?: number;
		pageSize?: number;
		pageToken?: string;
	}
	type GetDatabasesResponse = [Database[], object];
	type GetDatabasesCallback = (
		err: Error | null,
		databases: Database[],
		apiResponse: object
	) => void;

	export interface GetInstanceConfigsRequest {
		autoPaginate?: boolean;
		maxApiCalls?: number;
		maxResults?: number;
		pageSize?: number;
		pageToken?: string;
	}
	type GetInstanceConfigsResponse = [InstanceConfig[], object];
	type GetInstanceConfigsCallback = (
		err: Error | null,
		instanceConfigs: InstanceConfig[],
		apiResponse: object
	) => void;

	interface InstanceConfig {
		name: string;
		displayName: string;
	}

	export interface GetInstancesRequest {
		autoPaginate?: boolean;
		filter?: string;
		maxApiCalls?: number;
		maxResults?: number;
		pageSize?: number;
		pageToken?: string;
	}
	type GetInstancesResponse = [Instance[], object];
	type GetInstancesCallback = (
		err: Error | null,
		instances: Instance[],
		apiResponse: object
	) => void;

	export interface CreateDatabaseRequest {
		poolOptions?: SessionPoolOptions;
	}
	type CreateDatabaseResponse = [Database, Operation, object];
	type CreateDatabaseCallback = (
		err: Error | null,
		database: Database,
		operation: Operation,
		apiResponse: object
	) => void;

	type DeleteInstanceResponse = [object];
	type DeleteInstanceCallback = (
		err: Error | null,
		apiResponse: object
	) => void;

	type InstanceExistsResponse = [boolean];
	type InstanceExistsCallback = (err: Error | null, exists: boolean) => void;

	type GetInstanceResponse = [Instance, object];
	type GetInstanceCallback = (
		err: Error | null,
		instance: Instance,
		apiResponse: object
	) => void;

	type GetInstanceMetadataResponse = [object, object];
	type GetInstanceMetadataCallback = (
		err: Error | null,
		metadata: object,
		apiResponse: object
	) => void;

	type LongRunningOperationResponse = [Operation, object];
	type LongRunningOperationCallback = (
		err: Error | null,
		operation: Operation,
		apiResponse: object
	) => void;

	type CloseDatabaseCallback = (err: Error | null) => void;

	type CreateTransactionResponse = [BatchTransaction, object];
	type CreateTransactionCallback = (
		err: Error | null,
		transaction: BatchTransaction,
		apiResponse: object
	) => void;

	type CreateTableResponse = [Table, Operation, object];
	type CreateTableCallback = (
		err: Error | null,
		table: Table,
		operation: Operation,
		apiResponse: object
	) => void;

	type BasicResponse = [object];
	type BasicCallback = (err: Error | null, apiResponse: object) => void;

	type DatabaseExistsResponse = [boolean];
	type DatabaseExistsCallback = (err: Error | null, exists: boolean) => void;

	type GetDatabaseResponse = [Database, object];
	type GetDatabaseCallback = (
		err: Error | null,
		instances: Database,
		apiResponse: object
	) => void;

	type GetDatabaseMetadataResponse = [object, object];
	type GetDatabaseMetadataCallback = (
		err: Error | null,
		metadata: object,
		apiResponse: object
	) => void;

	type GetSchemaResponse = [string[], object];
	type GetSchemaCallback = (
		err: Error | null,
		statements: string[],
		apiResponse: object
	) => void;

	export interface GetSessionsRequest {
		autoPaginate?: boolean;
		filter?: string;
		maxApiCalls?: number;
		maxResults?: number;
		pageSize?: number;
		pageToken?: string;
	}
	type GetSessionsResponse = [Session[], object];
	type GetSessionsCallback = (
		err: Error | null,
		instance: Instance,
		operation: Operation,
		apiResponse: object
	) => void;

	type GetTransactionResponse = [Transaction];
	type GetTransactionCallback = (
		err: Error | null,
		transaction: Transaction
	) => void;

	export interface DatabaseRunRequest {
		exactStaleness?: number;
		readTimestamp?: Date;
		strong?: boolean;
	}
	type RunResponse = [Row[], object];
	type RunCallback = (err: Error | null, rows: Row[]) => void;

	type RunTransactionCallback = (
		err: Error | null,
		transaction: Transaction
	) => void;

	export interface UpdateDatabaseDDLRequest {
		database: string;
		statements: string[];
		operation_id?: string;
	}

	class Row {
		toJSON(): { [key: string]: any };
	}

	interface Field {
		name: string;
		value: any;
	}

	export interface SessionPoolOptions {
		acquireTimeout?: number;
		concurrency?: number;
		fail?: boolean;
		idlesAfter?: number;
		max?: number;
		maxIdle?: number;
		min?: number;
		keepAlive?: number;
		writes?: number;
	}

	type Operation = object;

	export interface SpannerClientOptions {
		projectId?: string;
		keyFilename?: string;
		email?: string;
		credentials?: Credentials;
		autoRetry?: boolean;
		maxRetries?: number;
		promise?: any;
	}

	interface Credentials {
		client_email?: string;
		private_key?: string;
	}

	export interface Query {
		sql: string | QueryOptions;
		options?: DatabaseRunRequest;
		callback?: RunCallback;
	}

	export interface QueryOptions {
		json?: boolean;
		jsonOptions?: JSONOptions;
		params?: { [key: string]: any };
		types?: object;
	}

	export interface JSONOptions {
		wrapNumbers?: boolean;
	}

	export default Spanner;
}
