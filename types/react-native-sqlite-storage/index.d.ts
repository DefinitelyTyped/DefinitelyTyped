// Type definitions for react-native-sqlite-storage 5.0
// Project: https://github.com/andpor/react-native-sqlite-storage
// Definitions by: Sergei Dryganets <https://github.com/dryganets>
//                 Deividi Cavarzan <https://github.com/cavarzan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export function DEBUG(isDebug: boolean): void;
export function enablePromise(enablePromise: boolean): void;

export function openDatabase(params: DatabaseParams): Promise<SQLiteDatabase>;
export function openDatabase(params: DatabaseParams, success?: () => void, error?: (e: SQLError) => void): SQLiteDatabase;
export function deleteDatabase(params: DatabaseParams): Promise<void>;
export function deleteDatabase(params: DatabaseParams, success?: () => void, error?: (err: SQLError) => void): void;
export type Location = 'default' | 'Library' | 'Documents' | "Shared";
export interface DatabaseOptionalParams {
    createFromLocation?: number | string;
    // Database encryption pass phrase
    key?: string;
    readOnly?: boolean;
}

export interface DatabaseParams extends DatabaseOptionalParams {
    name: string;
    /**
     * Affects iOS database file location
     * 'default': Library/LocalDatabase subdirectory - NOT visible to iTunes and NOT backed up by iCloud
     * 'Library': Library subdirectory - backed up by iCloud, NOT visible to iTunes
     * 'Documents': Documents subdirectory - visible to iTunes and backed up by iCloud
     */
    location: Location;
}

export interface ResultSet {
    insertId: number;
    rowsAffected: number;
    rows: ResultSetRowList;
}

export interface ResultSetRowList {
    length: number;
    raw(): any[];
    item(index: number): any;
}

export enum SQLErrors {
    UNKNOWN_ERR = 0,
    DATABASE_ERR = 1,
    VERSION_ERR = 2,
    TOO_LARGE_ERR = 3,
    QUOTA_ERR = 4,
    SYNTAX_ERR = 5,
    CONSTRAINT_ERR = 6,
    TIMEOUT_ERR = 7
}

export interface SQLError {
    code: number;
    message: string;
}

export type StatementCallback = (transaction: Transaction, resultSet: ResultSet) => void;
export type StatementErrorCallback = (transaction: Transaction, error: SQLError) => void;
export interface Transaction {
    executeSql(sqlStatement: string, arguments?: any[]): Promise<[Transaction, ResultSet]>;
    executeSql(sqlStatement: string, arguments?: any[], callback?: StatementCallback, errorCallback?: StatementErrorCallback): void;
}

export type TransactionCallback = (transaction: Transaction) => void;
export type TransactionErrorCallback = (error: SQLError) => void;

export interface SQLiteDatabase {
    transaction(scope: (tx: Transaction) => void): Promise<Transaction>;
    transaction(scope: (tx: Transaction) => void, error?: TransactionErrorCallback, success?: TransactionCallback): void;
    readTransaction(scope: (tx: Transaction) => void): Promise<TransactionCallback>;
    readTransaction(scope: (tx: Transaction) => void, error?: TransactionErrorCallback, success?: TransactionCallback): void;
    close(): Promise<void>;
    close(success: () => void, error: (err: SQLError) => void): void;
    executeSql(statement: string, params?: any[]): Promise<[ResultSet]>;
    executeSql(statement: string, params?: any[], success?: StatementCallback, error?: StatementErrorCallback): void;

    attach(nameToAttach: string, alias: string): Promise<void>;
    attach(nameToAttach: string, alias: string, success?: () => void, error?: (err: SQLError) => void): void;

    dettach(alias: string): Promise<void>;
    dettach(alias: string, success?: () => void, error?: (err: SQLError) => void): void;
}
