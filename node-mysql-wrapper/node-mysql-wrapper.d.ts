// Type definitions for node-mysql-wrapper
// Project: https://github.com/kataras/node-mysql-wrapper
// Definitions by: Makis Maropoulos <https://github.com/kataras>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='./../mysql/mysql.d.ts' />
///<reference path='./../bluebird/bluebird.d.ts' />

declare module "node-mysql-wrapper" {
    import * as Mysql from 'mysql';
    import * as Promise from 'bluebird';
    import {EventEmitter} from 'events';

    var EQUAL_TO_PROPERTY_SYMBOL: string;

    interface Map<T> {
        [index: string]: T;
    }

    class Helper {
        /** 
         * Callback like forEach
         * @name valueCallback
         * @function
         * @param {T} the value of the object's key 
         * @returnTye {U}
         * @return {U}
        */
        
        /**
         * Callback like forEach
         * @name keyCallback
         * @function
         * @param {string} the name of the object's key 
         * @returnTye {U}
         * @return {U}
        */

        constructor();
        
        /**
         * Create and return a copy of an object.
         * @param {T} object the object you want to copy.
         * @returnType {T}
         * @return {T}
         */
        static copyObject<T>(object: T): T;
        
        /**
         * Converts any_string to anyString and returns it.
         * @param {string} columnKey the string you want to convert.
         * @returnType {string}
         * @return {string}
         */
        static toObjectProperty(columnKey: string): string;
        
        /**
         * Converts anyString to any_string and returns it.
         * @param {string} objectKey the string you want to convert.
         * @returnType {string}
         * @return {string}
         */
        static toRowProperty(objectKey: string): string;
        
    
        
        /**
         * Iterate object's keys and return their values to the callback.
         * @param {Map<T>} map the object.
         * @param {valueCallback}
         * @returnType {U}
         * @return {U}
         */
        static forEachValue<T, U>(map: Map<T>, callback: (value: T) => U): U;

        /**
        * Iterate object's keys and return their names to the callback.
        * @param {Map<T>} map the object.
        * @param {keyCallback}
        * @returnType {U}
        * @return {U}
        */
        static forEachKey<T, U>(map: Map<T>, callback: (key: string) => U): U;
    }

    interface ICriteria {
        rawCriteriaObject: any;
        tables: string[];
        noDatabaseProperties: string[];
        whereClause: string;
    }

    class Criteria implements ICriteria {
        
        /**
         * The raw format of the criteria eg: {yearsOld:22}.
         */
        rawCriteriaObject: any;
        
        /**
         * Which tables to search after the find method of the proto table finish.
         */
        tables: string[];
        
        /**
         * The properties of the criteria which don't belong to the database's table.
         */
        noDatabaseProperties: string[];
        
        /**
         * The converted/exported where clause. 
         */
        whereClause: string;

        constructor(rawCriteriaObject: any, tables: string[], noDatabaseProperties: string[], whereClause: string);
    }

    class CriteriaBuilder<T> {
        private _table;
        constructor(table: Table<T>);
        
        /**
         * Builds the criteria raw object to Criteria object.
         * @param {any} rawCriteriaObject the criteria at raw format you pass eg: {yearsOld:18}.
         * @returnType {Criteria}
         * @return {Criteria}
         */
        build(rawCriteriaObject: any): Criteria;
    }

    class SelectQueryRules {
        orderByClause: string;
        groupByClause: string;
        limitClause: string;


        static build(): SelectQueryRules;
        static build(parentRule?: SelectQueryRules): SelectQueryRules;

        orderBy(columnKey: string, descending?: boolean): SelectQueryRules;

        groupBy(columnKey: string): SelectQueryRules;

        limit(limitRowsOrStart: number, limitEnd?: number): SelectQueryRules;

        clearOrderBy(): SelectQueryRules;

        clearGroupBy(): SelectQueryRules;

        clearLimit(): SelectQueryRules;

        clear(): SelectQueryRules;

        from(parentRule: SelectQueryRules): SelectQueryRules;

        toString(): string;
    }

    class SelectQuery<T> {

        private _rules: SelectQueryRules;
        private _table: Table<T>;
        private _criteriaRawJsObject: any;
        private _callback: (_results: T[]) => any;
        private callback: (resolve?: (thenableOrResult?: T | Promise.Thenable<T>) => void, reject?: (error?: any) => void) => void;

        constructor(table: Table<T>, criteriaRawJsObject: any, callback?: (_results: T[]) => any);

        orderBy(columnKey: string, descending?: boolean): SelectQuery<T>;

        groupBy(columnKey: string): SelectQuery<T>;

        limit(limitRowsOrStart: number, limitEnd?: number): SelectQuery<T>;

        /**
        * Executes the select and returns the Promise.
        */
        promise(): Promise<T[]>;
        
        /**
         * Exactly the same thing as promise().
         * Executes the select and returns the Promise.
         */
        execute(): Promise<T[]>;

        then(onFulfill: (value: any[]) => any|Promise.Thenable<any>): Promise<any>;
        then<U>(onFulfill: (value: T[]) => U|Promise.Thenable<U>, onReject: (error: any) => Promise.Thenable<U>, onProgress?: (note: any) => any): Promise<U>;
        then<U>(onFulfill: (value: T[]) => U|Promise.Thenable<U>, onReject?: (error: any) => U, onProgress?: (note: any) => any): Promise<U>;

    }

    class Connection extends EventEmitter {
        
        /**
         * The real database connection socket.
         */
        connection: Mysql.IConnection;
        
        /**
         * Collection of the supported event types for the tables.
         */
        eventTypes: string[];
        
        /**
         * Force to fetch ONLY these Database table names {array of string}.  
         */
        tableNamesToUseOnly: any[];
        
        /**
         * All tables {MysqlTable} inside this connection's database.
         */
        tables: Table<any>[];

        constructor(connection: string | Mysql.IConnection);
        
        /**
         * Creates the MysqlConnection from the connection url or the real connection object.
         * @param {string | Mysql.IConnection} connection the connection url or the real connection object.
         * @returnType {nothing}
         * @return {nothing}
         */
        create(connection: string | Mysql.IConnection): void;
        
        /**
         * Attach a real connection.
         * @param {Mysql.IConnection} connection the real connection object.
         * @returnType {nothing}
         * @return {nothing} 
         */
        attach(connection: Mysql.IConnection): void;
        
        /**
         * Close the entire real connection and remove all event's listeners (if exist).
         * @param {function} callback If error occurs when closing the connection, this callback has the responsibility to catch it.
         * @returnType {nothing}
         * @return {nothing} 
         */
        end(callback?: (error: any) => void): void;
        
        /**
         * Close the entire real connection and remove all event's listeners (if exist).
         * the difference from the 'end' is that this method doesn't care about errors so no callback passing here. 
         */
        destroy(): void;
        
        /**
         * Link the real connection with this MysqlConnection object.
         * @param {function} readyCallback when the link operation is done this callback is executed.
         * @returnType {Promise}
         * @return {Promise}
         */
        link(readyCallback?: () => void): Promise<void>;
        
        /**
         * Force to use/fetch information from only certain of database's tables, otherwise all database's tables information will be fetched.
         * @param {Array} tables the array of the tables  {string}
         * @returnType {nothing}
         * @return {nothing}
         */
        useOnly(...tables: any[]): void;
        
        /**
         * This method has the resposibility of fetching the correct tables from the database ( table = columns' names, primary key name).
         * @returnType {Promise}
         * @return {Promise}
         */
        fetchDatabaseInfornation(): Promise<void>;
        
        /**
         * Escape the query column's value  and return it.
         * @param {string} val the value which will be escaped. 
         * @returnType {string}
         * @return {string}
         */
        escape(val: string): string;
        
        /**
         * Call when must notify the Database events, SAVE(INSERT,UPDATE), REMOVE(DELETE).
         * @param {string} tableWhichCalled the table name which event is coming from.
         * @param {string} queryStr the full parsed query string which used to determinate the type of event to notify.
         * @param {any[]} parsedResults the parsed results (results after a method parse/edit/export them as objects), these are passing to the watch listener(s).
         * @returnType {nothing}
         * @return {nothing}
         */
        notice(tableWhichCalled: string, queryStr: string, parsedResults: any[]): void;
        
        /**
         * Adds an event listener/watcher on a table for a 'database event'.
         * @param {string} tableName the table name which you want to add the event listener.
         * @param {string or string[]} evtType the event(s) type you want to watch, one of these(string) or an array of them(string[]): ["INSERT", "UPDATE", "REMOVE", "SAVE"].
         * @param {function} callback Callback which has one parameter(typeof any[]) which filled by the parsedResults (results after query executed and exports to object(s)). 
         * @returnType {nothing}
         * @return {nothing}
         */
        watch(tableName: string, evtType: any, callback: (parsedResults: any[]) => void): void;
        
        /**
         * Removes an event listener/watcher from a table for a specific event type.
         * @param {string} tableName the table name which you want to remove the event listener. 
         * @param {string} evtType the Event type you want to remove, one of these: "INSERT", "UPDATE", "REMOVE", "SAVE".
         * @param {function} callbackToRemove the callback that you were used for watch this event type.
         * @returnType {nothing}
         * @return {nothing}
         */
        unwatch(tableName: string, evtType: string, callbackToRemove: (parsedResults: any[]) => void): void;
        
        /**
         * Executes a database query.
         * @param {string} queryStr the query text/string to be executed.
         * @param {function} callback the function will be called and fill the one and only parameter when an errors occurs.
         * @param {any[]} queryArguments (optional) the query arguments you want to pass into query. ['arg1','arg2']...
         * @returnType {nothing}
         * @return {nothing} 
         */
        query(queryStr: string, callback: (err: Mysql.IError, results: any) => any, queryArguments?: any[]): void;
        
        /**
         * Returns a MysqlTable object from the database factory. (Note: this method doesn't create anything, just finds and returns the correct table, you don't have to create anything at all. Tables are fetched by the library itself.)
         * If you are using typescript you can pass a class (generic<T>) in order to use the auto completion assistance on table's results methods(find,findById,findAll,save,remove,safeRemove). 
         * @param {string} tableName the table name which you want to get, on the form of: 'anyDatabaseTable' OR 'any_database_table' (possible your real table name into your database).
         * @returnType {MysqlTable}
         * @return {MysqlTable}
         */
        table<T>(tableName: string): Table<T>;
    }

    class Table<T> {
        private _name;
        private _connection;
        private _columns;
        private _primaryKey;
        private _criteriaBuilder;
        private _rules;
        constructor(tableName: string, connection: Connection);
        
        /**
         * An array of all columns' names inside this table.
         */
        columns: string[];
        
        /**
         * The name of the primary key column which this table is using.
         */
        primaryKey: string;
        
        /**
         * The MysqlConnection object which this MysqlTable belongs. 
         */
        connection: Connection;
        
        /**
         * The real database name of the table. Autofilled by library. 
         */
        name: string;
        
        /**
         * Set of the query rules that will be applied after the 'where clause' on each select query executed by this table. 
         */
        rules: SelectQueryRules;
        
        /**
        * Adds or turn on an event listener/watcher on a table for a 'database event'.
        * @param {string} evtType the event type you want to watch, one of these: ["INSERT", "UPDATE", "REMOVE", "SAVE"].
        * @param {function} callback Callback which has one parameter(typeof any[]) which filled by the parsedResults (results after query executed and exports to object(s)). 
        * @returnType {nothing}
        * @return {nothing}
        */
        on(evtType: string, callback: (parsedResults: any[]) => void): void;
            
        /**
         * Removes or turn off an event listener/watcher from a table for a specific event type.
         * @param {string} evtType the Event type you want to remove, one of these: "INSERT", "UPDATE", "REMOVE", "SAVE".
         * @param {function} callbackToRemove the callback that you were used for watch this event type.
         * @returnType {nothing}
         * @return {nothing}
         */
        off(evtType: string, callbackToRemove: (parsedResults: any[]) => void): void;
        
        /**
         * Use it when you want to check if extended function is exists here.
         * @param {string} extendedFunctionName the name of the function you want to check.
         * @returnType {boolean}
         * @return {boolean}
         */
        has(extendedFunctionName: string): boolean;
        
        /**
         * Extends this table's capabilities with a function.
         * @param {string} functionName the function name you want to use, this is used when you want to call this function later.
         * @param {function} theFunction the function with any optional parameters you want to pass along.
         * @returnType {nothing}
         * @return {nothing} 
         */
        extend(functionName: string, theFunction: (...args: any[]) => any): void;
        
        /**
         * Converts and returns an object from this form: { a_property:'dsda', other_property:something, any_property_name:true } to { aProperty:..., otherProperty...,anyPropertyName...}
         * @param {any} row the raw row object.
         * @returnType {any}
         * @return {any}
         */
        objectFromRow(row: any): any;
           
        /**
         * Converts and returns an object from this form: { aProperty:'dsda', otherProperty:something, anyPropertyName:true } to { a_property:..., other_property...,any_property_name...}
         * @param {any} row the raw row object.
         * @returnType {any}
         * @return {any}
         */
        rowFromObject(obj: any): any;
        
        /**
         * Returns and array of [columns[],values[]]
         * @param {any} jsObject the raw row object.
         * @returnType {array}
         * @return {array}
         */
        getRowAsArray(jsObject: any): Array<any>;
        
        /**
         * Returns the primary key's value from an object.
         * @param {any} jsObject the object which you want to find and return the value of the primary key.
         * @returnType {number | string}
         * @return {number | string}
         */
        getPrimaryKeyValue(jsObject: any): number | string;

        parseQueryResult(result: any, criteria: ICriteria): Promise<any>;
        
        /**
         * 
         */
        find(criteriaRawJsObject: any): SelectQuery<T>; // only criteria 
        find(criteriaRawJsObject: any, callback: ((_results: T[]) => any)): SelectQuery<T>; // criteria and callback
        find(criteriaRawJsObject: any, callback?: (_results: T[]) => any): SelectQuery<T>;

        findById(id: number|string): Promise<T>; // without callback
        findById(id: number | string, callback?: (result: T) => any): Promise<T>;

        findAll(): SelectQuery<T>; // without callback
        findAll(callback?: (_results: T[]) => any): SelectQuery<T>;

        save(criteriaRawJsObject: any): Promise<any>; //without callback
        save(criteriaRawJsObject: any, callback?: (_result: any) => any): Promise<any>;

        safeRemove(id: number | string): Promise<{
            affectedRows: number;
            table: string;
        }>; //withoutcallback
        safeRemove(id: number | string, callback?: (_result: {
            affectedRows: number;
            table: string;
        }) => any): Promise<{
            affectedRows: number;
            table: string;
        }>;

        remove(criteriaRawObject: any): Promise<{
            affectedRows: number;
            table: string;
        }>; // without callback
        remove(criteriaRawJsObject: any, callback?: (_result: {
            affectedRows: number;
            table: string;
        }) => any): Promise<{
            affectedRows: number;
            table: string;
        }>;
    }

    class Wrapper {
        connection: Connection;
        readyListenerCallbacks: Function[];
        constructor(connection?: Connection);
        static when(..._promises: Promise<any>[]): Promise<any>;
        setConnection(connection: Connection): void;
            
        /**
         * Force to use/fetch information from only certain of database's tables, otherwise all database's tables information will be fetched.
         * @param {Array} tables the array of the tables  {string}
         * @returnType {nothing}
         * @return {nothing}
         */
        useOnly(...useTables: any[]): void;

        has(tableName: string, functionName?: string): boolean;
        ready(callback: () => void): void;
        table<T>(tableName: string): Table<T>;
        noticeReady(): void;
        removeReadyListener(callback: () => void): void;
        query(queryStr: string, callback: (err: Mysql.IError, results: any) => any, queryArguments?: any[]): void;
        
        /**
        * Close the entire real connection and remove all event's listeners (if exist).
        * the difference from the 'end' is that this method doesn't care about errors so no callback passing here. 
        */
        destroy(): void;
        
        /**
       * Close the entire real connection and remove all event's listeners (if exist).
       * @param {function} maybeAcallbackError If error occurs when closing the connection, this callback has the responsibility to catch it.
       * @returnType {nothing}
       * @return {nothing} 
       */
        end(maybeAcallbackError: (err: any) => void): void;

        newTableRules(tableName: string): SelectQueryRules;

        buildRules(): SelectQueryRules;
        buildRules(parentRules?: SelectQueryRules): SelectQueryRules;
    }

    function wrap(mysqlUrlOrObjectOrMysqlAlreadyConnection: Mysql.IConnection | string, ...useTables: any[]): Wrapper;
}
