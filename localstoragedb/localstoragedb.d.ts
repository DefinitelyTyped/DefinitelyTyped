// Type definitions for localStorageDB v2.3.1
// Project: http://nadh.in/code/localstoragedb/
// Definitions by: Andy Hawkins <https://github.com/a904guy/,http://a904guy.com/,http://www.bmbsqd.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare type localStorageDB_callback = (object:localStorageDB_dynamicFields) => localStorageDB_dynamicFields;
declare type localStorageDB_callbackFilter = (object:localStorageDB_dynamicFields) => boolean;

declare class localStorageDB
{
	constructor(database_name:string,storage_engine?:string); // Constructor: storage_engine can either be localStorage (default) or sessionStorage
	isNew(): boolean; // Returns true if a database was created at the time of initialisation with the constructor
	drop(): void; // Deletes a database, and purges it from localStorage
	tableCount(): number; // Returns the number of tables in a database
	commit(): boolean; // Commits the database to localStorage. Returns true if successful, and false otherwise (highly unlikely)
	serialize(): string; // Returns the entire database as serialized JSON
	tableExists(table:string): boolean; // Checks whether a table exists in the database
	tableFields(table:string): string[]; // Returns the list of fields of a table
	createTable(table:string,fields:string[]); // Creates a table - fields is an array of string fieldnames. 'ID' is a reserved fieldname.
	createTableWithData(table:string,rows:{[T:string]:any}[]);
	/*
	 Creates a table and populates it
	 rows is an array of object literals where each object represents a record
	 [{field1: val, field2: val}, {field1: val, field2: val}]
	 */
	alterTable(table:string,new_fields:string[]|string,default_values:localStorageDB_dynamicFields|string);
	/*
	 Alter a table
	 - new_fields can be a array of columns OR a string of single column.
	 - default_values (optional) can be a object of column's default values OR a default value string for single column for existing rows.
	 */
	dropTable(table:string): void; // Deletes a table from the database
	truncate(table:string): void; // Empties all records in a table and resets the internal auto increment ID to 0
	columnExists(table:string,field:string): boolean; // Checks whether a column exists in database table.
	rowCount(table:string): number; // Returns the number of rows in a table
	insert(table:string, data:{[T:string]:any}): number;
	/*
	 Inserts a row into a table and returns its numerical ID
	 - data is an object literal with field-values
	 every row is assigned an auto-incremented numerical ID automatically
	 */
	query(table:string,query?:{[T:string]:any},limit?:number,start?:number,sort?:any): localStorageDB_fields<localStorageDB_dynamicFields>[];
	/* DEPRECATED
	 Returns an array of rows (object literals) from a table matching the query.
	 - query is either an object literal or null. If query is not supplied, all rows are returned
	 - limit is the maximum number of rows to be returned
	 - start is the number of rows to be skipped from the beginning (offset)
	 - sort is an array of sort conditions, each one of which is an array in itself with two values
	 - distinct is an array of fields whose values have to be unique in the returned rows
	 Every returned row will have it's internal auto-incremented id assigned to the variable ID
	 */
	queryAll(table:string,params:localStorageDB_queryParams): localStorageDB_fields<localStorageDB_dynamicFields>[];
	/*
	 Returns an array of rows (object literals) from a table matching the query.
	 - query is either an object literal or null. If query is not supplied, all rows are returned
	 - limit is the maximum number of rows to be returned
	 - start is the number of rows to be skipped from the beginning (offset)
	 - sort is an array of sort conditions, each one of which is an array in itself with two values
	 - distinct is an array of fields whose values have to be unique in the returned rows
	 Every returned row will have it's internal auto-incremented id assigned to the variable ID
	 */
	update(table:string,query:localStorageDB_dynamicFields|localStorageDB_callbackFilter,update?:localStorageDB_callback): number;
	/*
	 Updates existing records in a table matching query, and returns the number of rows affected
	 - query is an object literal or a function. If query is not supplied, all rows are updated
	 - update_function is a function that returns an object literal with the updated values
	 */
	insertOrUpdate(table:string,query:localStorageDB_dynamicFields|localStorageDB_callbackFilter,data:localStorageDB_dynamicFields): number;
	/*
	 Inserts a row into a table if the given query matches no results, or updates the rows matching the query.
	 - query is either an object literal, function, or null.
	 - data is an object literal with field-values
	 Returns the numerical ID if a new row was inserted, or an array of IDs if rows were updated
	 */
	deleteRows(table:string,query:localStorageDB_dynamicFields|localStorageDB_callbackFilter): number;
	/*
	 Deletes rows from a table matching query, and returns the number of rows deleted
	 - query is either an object literal or a function. If query is not supplied, all rows are deleted
	 */
}

interface localStorageDB_fields<T> {
	ID: number;
}

interface localStorageDB_dynamicFields {
	[T:string]: any;
}

interface localStorageDB_queryParams {
	query?: {[T:string]:any}; // - query is either an object literal or null. If query is not supplied, all rows are returned
	limit?: number; // - limit is the maximum number of rows to be returned
	start?: number; // - start is the number of rows to be skipped from the beginning (offset)
	sort?: {[T:string]:any}[]; // - sort is an array of sort conditions, each one of which is an array in itself with two values
	distinct?: string[]; // - distinct is an array of fields whose values have to be unique in the returned rows
}

declare module 'localStorageDB' {
	export = localStorageDB;
}
