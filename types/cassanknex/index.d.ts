// Type definitions for cassanknex 1.19
// Project: https://github.com/azuqua/cassanknex
// Definitions by: Daniel Chao <https://github.com/bioball>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

import { EventEmitter } from "events";
import { Client, ClientOptions, types, ValueCallback } from "cassandra-driver";
import * as Long from "long";
import { Readable } from "stream";

declare function CassanKnex(options?: CassanKnex.DriverOptions): CassanKnex.CassanKnex;

export = CassanKnex;

declare namespace CassanKnex {
	interface DriverOptions {
		debug?: boolean;
		connection?: Client | ClientOptions;
	}

  /**
   * Will return the `never` type if `T[K]` is not a member of `Type`, for all `T[K]`.
   */
  type TypeMatchedValue<T, K extends keyof T, Type, This> = T[K] extends Type ? This : never;

  interface MappedDict<B> {
    [key: string]: B;
  }

  type InRestriction = 'in' | 'IN';

  type ComparisonRestriction = '=' | '<' | '>' | '<=' | '>=';

  type SelectAsClause<T> = {
    [P in keyof T]: string;
  };

	interface CassanKnex extends EventEmitter {
		(keyspace?: string): QueryBuilderRoot;
	}

	interface StreamParams {
		readable: (this: Readable) => any;
		end: (this: Readable) => any;
		error: (err: Error) => any;
	}

	interface QueryBuilderRoot {
		insert <T = any>(values: Partial<T> | T): InsertQueryBuilder;
		select <T = any>(...columns: Array<keyof T>): SelectQueryBuilder<T>;
		select <T = any>(values: SelectAsClause<T>): SelectQueryBuilder<T>;
		update <T = any>(table: string): UpdateQueryBuilder<T>;
		delete <T = any>(): DeleteQueryBuilder<T>;
		alterColumnFamily <T = any>(columnFamily: string): AlterColumnFamilyQueryBuilder<T>;
		createColumnFamily <T = any>(columnFamily: string): CreateColumnFamilyQueryBuilder<T>;
		createColumnFamilyIfNotExists <T = any>(columnFamily: string): CreateColumnFamilyQueryBuilder<T>;
		createIndex <T = any>(columnFamily: string, indexName: string, column: keyof T): QueryBuilder;
		createIndexCustom <T = any>(columnFamily: string, indexName: string, column: keyof T): QueryBuilder & CreateableIndexBuilder;
		createType <T = any>(typeName: string): CreateTypeQueryBuilder<T>;
		createTypeIfNotExists <T = any>(typeName: string): CreateTypeQueryBuilder<T>;
		dropColumnFamily(columnFamily: string): QueryBuilder;
		dropColumnFamilyIfExists(columnFamily: string): QueryBuilder;
		dropType(): QueryBuilder;
		dropTypeIfExists(): QueryBuilder;
		truncate(columnFamily: string): QueryBuilder;
		alterKeyspace(keyspace: string): KeyspaceQueryBuilder;
		createKeyspace(keyspace: string): KeyspaceQueryBuilder;
		createKeyspaceIfNotExists(keyspace: string): KeyspaceQueryBuilder;
		dropKeyspace(): QueryBuilder;
		dropKeyspaceIfExists(): QueryBuilder;
	}

	interface QueryBuilder {
		cql(): string;
		bindings(): any[];
		exec(cb: ValueCallback<types.ResultSet>): undefined;
		eachRow(onEachRow: (n: number, row: types.Row) => any, onError: (err: Error) => any): undefined;
		stream(params: StreamParams): undefined;
	}

	interface FieldValueQueryBuilder<T> {
		decimal <K extends keyof T>(columnName: K): TypeMatchedValue<T, K, types.BigDecimal, this>;
		boolean <K extends keyof T>(columnName: K): TypeMatchedValue<T, K, boolean, this>;
		blob <K extends keyof T>(columnName: K): TypeMatchedValue<T, K, Buffer, this>;
		timestamp <K extends keyof T>(columnName: K): TypeMatchedValue<T, K, Date, this>;
		date <K extends keyof T>(columnName: K): TypeMatchedValue<T, K, types.LocalDate, this>;
		inet <K extends keyof T>(columnName: K): TypeMatchedValue<T, K, types.InetAddress, this>;
		bigint <K extends keyof T>(columnName: K): TypeMatchedValue<T, K, Long, this>;
		counter <K extends keyof T>(columnName: K): TypeMatchedValue<T, K, Long, this>;
		double <K extends keyof T>(columnName: K): TypeMatchedValue<T, K, Long, this>;
		int <K extends keyof T>(columnName: K): TypeMatchedValue<T, K, number, this>;
		float <K extends keyof T>(columnName: K): TypeMatchedValue<T, K, number, this>;
		map <K extends keyof T, A extends string, B>(columnName: K, a: A, b: B): TypeMatchedValue<T, K, Map<A, B>, this>;
		ascii <K extends keyof T>(columnName: K): TypeMatchedValue<T, K, string, this>;
		text <K extends keyof T>(columnName: K): TypeMatchedValue<T, K, string, this>;
		timeuuid <K extends keyof T>(columnName: K): TypeMatchedValue<T, K, types.TimeUuid, this>;
		uuid <K extends keyof T>(columnName: K): TypeMatchedValue<T, K, types.Uuid, this>;
		varchar <K extends keyof T>(columnName: K): TypeMatchedValue<T, K, string, this>;
		list <K extends keyof T>(columnName: K, typeName: string): TypeMatchedValue<T, K, any[], this>;
		primary(primaryKey: string): this;
		set <K extends keyof T, A extends string>(columnName: K, a: A): TypeMatchedValue<T, K, Set<T[K]>, this>;
	}

	interface CreateableColumnFamilyBuilder<T> {
		withCaching(): this;
		withCompression(): this;
		withCompaction(): this;
		withClusteringOrderBy <K extends keyof T>(value: K, direction: 'desc' | 'asc'): this;
	}

	interface CreateableIndexBuilder {
		withOptions(opts: MappedDict<string>): this;
	}

	interface KeyspaceableQueryBuilder {
		withNetworkTopologyStrategy(strategy: MappedDict<number>): this;
		withSimpleStrategy(replicas: number): this;
		withDurableWrites(durableWrites: boolean): this;
	}

	interface InsertableQueryBuilder {
		into(table: string): this;
		ifNotExists(): this;
	}

	interface TtlableQueryBuilder {
		usingTimestamp(timestamp: number): this;
		usingTTL(ttl: number): this;
	}

	interface WhereableQueryBuilder<T> {
		where <K extends keyof T>(lhs: K, comparison: InRestriction, rhs: Array<T[K]>): this;
		where <K extends keyof T>(lhs: K, comparison: ComparisonRestriction, rhs: T[K]): this;
		orWhere <K extends keyof T>(lhs: K, comparison: InRestriction, rhs: Array<T[K]>): this;
		orWhere <K extends keyof T>(lhs: K, comparison: ComparisonRestriction, rhs: T[K]): this;
		andWhere <K extends keyof T>(lhs: K, comparison: InRestriction, rhs: Array<T[K]>): this;
		andWhere <K extends keyof T>(lhs: K, comparison: ComparisonRestriction, rhs: T[K]): this;
		tokenWhere <K extends keyof T>(lhs: K, comparison: InRestriction, rhs: Array<T[K]>): this;
		tokenWhere <K extends keyof T>(lhs: K, comparison: ComparisonRestriction, rhs: T[K]): this;
		ttl <K extends keyof T>(columnName: K): this;
	}

	interface IfableQueryBuilder<T> {
		if <K extends keyof T>(lhs: K, comparison: ComparisonRestriction, rhs: T[K] | null): this;
	}

	interface LimitableQueryBuilder {
		limit(limit: number): this;
		limitPerPartition(limit: number): this;
	}

	interface FromableQueryBuilder {
		from(table: string): this;
	}

	interface UpdateableQueryBuilder<T> {
		set <K extends keyof T>(key: K, value: T[K]): this;
		set(object: Partial<T>): this;
		add <K extends keyof T>(key: K, value: { [str: string]: T[K] }): TypeMatchedValue<T, K, Map<string, T[K]>, this>;
		add <K extends keyof T>(key: K, value: Array<T[K]>): TypeMatchedValue<T, K, any[] | Set<any>, this>;
		add(object: Partial<T>): this;
		remove <K extends keyof T>(key: K, value: Array<T[K]>): this;
		remove(object: Partial<T>): this;
		increment(column: keyof T, amount: number): this;
		increment(object: Partial<T>): this;
		decrement(column: keyof T, amount: number): this;
		decrement(object: Partial<T>): this;
	}

	interface AlterableQueryBuilder<T> {
		drop <K extends keyof T>(...columns: K[]): this;
		rename <K extends keyof T>(column: K, newColumn: K): this;
		alter <K extends keyof T>(column: K, newType: string): this;
	}

	type InsertQueryBuilder = QueryBuilder
		& InsertableQueryBuilder
		& TtlableQueryBuilder;
	type SelectQueryBuilder<T> = QueryBuilder
		& WhereableQueryBuilder<T>
		& LimitableQueryBuilder
		& FromableQueryBuilder;
	type UpdateQueryBuilder<T> = QueryBuilder
		& WhereableQueryBuilder<T>
		& UpdateableQueryBuilder<T>
		& IfableQueryBuilder<T>
		& TtlableQueryBuilder;
	type DeleteQueryBuilder<T> = QueryBuilder
		& WhereableQueryBuilder<T>
		& FromableQueryBuilder;
	type CreateColumnFamilyQueryBuilder<T> = QueryBuilder
		& FieldValueQueryBuilder<T>
		& CreateableColumnFamilyBuilder<T>;
	type KeyspaceQueryBuilder = QueryBuilder
		& KeyspaceableQueryBuilder;
	type CreateTypeQueryBuilder<T> = QueryBuilder
		& FieldValueQueryBuilder<T>;
	type AlterColumnFamilyQueryBuilder<T> = QueryBuilder
		& AlterableQueryBuilder<T>
		& FieldValueQueryBuilder<T>;
}
