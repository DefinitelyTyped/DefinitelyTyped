// Type definitions for bookshelfjs v0.9.3
// Project: http://bookshelfjs.org/
// Definitions by: Andrew Schurman <http://github.com/arcticwaters>, Vesa Poikajärvi <https://github.com/vesse>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import Knex = require('knex');
import knex = require('knex');
import BlueBird = require('bluebird');
import Lodash = require('lodash');
import createError = require('create-error');

interface Bookshelf extends Bookshelf.Events<any> {
	VERSION: string;
	knex: knex;
	Model: typeof Bookshelf.Model;
	Collection: typeof Bookshelf.Collection;

	plugin(name: string | string[] | Function, options?: any): Bookshelf;
	transaction<T>(callback: (transaction: knex.Transaction) => BlueBird<T>): BlueBird<T>;
}

declare function Bookshelf(knex: knex): Bookshelf;

declare namespace Bookshelf {
	type SortOrder = 'ASC'|'asc'|'DESC'|'desc';

	abstract class Events<T> {
		on(event?: string, callback?: EventFunction<T>, context?: any): void;
		off(event?: string): void;
		trigger(event?: string, ...args: any[]): void;
		triggerThen(name: string, ...args: any[]): BlueBird<any>;
		once(event: string, callback: EventFunction<T>, context?: any): void;
	}

	interface IModelBase {
		/** Should be declared as a getter instead of a plain property. */
		hasTimestamps?: boolean | string[];
		/** Should be declared as a getter instead of a plain property. Should be required, but cannot have abstract properties yet. */
		tableName?: string;
	}

        interface ModelBase<T extends Model<any>> extends IModelBase { }
	abstract class ModelBase<T extends Model<any>> extends Events<T | Collection<T>> {
		/** If overriding, must use a getter instead of a plain property. */
		idAttribute: string;

		// See https://github.com/tgriesser/bookshelf/blob/0.9.4/src/base/model.js#L178
		// See https://github.com/tgriesser/bookshelf/blob/0.9.4/src/base/model.js#L213
		id: any;

		// See https://github.com/tgriesser/bookshelf/blob/0.9.4/src/base/model.js#L28
		attributes: any;

		constructor(attributes?: any, options?: ModelOptions);

		clear(): T;
		clone(): T;
		escape(attribute: string): string;
		format(attributes: any): any;
		get(attribute: string): any;
		has(attribute: string): boolean;
		hasChanged(attribute?: string): boolean;
		isNew(): boolean;
		parse(response: Object): Object;
		previousAttributes(): any;
		previous(attribute: string): any;
		related<R extends Model<any>>(relation: string): R | Collection<R>;
		serialize(options?: SerializeOptions): any;
		set(attribute?: { [key: string]: any }, options?: SetOptions): T;
		set(attribute: string, value?: any, options?: SetOptions): T;
		timestamp(options?: TimestampOptions): any;
		toJSON(options?: SerializeOptions): any;
		unset(attribute: string): T;

		// lodash methods
		invert<R extends {}>(): R;
		keys(): string[];
		omit<R extends {}>(predicate?: Lodash.ObjectIterator<any, boolean>, thisArg?: any): R;
		omit<R extends {}>(...attributes: string[]): R;
		pairs(): any[][];
		pick<R extends {}>(predicate?: Lodash.ObjectIterator<any, boolean>, thisArg?: any): R;
		pick<R extends {}>(...attributes: string[]): R;
		values(): any[];
	}

	class Model<T extends Model<any>> extends ModelBase<T> {
		static collection<T extends Model<any>>(models?: T[], options?: CollectionOptions<T>): Collection<T>;
		static count(column?: string, options?: SyncOptions): BlueBird<number>;
		/** @deprecated use Typescript classes */
		static extend<T extends Model<any>>(prototypeProperties?: any, classProperties?: any): Function; // should return a type
		static fetchAll<T extends Model<any>>(): BlueBird<Collection<T>>;
		/** @deprecated should use `new` objects instead. */
		static forge<T>(attributes?: any, options?: ModelOptions): T;
		static where<T>(properties: { [key: string]: any }): T;
		static where<T>(key: string, operatorOrValue: string | number | boolean, valueIfOperator?: string | number | boolean): T;

		belongsTo<R extends Model<any>>(target: { new (...args: any[]): R }, foreignKey?: string, foreignKeyTarget?: string): R;
		belongsToMany<R extends Model<any>>(target: { new (...args: any[]): R }, table?: string, foreignKey?: string, otherKey?: string, foreignKeyTarget?: string, otherKeyTarget?: string): Collection<R>;
		count(column?: string, options?: SyncOptions): BlueBird<number>;
		destroy(options?: DestroyOptions): BlueBird<T>;
		fetch(options?: FetchOptions): BlueBird<T>;
		fetchAll(options?: FetchAllOptions): BlueBird<Collection<T>>;
		hasMany<R extends Model<any>>(target: { new (...args: any[]): R }, foreignKey?: string, foreignKeyTarget?: string): Collection<R>;
		hasOne<R extends Model<any>>(target: { new (...args: any[]): R }, foreignKey?: string, foreignKeyTarget?: string): R;
		load(relations: string | string[], options?: LoadOptions): BlueBird<T>;
		morphMany<R extends Model<any>>(target: { new (...args: any[]): R }, name?: string, columnNames?: string[], morphValue?: string): Collection<R>;
		morphOne<R extends Model<any>>(target: { new (...args: any[]): R }, name?: string, columnNames?: string[], morphValue?: string): R;
		morphTo(name: string, columnNames?: string[], ...target: typeof Model[]): T;
		morphTo(name: string, ...target: typeof Model[]): T;
		orderBy(column: string, order?: SortOrder): T;

		// Declaration order matters otherwise TypeScript gets confused between query() and query(...query: string[])
		query(): Knex.QueryBuilder;
		query(callback: (qb: Knex.QueryBuilder) => void): T;
		query(...query: string[]): T;
		query(query: { [key: string]: any }): T;

		refresh(options?: FetchOptions): BlueBird<T>;
		resetQuery(): T;
		save(key?: string, val?: any, options?: SaveOptions): BlueBird<T>;
		save(attrs?: { [key: string]: any }, options?: SaveOptions): BlueBird<T>;
		through<R extends Model<any>>(interim: typeof Model, throughForeignKey?: string, otherKey?: string): R;
		where(properties: { [key: string]: any }): T;
		where(key: string, operatorOrValue: string | number | boolean, valueIfOperator?: string | number | boolean): T;

		// See https://github.com/tgriesser/bookshelf/blob/0.9.4/src/errors.js
		// See https://github.com/tgriesser/bookshelf/blob/0.9.4/src/model.js#L1280
		static NotFoundError: createError.Error<Error>;
		static NoRowsUpdatedError: createError.Error<Error>;
		static NoRowsDeletedError: createError.Error<Error>;
	}

	abstract class CollectionBase<T extends Model<any>> extends Events<T> {
		// See https://github.com/tgriesser/bookshelf/blob/0.9.4/src/base/collection.js#L573
		length: number;

		// See https://github.com/tgriesser/bookshelf/blob/0.9.4/src/base/collection.js#L21
		constructor(models?: T[], options?: CollectionOptions<T>);

		add(models: T[] | { [key: string]: any }[], options?: CollectionAddOptions): Collection<T>;
		at(index: number): T;
		clone(): Collection<T>;
		fetch(options?: CollectionFetchOptions): BlueBird<Collection<T>>;
		findWhere(match: { [key: string]: any }): T;
		get(id: any): T;
		invokeThen(name: string, ...args: any[]): BlueBird<any>;
		parse(response: any): any;
		pluck(attribute: string): any[];
		pop(): void;
		push(model: any): Collection<T>;
		reduceThen<R>(iterator: (prev: R, cur: T, idx: number, array: T[]) => R, initialValue: R, context: any): BlueBird<R>;
		remove(model: T, options?: EventOptions): T;
		remove(model: T[], options?: EventOptions): T[];
		reset(model: any[], options?: CollectionAddOptions): T[];
		serialize(options?: SerializeOptions): any[];
		set(models: T[] | { [key: string]: any }[], options?: CollectionSetOptions): Collection<T>;
		shift(options?: EventOptions): void;
		slice(begin?: number, end?: number): void;
		toJSON(options?: SerializeOptions): any[];
		unshift(model: any, options?: CollectionAddOptions): void;
		where(match: { [key: string]: any }, firstOnly: boolean): T | Collection<T>;

		// lodash methods
		all(predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any): boolean;
		all<R extends {}>(predicate?: R): boolean;
		any(predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any): boolean;
		any<R extends {}>(predicate?: R): boolean;
		chain(): Lodash.LoDashExplicitObjectWrapper<T>;
		collect(predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any): T[];
		collect<R extends {}>(predicate?: R): T[];
		contains(value: any, fromIndex?: number): boolean;
		countBy(predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any): Lodash.Dictionary<number>;
		countBy<R extends {}>(predicate?: R): Lodash.Dictionary<number>;
		detect(predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any): T;
		detect<R extends {}>(predicate?: R): T;
		difference(...values: T[]): T[];
		drop(n?: number): T[];
		each(callback?: Lodash.ListIterator<T, void>, thisArg?: any): Lodash.List<T>;
		each(callback?: Lodash.DictionaryIterator<T, void>, thisArg?: any): Lodash.Dictionary<T>;
		each(callback?: Lodash.ObjectIterator<T, void>, thisArg?: any): T;
		every(predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any): boolean;
		every<R extends {}>(predicate?: R): boolean;
		filter(predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any): T[];
		filter<R extends {}>(predicate?: R): T[];
		find(predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any): T;
		find<R extends {}>(predicate?: R): T;
		first(): T;
		foldl<R>(callback?: Lodash.MemoIterator<T, R>, accumulator?: R, thisArg?: any): R;
		foldr<R>(callback?: Lodash.MemoIterator<T, R>, accumulator?: R, thisArg?: any): R;
		forEach(callback?: Lodash.ListIterator<T, void>, thisArg?: any): Lodash.List<T>;
		forEach(callback?: Lodash.DictionaryIterator<T, void>, thisArg?: any): Lodash.Dictionary<T>;
		forEach(callback?: Lodash.ObjectIterator<T, void>, thisArg?: any): T;
		groupBy(predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any): Lodash.Dictionary<T[]>;
		groupBy<R extends {}>(predicate?: R): Lodash.Dictionary<T[]>;
		head(): T;
		include(value: any, fromIndex?: number): boolean;
		indexOf(value: any, fromIndex?: number): number;
		initial(): T[];
		inject<R>(callback?: Lodash.MemoIterator<T, R>, accumulator?: R, thisArg?: any): R;
		invoke(methodName: string | Function, ...args: any[]): any;
		isEmpty(): boolean;
		keys(): string[];
		last(): T;
		lastIndexOf(value: any, fromIndex?: number): number;

		// See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1ec3d51/lodash/lodash-3.10.d.ts#L7119
		// See https://github.com/Microsoft/TypeScript/blob/v1.8.10/lib/lib.core.es7.d.ts#L1122
		map<U>(predicate?: Lodash.ListIterator<T, U> | string, thisArg?: any): U[];
		map<U>(predicate?: Lodash.DictionaryIterator<T, U> | string, thisArg?: any): U[];
		map<U>(predicate?: string): U[];

		max(predicate?: Lodash.ListIterator<T, boolean> | string, thisArg?: any): T;
		max<R extends {}>(predicate?: R): T;
		min(predicate?: Lodash.ListIterator<T, boolean> | string, thisArg?: any): T;
		min<R extends {}>(predicate?: R): T;
		reduce<R>(callback?: Lodash.MemoIterator<T, R>, accumulator?: R, thisArg?: any): R;
		reduceRight<R>(callback?: Lodash.MemoIterator<T, R>, accumulator?: R, thisArg?: any): R;
		reject(predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any): T[];
		reject<R extends {}>(predicate?: R): T[];
		rest(): T[];
		select(predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any): T[];
		select<R extends {}>(predicate?: R): T[];
		shuffle(): T[];
		size(): number;
		some(predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any): boolean;
		some<R extends {}>(predicate?: R): boolean;
		sortBy(predicate?: Lodash.ListIterator<T, boolean> | Lodash.DictionaryIterator<T, boolean> | string, thisArg?: any): T[];
		sortBy<R extends {}>(predicate?: R): T[];
		tail(): T[];
		take(n?: number): T[];
		toArray(): T[];
		without(...values: any[]): T[];
	}

	class Collection<T extends Model<any>> extends CollectionBase<T> {
		/** @deprecated use Typescript classes */
		static extend<T>(prototypeProperties?: any, classProperties?: any): Function;
		/** @deprecated should use `new` objects instead. */
		static forge<T>(attributes?: any, options?: ModelOptions): T;

		attach(ids: any | any[], options?: SyncOptions): BlueBird<Collection<T>>;
		count(column?: string, options?: SyncOptions): BlueBird<number>;
		create(model: { [key: string]: any }, options?: CollectionCreateOptions): BlueBird<T>;
		detach(ids: any[], options?: SyncOptions): BlueBird<any>;
		detach(options?: SyncOptions): BlueBird<any>;
		fetchOne(options?: CollectionFetchOneOptions): BlueBird<T>;
		load(relations: string | string[], options?: SyncOptions): BlueBird<Collection<T>>;
		orderBy(column: string, order?: SortOrder): T;

		// Declaration order matters otherwise TypeScript gets confused between query() and query(...query: string[])
		query(): Knex.QueryBuilder;
		query(callback: (qb: Knex.QueryBuilder) => void): Collection<T>;
		query(...query: string[]): Collection<T>;
		query(query: { [key: string]: any }): Collection<T>;

		resetQuery(): Collection<T>;
		through<R extends Model<any>>(interim: typeof Model, throughForeignKey?: string, otherKey?: string): Collection<R>;
		updatePivot(attributes: any, options?: PivotOptions): BlueBird<number>;
		withPivot(columns: string[]): Collection<T>;

		// See https://github.com/tgriesser/bookshelf/blob/0.9.4/src/collection.js#L389
		static EmptyError: createError.Error<Error>;
	}

	interface ModelOptions {
		tableName?: string;
		hasTimestamps?: boolean;
		parse?: boolean;
	}

	interface LoadOptions extends SyncOptions {
		withRelated: (string | WithRelatedQuery)[];
	}

	interface FetchOptions extends SyncOptions {
		require?: boolean;
		columns?: string | string[];
		withRelated?: (string | WithRelatedQuery)[];
	}

	interface WithRelatedQuery {
		[index: string]: (query: Knex.QueryBuilder) => Knex.QueryBuilder;
	}

	interface FetchAllOptions extends FetchOptions {
	}

	interface SaveOptions extends SyncOptions {
		method?: string;
		defaults?: string;
		patch?: boolean;
		require?: boolean;
	}

	interface DestroyOptions extends SyncOptions {
		require?: boolean;
	}

	interface SerializeOptions {
		shallow?: boolean;
		omitPivot?: boolean;
	}

	interface SetOptions {
		unset?: boolean;
	}

	interface TimestampOptions {
		method?: string;
	}

	interface SyncOptions {
		transacting?: Knex.Transaction;
		debug?: boolean;
	}

	interface CollectionOptions<T> {
		comparator?: boolean | string | ((a: T, b: T) => number);
	}

	interface CollectionAddOptions extends EventOptions {
		at?: number;
		merge?: boolean;
	}

	interface CollectionFetchOptions {
		require?: boolean;
		withRelated?: string | string[];
	}

	interface CollectionFetchOneOptions {
		require?: boolean;
		columns?: string | string[];
	}

	interface CollectionSetOptions extends EventOptions {
		add?: boolean;
		remove?: boolean;
		merge?: boolean;
	}

	interface PivotOptions {
		query?: Function | any;
		require?: boolean;
	}

	interface EventOptions {
		silent?: boolean;
	}

	interface EventFunction<T> {
		(model: T, attrs: any, options: any): BlueBird<any> | void;
	}

	interface CollectionCreateOptions extends ModelOptions, SyncOptions, CollectionAddOptions, SaveOptions { }
}

export = Bookshelf;

