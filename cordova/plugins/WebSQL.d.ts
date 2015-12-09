// Type definitions for Apache Cordova WebSQL plugin.
// Project: https://github.com/MSOpenTech/cordova-plugin-websql
// Definitions by: Microsoft Open Technologies, Inc. <http://msopentech.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// 
// Copyright (c) Microsoft Open Technologies, Inc.
// Licensed under the MIT license.

interface Window {
    /**
     * Creates (opens, if exist) database with supplied parameters.
     * @param  name        Database name
     * @param  version     Database version
     * @param  displayname Database display name
     * @param  size        Size, in bytes
     * @param  creationCallback Callback, that executed on database creation. Accepts Database object.
     */
    openDatabase(name: string,
        version: string,
        displayname: string,
        size: number,
        creationCallback?: (database: Database) => void): Database;
}

interface Database {
    /**
     * Starts new transaction.
     * @param callback        Function, that will be called when transaction starts.
     * @param errorCallback   Called, when Transaction fails.
     * @param successCallback Called, when transaction committed.
     */
    transaction(callback: (transaction: SqlTransaction) => void,
        errorCallback?: (error: SqlError) => void,
        successCallback?: () => void): void;
    /**
     * Starts new transaction.
     * @param callback        Function, that will be called when transaction starts.
     * @param errorCallback   Called, when Transaction fails.
     * @param successCallback Called, when transaction committed.
     */
    readTransaction(callback: (transaction: SqlTransaction) => void,
        errorCallback?: (error: SqlError) => void,
        successCallback?: () => void): void;
    name: string;
    version: string;
    displayName: string;
    size: number;
}

declare var Database: {
    /** Constructor for Database object */
    new(name: string,
        version: string,
        displayname: string,
        size: number,
        creationCallback: (database: Database)=> void): Database;
};

interface SqlTransaction {
    /**
     * Executes SQL statement via current transaction.
     * @param sql SQL statement to execute.
     * @param arguments SQL stetement arguments.
     * @param successCallback Called in case of query has been successfully done.
     * @param errorCallback   Called, when query fails. Return false to continue transaction; true or no return to rollback.
     */
    executeSql(sql: string,
        arguments?: any[],
        successCallback?: (transaction: SqlTransaction, resultSet: SqlResultSet) => void,
        errorCallback?: (transaction: SqlTransaction, error: SqlError) => any): void;
}

declare var SqlTransaction: {
    new(): SqlTransaction;
};

interface SqlResultSet {
    insertId: number;
    rowsAffected: number;
    rows: SqlResultSetRowList;
}

interface SqlResultSetRowList {
    length: number;
    item(index: number): Object;
}

interface SqlError {
    code: number;
    message: string;
}

declare var SqlError: {
    // Error code constants from http://www.w3.org/TR/webdatabase/#sqlerror
    UNKNOWN_ERR: number;
    DATABASE_ERR: number;
    VERSION_ERR: number;
    TOO_LARGE_ERR: number;
    QUOTA_ERR: number;
    SYNTAX_ERR: number;
    CONSTRAINT_ERR: number;
    TIMEOUT_ERR: number;
};